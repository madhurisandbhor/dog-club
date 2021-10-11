import React, {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import Sidebar from 'components/Sidebar'

const props = {
  loading: false,
  list: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showImageGallery: () => {},
  active: '',
}

afterEach(cleanup)

test('renders image component with title', () => {
  const { getByAltText } = render(<Sidebar {...props} />)
  const title = getByAltText(`dog's paw Icon`)
  expect(title).toBeInTheDocument()
})

test('renders 0 item in list with no data', () => {
  render(<Sidebar {...props} />)
  const listItem = screen.queryByTestId('list-item')
  expect(listItem).not.toBeInTheDocument()
})

test('renders loading processor when data is loading', () => {
  const newProps = {
    ...props,
    loading: true,
  }
  const { container } = render(<Sidebar {...newProps} />)
  const loadingElements = container.getElementsByClassName('fa-2x')
  expect(loadingElements.length).toBe(1)
})

test('renders sidebar with list of dog types', () => {
  const newProps = {
    ...props,
    loading: false,
    list: ['affenpinscher', 'african'],
  }
  render(<Sidebar {...newProps} />)
  const listItems = screen.getAllByTestId('list-item')
  expect(listItems.length).toBe(2)
  const title1 = screen.getByText('affenpinscher')
  expect(title1).toBeInTheDocument()
  const title2 = screen.getByText('african')
  expect(title2).toBeInTheDocument()
})

test('renders sidebar with list of dog types having click functionality', () => {
  const handleClick = jest.fn()

  const newProps = {
    ...props,
    loading: false,
    list: ['affenpinscher', 'african'],
    showImageGallery: handleClick,
  }
  render(<Sidebar {...newProps} />)
  const listItems = screen.getAllByTestId('list-item')
  fireEvent.click(listItems[0])
  expect(handleClick).toHaveBeenCalledTimes(1)
  fireEvent.keyDown(listItems[1])
  expect(handleClick).toHaveBeenCalledTimes(2)
})
