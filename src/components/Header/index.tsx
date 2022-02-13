import React, { FC, memo } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import DogsPawIcon from 'images/dog-paw-svgrepo-com.svg'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  openModal: () => void
}

const Header: FC<Props> = ({
  classes,
  openModal,
}: Props): JSX.Element => {
  return (
    <header className={classes.titleBar}>
      <b>
        <img src={DogsPawIcon} alt="dog's paw Icon" />
        <p>Dogs Club</p>
      </b>
      <button type="button" onClick={openModal}>
        Upload New Image
      </button>
    </header>
  )
}

export default withStyles(styles)(memo(Header))
