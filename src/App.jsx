import React from 'react'

import {
  Box,
  Button,
  Container,
  ThemeProvider
} from 'theme-ui'

import theme from './theme'

export default function App () {
  const onClicky = () => {
    console.log('thanks for the clicky')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container p={2}>
        <Box py={4}>
          Sour Waves make you Ecstatic
        </Box>
        <Button onClick={onClicky}>Clicky</Button>
      </Container>
    </ThemeProvider>
  )
}
