import { type Action } from 'redux'

interface UserStory {
  id: number
  description: string
  items: Array<{
    description: string
    priority: number
    title: string
    item_type: {
      id: number
      type: string
    }
  }>
  title: string
}

const initialState: {
  stories: UserStory[]
} = {
  stories: []
}

interface UserStoryAction extends Action {
  type: string
  payload: UserStory[]
}

export const userStoryReducer = (state = initialState, action: UserStoryAction): typeof initialState => {
  switch (action.type) {
    case 'addUserStory':
      return { stories: action.payload }
    default:
      return state
  }
}

export const addUserStory = (userStory: UserStory): UserStoryAction => {
  return {
    type: 'addUserStory',
    payload: userStory
  }
}

export default userStoryReducer
