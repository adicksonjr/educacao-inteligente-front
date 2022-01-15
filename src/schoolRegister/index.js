import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { RegisterForm } from './styles';


const SchoolRegister = () =>{
    
    return (
        <Container className='d-flex justify-content-center align-itens-center'>
            <RegisterForm>
                <Typography variant="h5" gutterBottom component="div">
                    Cadastro de escolas
                </Typography>
                <FormControl 
                    fullWidth>
                    <TextField
                        margin="normal"
                        variant='standard'
                        label='Nome da escola'
                    />
                    <TextField
                        margin="normal"
                        variant='standard'
                        label='Nome do diretor'
                    />
                </FormControl>
                <FormControl
                    margin="normal" >
                    <FormLabel component="legend">Localização da escola</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="female"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="urban" control={<Radio />} label="Urbana" />
                        <FormControlLabel value="rural" control={<Radio />} label="Rural" />
                    </RadioGroup>
                </FormControl>
                <FormControl
                    margin="normal">
                    <FormLabel component="legend">Turnos</FormLabel>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <FormControlLabel control={<Checkbox />} label="Manhã" />
                        <FormControlLabel control={<Checkbox />} label="Tarde" />
                        <FormControlLabel control={<Checkbox />} label="Noite" />
                        <FormControlLabel control={<Checkbox />} label="Integral" />
                    </div>
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
    )
}

export default SchoolRegister;