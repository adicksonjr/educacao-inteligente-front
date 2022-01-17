import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Button, TextField } from '@mui/material'
import { login } from '../localstorage'
import { useNavigate } from 'react-router-dom';
import {ImgDiv} from './styles'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorEmail,setIsErrorEmail] = useState(false);
  const [isErrorPassword,setIsErrorPassword] = useState(false);
  const [errorEmailMsg,setErrorEmailMsg] = useState('');
  const errorPasswordEmpty  = "Preencha a senha";
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }
  }
  const validateEmail = () => {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true)
      }
        return (false)
  };
  const handleSetErrorMsg = () => {
    let isErrorMsg= false;
    if(email===''){
      setIsErrorEmail(true)
      setErrorEmailMsg('Preencha o email')
      isErrorMsg=true;
    }else{
      setIsErrorEmail(false)
    }
    if(password===''){
      setIsErrorPassword(true)
      isErrorMsg=true;
    }else{
      setIsErrorPassword(false)
    }
    if(!validateEmail()){
      setIsErrorEmail(true)
      setErrorEmailMsg('Preencha com um email valido')
      isErrorMsg=true;
    }else{
      setIsErrorEmail(false)
    }
    return isErrorMsg;
  }
  const handleLogin = () => {
    if(!handleSetErrorMsg()){
      login('token')
      navigate('/sobre');  
    }
  }
  return <>
    <Container className='loginDiv' component='main' maxWidth='sm'>
        <div className='mt-3 mt-md-5 d-flex align-items-center flex-column'>
          <ImgDiv src={'logo.png'}/>
          <div className='mt-4'>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Email'
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              error={isErrorEmail}
              helperText={isErrorEmail?errorEmailMsg:''}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Senha'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
              error={isErrorPassword}
              helperText={isErrorPassword?errorPasswordEmpty:''}
            />
            <Button
              type='button'
              variant='contained'
              fullWidth
              color='primary'
              size='large'
              className='mb-3 mb-md-4 mt-4'
              onClick={handleLogin}
            >Entrar</Button>
          </div>
        </div>
    </Container>
  </>
}

export default Login;