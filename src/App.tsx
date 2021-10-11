import React from 'react'
import MainContainer from 'containers/Main'
import ErrorBoundary from 'containers/ErrorBoundary'
import './App.css'

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <MainContainer />
    </ErrorBoundary>
  )
}

export default App
