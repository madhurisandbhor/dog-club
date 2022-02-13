const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#dbf1ff',
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 6rem)',
    marginTop: '6rem',
  },
  container: {
    minHeight: 'calc(100vh - 6rem)',
    marginLeft: '18%',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginLeft: '28%',
    },
    '& > button': {
      position: 'fixed',
      bottom: '5rem',
      right: '3rem',
      border: '0.3rem solid white',
      textAlign: 'center',
      lineHeight: 1,
      backgroundColor: '#fff',
      padding: '1rem',
      outline: 'none',
      borderRadius: '50%',
      transition: 'all .5s ease',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#02bef7',
      },
    },
  },
  error: {
    color: 'red',
    margin: '1rem auto',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(-3rem)',
  },
  invisible: {
    opacity: 0,
    transform: 'translateY(3rem)',
  },
  loadingWrapper: {
    position: 'relative',
    minHeight: '100%',
  },
}

export default styles
