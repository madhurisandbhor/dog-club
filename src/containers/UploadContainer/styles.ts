const styles = {
  modal: {
    width: '60rem',
    height: '40rem',
    borderRadius: '0.8rem',
    fontSize: '1.6rem',
    outline: 'none',
  },
  container: {
    padding: '1.5rem',
    overflow: 'auto',
    maxHeight: '100%',
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    '& > p': {
      fontSize: '1.6rem',
      fontWeight: 'bold',
    },
  },
  preview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  fileInput: {
    width: '50%',
  },
  '@media (max-width: 600px)': {
    modal: {
      width: '30rem',
      fontSize: '1.4rem',
    },
    container: {
      padding: '1rem',
    },
    fileInput: {
      width: '100%',
    },
  },
}

export default styles
