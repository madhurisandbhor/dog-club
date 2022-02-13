import React, { FC, memo } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import clsx from 'clsx'
import Loading from 'components/Loading'
import styles from './styles'

interface Props extends WithStylesProps<typeof styles> {
  list: string[]
  showImageGallery: (value: string) => void
  active: string
  loading: boolean
}

const Sidebar: FC<Props> = ({
  classes,
  list,
  showImageGallery,
  active,
  loading,
}: Props): JSX.Element => {
  return (
    <aside className={classes.root}>
      <div className={classes.container}>
        {loading ? (
          <Loading id="sidebarList" />
        ) : (
          list.map((item) => (
            <div
              key={item}
              id={item}
              tabIndex={0}
              data-testid="list-item"
              className={clsx(classes.listItem, {
                [classes.active]: active === item,
              })}
              role="button"
              onKeyDown={() => showImageGallery(item)}
              onClick={() => showImageGallery(item)}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </aside>
  )
}

export default withStyles(styles)(memo(Sidebar))
