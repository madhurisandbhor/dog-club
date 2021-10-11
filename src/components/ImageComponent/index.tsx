import React, { FC, memo } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import clsx from 'clsx'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  photos: string[]
  active: string
}

const ImageComponent: FC<Props> = ({
  photos,
  classes,
  active,
}: Props): JSX.Element => {
  return (
    <>
      <p className={classes.title}>{active} Dogs Gallery</p>
      <div className={classes.root}>
        {photos.map((img: string, index: number) =>
          index < 8 ? (
            <img
              key={img}
              alt={img}
              src={img}
              crossOrigin="anonymous"
              className={classes.img}
            />
          ) : (
            <img
              key={img}
              crossOrigin="anonymous"
              alt=""
              data-src={img}
              className={clsx(classes.img, 'lazyLoadClass')}
            />
          ),
        )}
      </div>
    </>
  )
}

export default withStyles(styles)(memo(ImageComponent))
