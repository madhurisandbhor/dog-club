import React, {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import UploadContainer from 'containers/UploadContainer'

afterEach(cleanup)

const props = {
  open: true,
  dogsList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeModal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onUpload: () => {},
}

test('do not render upload container modal', () => {
  const newProps = {
    ...props,
    open: false,
  }
  render(<UploadContainer {...newProps} />)
  const modal = screen.queryByTestId('root')
  expect(modal).not.toBeInTheDocument()
})

test('do not render image preview when image is not selected', () => {
  render(<UploadContainer {...props} />)
  const modal = screen.queryByTestId('image-preview-root')
  expect(modal).not.toBeInTheDocument()
})

test('renders upload container modal', () => {
  render(<UploadContainer {...props} />)
  const modal = screen.getAllByTestId('root')
  expect(modal.length).toBe(1)
})

test('check modal title', () => {
  render(<UploadContainer {...props} />)
  const title = screen.getByText(`Upload your dog's image`)
  expect(title).toBeInTheDocument()
})

test('renders upload modal with input file option', () => {
  render(<UploadContainer {...props} />)
  const inputFile = screen.getAllByTestId('input-file')
  expect(inputFile.length).toBe(1)
})

test('Upload modal should be able to select file', () => {
  render(<UploadContainer {...props} />)
  const inputFile = screen.getAllByTestId('input-file')
  fireEvent.change(inputFile[0], { target: { value: '' } })
})
