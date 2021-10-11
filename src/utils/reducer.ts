import {
  ListStateType,
  PicStateType,
  ClassifyType,
} from 'types/common'

const reducer = (
  state: ListStateType | PicStateType | ClassifyType,
  action: {
    type: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any
  },
): ListStateType | PicStateType | ClassifyType => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true }
    case 'success':
      return { ...state, loading: false, data: action.payload }
    case 'error':
      return { ...state, loading: false, error: action.payload }
    default:
      throw new Error('Unexpected action')
  }
}

export default reducer
