const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '20rem',
    width: '20rem',
    padding: '1rem',
    margin: '1rem',
    background: 'white',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '2.2rem 0',
    textTransform: 'Capitalize',
  },
  '@media (max-width: 600px)': {
    img: {
      height: '12rem',
      width: '12rem',
      padding: '0.8rem',
      margin: '0.8rem',
    },
    title: {
      fontSize: '1.6rem',
      margin: '1.5rem 0',
    },
  },
}

export default styles
