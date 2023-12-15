import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'
import classes from './login.module.css'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/authSlice'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(email === '' || password === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      } 


      const data = await request("/auth/login", 'POST', options, {email, password})
       console.log(data)
      dispatch(login(data))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Авторизація</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='Електронна пошта...' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Пароль...' onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Увійти</button>
          <p>У вас немає акаунта? <Link to='/register'>Реєстрація</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login