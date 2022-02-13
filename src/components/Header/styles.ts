const styles = {
  titleBar: {
    width: '100%',
    height: '6rem',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0.5rem 0.5rem 0.6rem 0 #C0D4E0',
    background: 'white',
    position: 'fixed',
    zIndex: 99,

    '& > b': {
      height: '6rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '0.1rem solid #C0D4E0',
      background: 'white',
      '& > p': {
        fontSize: '2.4rem',
        whiteSpace: 'nowrap',
      },
      '& > img': {
        maxWidth: '100%',
        maxHeight: '100%',
        margin: '0 1rem',
        padding: '1.5rem 0',
      },
    },

    '& > button': {
      fontSize: '1.6rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #000',
      zIndex: 1,
      background: 'transparent',
      '&:hover': {
        cursor: 'pointer',
        background: '#02bef7',
        color: 'white',
        borderColor: '#02bef7',
      },
    },
  },
}

export default styles
