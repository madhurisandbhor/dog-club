const styles = {
  root: {
    width: '18%',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
  },
  container: {
    width: '100%',
    height: 'calc(100vh - 6rem)',
    maxHeight: 'calc(100vh - 6rem)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
    background: 'white',
    position: 'relative',
  },
  listItem: {
    padding: '1rem',
    margin: '1rem',
    color: 'black',
    textTransform: 'capitalize',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  active: {
    fontWeight: 'bold',
  },
  '@media (max-width: 600px)': {
    root: {
      width: '28%',
      '& > b': {
        '& > span': {
          fontSize: '2rem',
        },
        '& > img': {
          maxWidth: '100%',
          maxHeight: '100%',
          margin: '0 0.5rem',
          padding: '1rem 0',
        },
      },
    },
    listItem: {
      padding: '0.5rem',
      margin: '0.5rem',
    },
  },
}
export default styles
