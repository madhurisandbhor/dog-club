const styles = {
  titleBar: {
    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    boxShadow: '0.5rem 0.5rem 0.6rem 0 #C0D4E0',
    fontSize: '1.6rem',
    background: 'white',
    '& > div': {
      fontSize: '1.6rem',
      margin: '0 5rem 0 1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #000',

      '&:hover': {
        cursor: 'pointer',
        background: '#02bef7',
        color: 'white',
        borderColor: '#02bef7',
      },
    },
  },
  '@media (max-width: 600px)': {
    titleBar: {
      '& > div': {
        marginRight: '3rem',
      },
    },
  },
}

export default styles
