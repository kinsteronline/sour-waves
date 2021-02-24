export default {
  fonts: {
    body: '"Avenir Next Condensed"',
  },
  colors: {
    text: '#ddd',
    background: '#333',
  },
  styles: {
    root: {
      fontFamily: 'body',
    },
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      fontWeight: 'bold',
      color: 'background',
      bg: '#e5b44e',
      borderRadius: '1px',
      '&:hover': {
        cursor: 'pointer',
        bg: '#ffc857',
      }
    }
  }
}
