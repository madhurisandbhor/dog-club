import React, { FC, useState, useRef, useCallback } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import withStyles, { WithStylesProps } from 'react-jss'
import ImagePreview from './ImagePreview'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  open: boolean
  dogsList: string[]
  closeModal: () => void
  onUpload: (img: string, matches: string[]) => void
}

const UploadImage: FC<Props> = ({
  classes,
  dogsList,
  open,
  closeModal,
  onUpload,
}): JSX.Element => {
  const [image, setImage] = useState('')
  const inputFileRef = useRef<HTMLInputElement>(null)

  const onImageChange = (event: React.ChangeEvent) => {
    const ele = event.target as HTMLInputElement
    if (ele.files && ele.files[0]) {
      const img = ele.files[0]
      setImage(URL.createObjectURL(img))
    }
  }

  const removeImg = useCallback(() => {
    setImage('')
    if (inputFileRef && inputFileRef.current)
      inputFileRef.current.value = ''
  }, [])

  const cancelModal = useCallback(() => {
    removeImg()
    closeModal()
  }, [closeModal, removeImg])

  const handleUpload = useCallback(
    (imgToUpload: string, matches: string[]) => {
      removeImg()
      onUpload(imgToUpload, matches)
    },
    [removeImg, onUpload],
  )

  return (
    <Modal
      open={open}
      onClose={cancelModal}
      center
      classNames={{ modal: classes.modal }}
    >
      <div className={classes.container}>
        <div className={classes.content}>
          <p>Upload your dog&apos;s image</p>
          <div className={classes.preview}>
            {!image ? (
              <input
                id="inputFile"
                data-testid="input-file"
                name="dogImage"
                type="file"
                // capture="camera"
                accept="image/*"
                ref={inputFileRef}
                onChange={onImageChange}
                className={classes.fileInput}
              />
            ) : (
              <ImagePreview
                image={image}
                removeImg={removeImg}
                dogsList={dogsList}
                onUpload={handleUpload}
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default withStyles(styles)(UploadImage)
