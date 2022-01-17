import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, CircularProgress, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { ErrorText, RegisterForm, SuccessContainer } from './styles';
import { getSchoolRegister, setSchoolRegister } from '../localstorage';
import Modal from '../modal';
import {CgClose} from 'react-icons/cg';
import {FaListUl} from 'react-icons/fa';

import RegisteredSchools from './registeredSchools';


const SchoolRegister = () =>{
    const [isListSchools, setIsListSchools] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [open,setOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [formValues,setFormValues] = useState({});
    const [isErrorSchoolName,setIsErrorSchoolName] = useState(false);
    const [isErrorLocalization,setIsErrorLocalization] = useState(false);
    const [isErrorTurno,setIsErrorTurno] = useState(false);
    const errorMsg = {
        errorSchoolNameMsg : "preencha o nome da escola",
        errorLocalizationMsg : "Marque a localização",
        errorTurnoMsg : "Marque pelo menos um turno"
    };
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
                setIsSuccess(true);
                setOpen(false);
                if(getSchoolRegister() !== null){
                    var formValuesAux = JSON.parse(getSchoolRegister());
                    formValuesAux.push({'escola' : formValues });
                    setSchoolRegister(JSON.stringify(formValuesAux));
                }else{
                    setSchoolRegister(JSON.stringify([{'escola' : formValues }]));
                }
        }, 2000);
        }
      }, [isLoading,formValues]); 
    const handleImputChange = (e) => {
        const {name, value, type, checked} = e.target;
        type === 'checkbox'?
        setFormValues({...formValues,[name]: checked})
        :
        setFormValues({...formValues, [name]: value})
    }
    const handleSetErrorMsg = () => {
        let isErrorMsg= false;
        if( formValues.nome===undefined || formValues.nome === ''){
            setIsErrorSchoolName(true);
            isErrorMsg = true;
        }else{
            setIsErrorSchoolName(false);
            
        }
        if(formValues.localizacao === undefined){
            setIsErrorLocalization(true);
            isErrorMsg = true;
        }else{
            setIsErrorLocalization(false);
        }
        if((formValues.manha === false || formValues.manha === undefined) && 
           (formValues.tarde === false || formValues.tarde === undefined) && 
           (formValues.noite === false || formValues.noite === undefined) &&
           (formValues.integral === false || formValues.integral === undefined)){
            setIsErrorTurno(true);
            isErrorMsg = true;
        }else{
            setIsErrorTurno(false);
        }
        return isErrorMsg;
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!handleSetErrorMsg()){
            setOpen(true);
        }
        console.log(formValues);
    }
    
    return (
        <>
            {open?
                <Modal msg='Tem certeza que deseja salvar essas informações?'>

                    {isLoading?
                    <CircularProgress />
                    :
                    <>
                        <Button 
                            onClick={() => setOpen(false)} 
                            variant='contained' color='error' 
                            margin='normal'>
                                Não
                        </Button>
                        <Button 
                            onClick={() => setIsLoading(true)} 
                            variant='contained' 
                            color='success' 
                            margin='normal'>
                                Sim
                        </Button>
                    </>
                    }
                </Modal>
                :
                <></>
            }
            <>
            {isListSchools?
                <RegisteredSchools 
                    onBack={() => setIsListSchools(false)}
                    schoolList={() => JSON.parse(getSchoolRegister())}/>
                :
                <>
                    <div className='d-flex justify-content-start'>
                        <Button sx={{ maxWidth: 220, fontSize: 12}} onClick={() => setIsListSchools(true)}>
                            <FaListUl className='svgButtonList'/>
                            Escolas Cadastradas
                        </Button>
                    </div>

                    <Container className='d-flex justify-content-center align-itens-center'>
                            <RegisterForm onSubmit={handleSubmit}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Cadastro de escolas
                                </Typography>
                                {isSuccess && <SuccessContainer>
                                    <p>Escola Cadastrada com sucesso!</p> 
                                    <CgClose onClick={() => setIsSuccess(false)}/>
                                </SuccessContainer>}
                                <FormControl 
                                    fullWidth>
                                    <TextField
                                        error={isErrorSchoolName}
                                        helperText={isErrorSchoolName?errorMsg.errorSchoolNameMsg:''}
                                        margin="normal"
                                        variant='standard'
                                        label='Nome da escola *'
                                        name='nome'
                                        onChange={handleImputChange}
                                        value={formValues.nome || ''}
                                    />
                                    <TextField
                                        margin="normal"
                                        variant='standard'
                                        label='Nome do diretor'
                                        name='diretor'
                                        onChange={handleImputChange}
                                        value={formValues.diretor || ''}
                                    />
                                </FormControl>
                                <FormControl
                                    margin="normal" >
                                    <FormLabel component="legend">Localização da escola *</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        defaultValue="female"
                                        name="localizacao"
                                        onChange={handleImputChange}
                                    >
                                        <FormControlLabel value="1" control={<Radio />} label="1-Urbana" />
                                        <FormControlLabel value="2" control={<Radio />} label="2-Rural" />
                                    </RadioGroup>
                                    <ErrorText variant="h5" gutterBottom component="div">
                                        {isErrorLocalization?errorMsg.errorLocalizationMsg:''}
                                    </ErrorText>
                                </FormControl>
                                <FormControl
                                    margin="normal">
                                    <FormLabel component="legend">Turnos *</FormLabel>
                                    <div className='d-flex justify-content-center flex-wrap'>
                                        <FormControlLabel control={<Checkbox name='manha' value='M' onChange={handleImputChange}/>} label="Manhã" />
                                        <FormControlLabel control={<Checkbox name='tarde' value='T' onChange={handleImputChange}/>} label="Tarde" />
                                        <FormControlLabel control={<Checkbox name='noite' value='N' onChange={handleImputChange}/>} label="Noite" />
                                        <FormControlLabel control={<Checkbox name='integral' value='I' onChange={handleImputChange}/>} label="Integral" />
                                    </div>
                                    <ErrorText variant="h5" gutterBottom component="div">
                                        {isErrorTurno?errorMsg.errorTurnoMsg:''}
                                    </ErrorText>
                                </FormControl>
                                <div className='d-flex justify-content-end'>
                                    <Button 
                                        margin="normal"
                                        type='submit' 
                                        variant='contained'>
                                        Cadastrar
                                    </Button>
                                </div>
                            </RegisterForm>
                    </Container>
                </>}
            </>
        </>
    )
}

export default SchoolRegister;