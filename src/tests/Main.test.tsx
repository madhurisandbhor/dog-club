import React, {
  cleanup,
  render,
  screen,
  act,
} from '@testing-library/react'
import Main from 'containers/Main'
import './mocks/intersectionObserverMock'

afterEach(cleanup)

test('render main container', () => {
  render(<Main />)
  const modal = screen.queryByTestId('main-id')
  expect(modal).toBeInTheDocument()
})

test('on render main container, sidebar list loading', () => {
  render(<Main />)
  const loading = screen.getAllByTestId('loadingsidebarList')
  expect(loading.length).toBe(1)
})

test('on render main container, render sidebar list', async () => {
  const mockSuccessResponse = {
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
    },
    status: 'success',
  }
  const mockJsonPromise = Promise.resolve(mockSuccessResponse)
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  })
  const globalRef: NodeJS.Global & typeof globalThis = global
  globalRef.fetch = jest
    .fn()
    .mockImplementation(() => mockFetchPromise)
  await act(async () => {
    render(<Main />)
  })
  const item1 = screen.getByText('affenpinscher')
  expect(item1).toBeInTheDocument()
  const item2 = screen.getByText('airedale')
  expect(item2).toBeInTheDocument()
  const listItems = screen.getAllByTestId('list-item')
  expect(listItems.length).toBe(3)
})

test('on render main container, render image gallery', async () => {
  const mockSuccessResponse1 = {
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
    },
    status: 'success',
  }
  const mockJsonPromise1 = Promise.resolve(mockSuccessResponse1)
  const mockFetchPromise1 = Promise.resolve({
    json: () => mockJsonPromise1,
  })

  const mockSuccessResponse2 = {
    message: ['img1.png', 'img2.jpg'],
    status: 'success',
  }
  const mockJsonPromise2 = Promise.resolve(mockSuccessResponse2)
  const mockFetchPromise2 = Promise.resolve({
    json: () => mockJsonPromise2,
  })

  const globalRef: NodeJS.Global & typeof globalThis = global
  globalRef.fetch = jest
    .fn()
    .mockImplementationOnce(() => mockFetchPromise1)
    .mockImplementationOnce(() => mockFetchPromise2)
  await act(async () => {
    render(<Main />)
  })

  await act(async () => {
    render(<Main />)
  })
  const item1 = screen.getByText('affenpinscher')
  expect(item1).toBeInTheDocument()
  const item2 = screen.getByText('airedale')
  expect(item2).toBeInTheDocument()
  const listItems = screen.getAllByTestId('list-item')
  expect(listItems.length).toBe(3)

  const image1 = screen.getByAltText('img1.png')
  expect(image1).toBeInTheDocument()

  const image2 = screen.getByAltText('img2.jpg')
  expect(image2).toBeInTheDocument()
})
