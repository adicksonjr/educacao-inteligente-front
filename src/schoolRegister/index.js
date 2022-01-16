import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, CircularProgress, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { ErrorText, RegisterForm, SuccessContainer } from './styles';
import { getSchoolRegister, setSchoolRegister } from '../localstorage';
import Modal from '../modal';
import {CgClose} from 'react-icons/cg';


const SchoolRegister = () =>{
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
          setIsSuccess(true)
          setOpen(false)
        }, 2000);
        }
      }, [isLoading]); 
    const handleImputChange = (e) => {
        const {name, value, type, checked} = e.target;
        type === 'checkbox'?
        setFormValues({...formValues,[name]: checked})
        :
        setFormValues({...formValues, [name]: value})
    }
    const handleSetErrorMsg = () => {
        let isErrorMsg= false;
        if( formValues.schoolName===undefined || formValues.schoolName === ''){
            setIsErrorSchoolName(true);
            isErrorMsg = true;
        }else{
            setIsErrorSchoolName(false);
            
        }
        if(formValues.localization === undefined){
            setIsErrorLocalization(true)
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
            if(getSchoolRegister() !== null){
                var formValuesAux = JSON.parse(getSchoolRegister())
                formValuesAux.push(formValues)
                setSchoolRegister(JSON.stringify(formValuesAux))
            }else{
                setSchoolRegister(JSON.stringify([formValues]))
            }
            setOpen(true)
        }
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
                                name='schoolName'
                                onChange={handleImputChange}
                                value={formValues.schoolName || ''}
                            />
                            <TextField
                                margin="normal"
                                variant='standard'
                                label='Nome do diretor'
                                name='schoolDiretor'
                                onChange={handleImputChange}
                                value={formValues.schoolDiretor || ''}
                            />
                        </FormControl>
                        <FormControl
                            margin="normal" >
                            <FormLabel component="legend">Localização da escola *</FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                defaultValue="female"
                                name="localization"
                                onChange={handleImputChange}
                            >
                                <FormControlLabel value="Urbana" control={<Radio />} label="Urbana" />
                                <FormControlLabel value="Rural" control={<Radio />} label="Rural" />
                            </RadioGroup>
                            <ErrorText variant="h5" gutterBottom component="div">
                                {isErrorLocalization?errorMsg.errorLocalizationMsg:''}
                            </ErrorText>
                        </FormControl>
                        <FormControl
                            margin="normal">
                            <FormLabel component="legend">Turnos *</FormLabel>
                            <div className='d-flex justify-content-center flex-wrap'>
                                <FormControlLabel control={<Checkbox name='manha' value='Manhã' onChange={handleImputChange}/>} label="Manhã" />
                                <FormControlLabel control={<Checkbox name='tarde' value='Tarde' onChange={handleImputChange}/>} label="Tarde" />
                                <FormControlLabel control={<Checkbox name='noite' value='Noite' onChange={handleImputChange}/>} label="Noite" />
                                <FormControlLabel control={<Checkbox name='integral' value='Integral' onChange={handleImputChange}/>} label="Integral" />
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
        </>
    )
}

export default SchoolRegister;