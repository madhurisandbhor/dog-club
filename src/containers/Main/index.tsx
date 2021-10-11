import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useReducer,
  lazy,
  Suspense,
} from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import clsx from 'clsx'
import ImageComponent from 'containers/ImageContainer'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Loading from 'components/Loading'
import reducer from 'utils/reducer'
import { ListStateType, PicStateType } from 'types/common'
import { ReactComponent as ArrowTop } from 'images/arrow-top.svg'
import styles from './styles'

type Props = WithStylesProps<typeof styles>

const UploadContainer = lazy(
  () => import('containers/UploadContainer'),
)

const MainContainer: FC<Props> = ({
  classes,
}: Props): JSX.Element => {
  const [list, setList] = useState<string[]>([])
  const [active, setActive] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)
  const listInitState = {
    loading: false,
    error: null,
    data: '',
  }
  const picInitState = {
    loading: false,
    error: null,
    data: [],
  }
  const [listState, listDispatch] = useReducer(
    reducer,
    listInitState as ListStateType,
  )
  const [picturesState, picDispatch] = useReducer(
    reducer,
    picInitState as PicStateType,
  )
  const unidentifiedError = 'UnIdentified error'
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const scrollToTop = () => {
    document
      .querySelector(`[data-testid]`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const getPhotos = useCallback(async (type: string) => {
    picDispatch({ type: 'loading' })
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${type}/images`,
      )
      const res = await response.json()
      if (res) {
        picDispatch({ type: 'success', payload: res.message })
      } else {
        picDispatch({ type: 'error', payload: unidentifiedError })
      }
    } catch (error) {
      const errMsg = error.message || error
      picDispatch({ type: 'error', payload: errMsg })
    }
  }, [])

  const showImageGallery = useCallback(
    (selectedItem: string) => {
      if (selectedItem) {
        getPhotos(selectedItem)
        setActive(selectedItem)
      }
    },
    [getPhotos],
  )

  const getListOfDogs = useCallback(async () => {
    listDispatch({ type: 'loading' })
    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/list/all`,
      )
      const res = await response.json()
      if (res) {
        listDispatch({ type: 'success', payload: res.message })
      } else {
        listDispatch({ type: 'error', payload: unidentifiedError })
      }
    } catch (error) {
      const errMsg = error.message || error
      listDispatch({ type: 'error', payload: errMsg })
    }
  }, [])

  const onUpload = useCallback(
    (imageToUpload: string, matches: string[]) => {
      if (imageToUpload && matches) {
        showImageGallery(matches[0]) // considering single dog type
        closeModal()
      }
    },
    [showImageGallery, closeModal],
  )

  useEffect(() => {
    getListOfDogs()
  }, [getListOfDogs])

  useEffect(() => {
    if (listState.data) {
      const listofNames = Object.keys(listState.data)
      setList(listofNames)
      showImageGallery(listofNames[0])
    }
  }, [listState.data, showImageGallery])

  useEffect(() => {
    function onScroll() {
      const currentPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentPosition > scrollTop) {
        setScrolling(true)
      } else if (scrollTop < 150) {
        setScrolling(false)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }

    window.addEventListener('scroll', onScroll, true)
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [scrollTop])

  return (
    <div data-testid="main-id" className={classes.root}>
      <Sidebar
        loading={listState.loading}
        list={list}
        showImageGallery={showImageGallery}
        active={active}
      />
      <div className={classes.main}>
        <Header openModal={openModal} />
        <div className={classes.container}>
          <div className={classes.error}>
            {picturesState.error || listState.error}
          </div>
          {picturesState.loading ? (
            <Loading id="imageComponent" />
          ) : (
            picturesState.data.length > 0 && (
              <ImageComponent
                active={active}
                photos={picturesState.data as string[]}
              />
            )
          )}

          <button
            type="button"
            onClick={scrollToTop}
            className={clsx({
              [classes.visible]: scrolling,
              [classes.invisible]: !scrolling,
            })}
          >
            <ArrowTop />
          </button>

          <Suspense fallback={<Loading id="uploadContainer" />}>
            <UploadContainer
              onUpload={onUpload}
              open={modalIsOpen}
              closeModal={closeModal}
              dogsList={list}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(MainContainer)
