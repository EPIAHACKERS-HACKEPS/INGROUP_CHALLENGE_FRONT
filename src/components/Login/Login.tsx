import React, { type ReactElement } from 'react'
import { LoginButton, LoginDiv, LoginInput } from './styles'
import { useDispatch } from 'react-redux'
import { setLoginToken } from '../../reducers/login'

const Login = (): ReactElement => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState({})
  const dispatch = useDispatch()

  const handleLogin = async (): Promise<void> => {
    const body = await fetch('http://95.23.148.176:5000/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email,
        password
      }
      )
    })

    const response = await body.json()

    if (response.error === 422) {
      setError(response.errors.json)
    } else if (response.error === 404) {
      setError({
        response: [
          response.message
        ]
      })
    } else if (response.refresh_token !== undefined) {
      dispatch(setLoginToken(response.refresh_token))
    }
  }

  return (
    <LoginDiv>
      <LoginInput
        placeholder="Email"
        onChange={(e: any) => {
          setEmail(e.target.value)
        }}
        value={email}
        type="email"
      />
      <LoginInput
        placeholder="Password"
        onChange={(e: any) => {
          setPassword(e.target.value)
        }}
        value={password}
        type="password"
      />
      <LoginButton onClick={handleLogin}>
        Login
      </LoginButton>
      {Object.keys(error).map((key: string) => {
        return (
          <p key={key}>{error[key]}</p>
        )
      })}
    </LoginDiv>
  )
}

export default Login
