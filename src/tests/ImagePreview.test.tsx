import React, {
  cleanup,
  render,
  screen,
} from '@testing-library/react'
import ImagePreview from 'containers/UploadContainer/ImagePreview'

afterEach(cleanup)

const props = {
  image:
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeImg: () => {},
  dogsList: ['affenpinscher', 'african'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onUpload: () => {},
}

test('render image preview when image is selected', () => {
  render(<ImagePreview {...props} />)
  const modal = screen.queryByTestId('image-preview-root')
  expect(modal).toBeInTheDocument()
})

test('if dog list is updated should call classify Image method', () => {
  render(<ImagePreview {...props} />)
  const breedNameTitle = screen.getByText('Dog Breed')
  expect(breedNameTitle).toBeInTheDocument()
  const loading = screen.getAllByTestId('loadingimageFile')
  expect(loading.length).toBe(1)
})
