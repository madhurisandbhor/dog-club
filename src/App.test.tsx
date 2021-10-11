import { render, screen } from '@testing-library/react'
import App from './App'
import './tests/mocks/intersectionObserverMock'

test('renders app name', () => {
  render(<App />)
  const linkElement = screen.getByText(/Dogs Club/i)
  expect(linkElement).toBeInTheDocument()
})
