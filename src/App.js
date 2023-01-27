import React from 'react'
import Container from './layout/Container'
import Widget from './layout/Widget'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'

const App = () => {
  return (
    <Container>
        <Sidebar />
        <Content />
        <Widget />
    </Container>
  )
}

export default App



