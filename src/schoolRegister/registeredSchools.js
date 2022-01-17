import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { getSchoolRegister } from "../localstorage";
import { TurnoContainer } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const RegisteredSchools = ({onBack = () => {}}) => {
    return (
        <>
            <Button  sx={{ maxWidth: 150 , margin: 3}}  onClick={onBack} >
                <AiOutlineArrowLeft className="svgButtonList"/>
                voltar
            </Button>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell >Diretor</TableCell>
                        <TableCell >Localização</TableCell>
                        <TableCell >Turnos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {JSON.parse(getSchoolRegister()).map((school,index)=>(
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                            {school.escola.nome}
                        </TableCell>
                        <TableCell >{school.escola.diretor}</TableCell>
                        <TableCell >
                            {school.escola.localizacao==='1'?
                                <p>1 - Urbana</p>
                                :
                                <p>2 - Rural</p>
                                }
                        </TableCell>
                        <TableCell >
                            <TurnoContainer>
                                <p>[</p>
                                    {school.escola.manha === true && <p> M </p>}
                                    {school.escola.tarde === true && <p> T </p>}
                                    {school.escola.noite === true && <p> N </p>}
                                    {school.escola.integral === true && <p> I </p>} 
                                <p>]</p>
                            </TurnoContainer> 
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default RegisteredSchools;