const styles = {
  root: {
    width: '100%',
    display: 'flex',
    background: '#dbf1ff',
  },
  main: {
    width: '82%',
    marginLeft: '18%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '100%',
    height: 'calc(100% - 6rem)',
    minHeight: 'calc(100vh - 6rem)',
    position: 'relative',
    '& > button': {
      position: 'fixed',
      bottom: '5rem',
      right: '3rem',
      border: '0.3rem solid white',
      textAlign: 'center',
      lineHeight: 1,
      backgroundColor: 'transparent',
      padding: '1rem',
      outline: 'none',
      borderRadius: '50%',
      transition: 'all .5s ease',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#fff',
      },
    },
  },
  error: {
    color: 'red',
    margin: '1rem auto',
  },
  '@media (max-width: 600px)': {
    main: {
      width: '72%',
      marginLeft: '28%',
    },
  },
  visible: {
    opacity: 1,
    transform: 'translateY(-3rem)',
  },
  invisible: {
    opacity: 0,
    transform: 'translateY(3rem)',
  },
}

export default styles
