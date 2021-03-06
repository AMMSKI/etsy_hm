import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {
  const { handleRegister } = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123456')
  const [confirmPassword, setConfirmPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = () => {
    if(password === confirmPassword){
    handleRegister({ email, password }, history)
    }else{
      alert('Password does not match')
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={email}
        onChange={(e, { value }) => {
          setEmail(value);
        }}
        label={"Email"}
         />
        <Form.Input
        value={password}
        onChange={(e, { value }) => {
          setPassword(value);
        }}
        label={"Email"}
         />
        <Form.Input
        value={confirmPassword}
        onChange={(e, { value }) => {
          setConfirmPassword(value);
        }}
        label={"Confirm Password"}
         />
        
        <MyButton>Add</MyButton>
      </Form>
    </div>
  )
}

export default Login