import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Button, TextField, Typography } from '@mui/material'
import {HiEye, HiEyeOff} from 'react-icons/hi'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  return <>
    <Container component='main' maxWidth='xs'>
        <div className='mt-3 mt-md-5'>
          <div className='text-center'>
            <img alt='' src='logo.png'/>
            <Typography className='mt-3 font-weight-normal' componet='h1' variant='h6'>Login MobiEduca.Me</Typography>
          </div>
          <div className='mt-4'>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='username'
              type='email'
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='password'
              label='Senha'
              name='password'
              type={show ? 'text' : 'password'}
            />
            {
              show?
                <HiEye/>
                :
                <HiEyeOff/>
            }
            <Button
              type='button'
              variant='contained'
              fullWidth
              color='primary'
              size='large'
              className='mb-3 mb-md-4 mt-4'
            >Entrar</Button>
          </div>
        </div>
    </Container>
  </>

}

export default Login;