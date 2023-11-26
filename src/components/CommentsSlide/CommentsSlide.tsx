import React, { type ReactElement, useEffect } from 'react'
import UserStory from './UserStory/UserStory'
import './styles.css'
import Items from './Items/Items'
import Title from '../Title'
import { Separator } from '../DashboardSlide/styles'
import { API_URL } from '../../constants'
import { PuffLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { addUserStory } from '../../reducers/userStory'

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

const CommentsSlide = (): ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [loadComments, setLoadComments] = React.useState<boolean>(true)
  const userStory: any = useSelector((state: any) => state.userStoryReducer.stories)

  const dispatch = useDispatch()
  const token: string = useSelector((state: any) => state.loginReducer.token)
  useEffect(() => {
    if (loadComments) {
      setLoadComments(false)
      setLoading(true)

      fetch(`${API_URL}/user_story?page=1&per_page=10`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`
        }
      }).then(async (result) => {
        const response = await result.json()
        if (result.status === 200 && response.user_stories !== undefined) {
          dispatch(addUserStory(response.user_stories))
        }
        console.log(response)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
    }
  })

  return (
    <>
      {loading
        ? <><PuffLoader
          color="#881d1c"
          size={100}
        /></>
        : <><Title title={'Comments'} dark={true}/>
          <Separator/>
          {userStory.map((story: UserStory) => {
            return (
              <div className="Container">
                <UserStory title={story.title} description={story.description} id={story.id}/>
                {story.items.map((item: any) => {
                  return (
                    <Items title={item.title} description={item.description} item={item.item_type.type} id={item.id}/>
                  )
                })}
              </div>
            )
          })}
        </>}
    </>
  )
}

export default CommentsSlide
