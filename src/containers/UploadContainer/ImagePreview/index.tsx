import React, { FC, useRef, memo, useEffect, useReducer } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import '@tensorflow/tfjs-backend-webgl'
import clsx from 'clsx'
import Loading from 'components/Loading'
import withStyles, { WithStylesProps } from 'react-jss'
import cancelIcon from 'images/cancel-icon.svg'
import reducer from 'utils/reducer'
import { ClassifyType } from 'types/common'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  image: string
  removeImg: () => void
  dogsList: string[]
  onUpload: (image: string, selectedImg: string[]) => void
}

const ImagePreview: FC<Props> = ({
  classes,
  image,
  removeImg,
  dogsList,
  onUpload,
}: Props): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null)
  const initialState = {
    loading: false,
    error: null,
    data: [],
  }
  const [classify, dispatch] = useReducer(
    reducer,
    initialState as ClassifyType,
  )
  const unidentifiedError = 'Breed not indentified, try another photo'

  useEffect(() => {
    const onClassify = async () => {
      if (imageRef && imageRef.current) {
        try {
          dispatch({ type: 'loading' })
          let matches: string[] = []
          const model = await mobilenet.load()
          const result = await model.classify(imageRef.current)
          const prediction = result[0].className // considering top prediction
          if (prediction)
            matches = dogsList.filter((item) =>
              prediction.toLowerCase().includes(item),
            )
          if (matches.length > 0)
            dispatch({ type: 'success', payload: matches })
          else dispatch({ type: 'error', payload: unidentifiedError })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const errorMsg = error.message ? error.message : error
          dispatch({ type: 'error', payload: errorMsg })
        }
      }
    }
    onClassify()
  }, [dogsList])

  return (
    <div className={classes.root} data-testid="image-preview-root">
      <div className={classes.previewImg}>
        <button
          type="button"
          id="imgRemoveButton"
          onClick={removeImg}
          className={classes.removeButton}
        >
          <img src={cancelIcon} alt="cancelBtn" />
        </button>
        <img
          src={image}
          alt="dogImagePreview"
          ref={imageRef}
          id="previewImg"
        />
        <div
          className={clsx(classes.breedName, {
            [classes.visiblity]: classify.data.length === 0,
          })}
        >
          <p>Dog Breed</p>
          <div data-testid="dogBreed">
            {classify.data.length > 0 &&
              (classify.data as string[]).join(', ')}
          </div>
        </div>
      </div>
      <div className={classes.action}>
        {classify.loading && <Loading id="imageFile" />}
        {!classify.loading && classify.error && (
          <div id="error" className={classes.error}>
            {classify.error}
          </div>
        )}
        {!classify.loading && !classify.error && (
          <div className={classes.uploadBtn}>
            <p>Do you want to upload this image?</p>
            <button
              type="button"
              id="uploadImage"
              onClick={() =>
                onUpload(image, classify.data as string[])
              }
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default withStyles(styles)(memo(ImagePreview))
