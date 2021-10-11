import React, { FC } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  id: string
}

const Loading: FC<Props> = ({ classes, id }): JSX.Element => {
  return (
    <div
      className={classes.wrapper}
      data-testid={`loading${id}`}
      id={`loading${id}`}
    >
      <div className="fa-2x">
        <i className="fa fa-circle-o-notch fa-spin" />
      </div>
    </div>
  )
}

export default withStyles(styles)(Loading)
