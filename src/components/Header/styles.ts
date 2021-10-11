const styles = {
  titleBar: {
    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0.5rem 0.5rem 0.6rem 0 #C0D4E0',
    fontSize: '1.6rem',
    background: 'white',
    '& > input[type=text]': {
      padding: '1rem',
      fontSize: '1.6rem',
      border: '0.1rem solid grey',
      width: '60%',
      background: '#f1f1f1',
    },
    '& > button': {
      width: '5%',
      padding: '0.95rem',
      background: 'black',
      color: 'white',
      fontSize: '1.8rem',
      border: '0.1rem solid grey',
      borderLeft: 'none',
      cursor: 'pointer',
    },
    '& > div': {
      fontSize: '1.6rem',
      margin: '0 1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      '&:hover': {
        cursor: 'pointer',
        background: '#02bef7',
        color: 'white',
      },
    },
  },
  '@media (max-width: 600px)': {
    titleBar: {
      '& > input[type=text]': {
        width: '35%',
      },
      '& > button': {
        width: '10%',
        fontSize: '1.5rem',
        padding: '1.05rem',
      },
    },
  },
}

export default styles
