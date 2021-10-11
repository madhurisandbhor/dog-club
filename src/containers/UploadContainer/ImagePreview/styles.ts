const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    fontSize: '1.6rem',
  },
  previewImg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    position: 'relative',
    boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)',
    marginTop: '2rem',
    width: '20rem',
    '& > img': {
      margin: '1rem',
      width: '18rem',
      height: '18rem',
    },
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1.5rem',
    '& > p': {
      alignSelf: 'center',
      marginRight: '1rem',
      fontSize: '1.6rem',
    },
    '& > button': {
      background: '#02bef7',
      color: 'white',
      border: 0,
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',

      '&:hover': {
        cursor: 'pointer',
        background: '#02bef7',
        color: 'white',
      },
    },
  },
  removeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    border: 0,
  },
  breedName: {
    margin: '0 auto 1rem auto',
    width: '100%',
    textAlign: 'center',
    padding: '0 1rem',
    minHeight: '3.6rem',
    '& > div': {
      color: '#02bef7',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: 'bold',
      whiteSpace: 'noWrap',
      width: '100%',
      textTransform: 'capitalize',
    },
  },
  hidden: {
    display: 'none',
  },
  error: {
    color: 'red',
    margin: '1rem auto',
  },
  action: {
    position: 'relative',
    minHeight: '5rem',
    textAlign: 'center',
  },
  visiblity: {
    visibility: 'hidden',
  },
  '@media (max-width: 600px)': {
    uploadBtn: {
      flexDirection: 'column',
      '& > p': {
        marginRight: 0,
      },
      '& > button': {
        marginTop: '1rem',
      },
    },
  },
}

export default styles
