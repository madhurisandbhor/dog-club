import React, {
  cleanup,
  render,
  screen,
} from '@testing-library/react'
import ImageComponent from 'components/ImageComponent'

const props = {
  photos: [],
  active: '',
}

afterEach(cleanup)

test('renders image component with title', () => {
  render(<ImageComponent {...props} />)
  const title = screen.getByText('Dogs Gallery')
  expect(title).toBeInTheDocument()
})

test('renders 0 images with no data', () => {
  const { container } = render(<ImageComponent {...props} />)
  expect(container.querySelector('img')).not.toBeInTheDocument()
})

test('renders images with data and active item title', () => {
  const newProps = {
    photos: [
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
    ],
    active: 'testType',
  }
  const { container } = render(<ImageComponent {...newProps} />)
  const images = container.querySelectorAll('img')
  expect(images.length).toBe(2)
  const title = screen.getByText('testType Dogs Gallery')
  expect(title).toBeInTheDocument()
})

test('renders images with lazyClassLoad when image count is more than 8 data', () => {
  const newProps = {
    photos: [
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10345.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10585.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10158.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10125.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10188.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10739.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10499.jpg',
      'https://images.dog.ceo/breeds/affenpinscher/n02110627_10429.jpg',
    ],
    active: 'testType',
  }
  const { container } = render(<ImageComponent {...newProps} />)
  const images = container.getElementsByClassName('lazyLoadClass')
  expect(images.length).toBe(1) // total 9 items
})
