import React, { FC, memo } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  openModal: () => void
}

const Header: FC<Props> = ({
  classes,
  openModal,
}: Props): JSX.Element => {
  const handleUpload = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') openModal()
  }

  return (
    <header className={classes.titleBar}>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleUpload}
        onClick={openModal}
      >
        Upload New Image
      </div>
    </header>
  )
}

export default withStyles(styles)(memo(Header))
