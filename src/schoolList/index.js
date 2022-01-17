
import React from 'react';
import { useState } from 'react';
import { Button, Container, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { BiFilter, BiSearchAlt2 } from 'react-icons/bi';
import api, { ADVANCED_SEARCH} from '../api';
import Spinner from 'react-spinkit';
import { FilterButton, LoadingContainer } from './styles';


const SchoolList = () => {
    const [isLoading,setLoading] = useState(false);
    const [showFilterList,setShowFilterList] = useState(false)
    const [listSchools,setListSchools] = useState([]);
    const [listSchoolsFilter,setListSchoolsFilter] = useState([]);
    const [searchName,setSearchName] = useState('');
    const [filterName,setFilterName] = useState('');
    const [showFilterInput,setShowFilterInput] = useState(false);
    const [showSchoolSearch, setShowSchoolSearch] = useState(true);
    
    
    const handleSearch = async () => {
        setLoading(true)
        setShowSchoolSearch(false)
        await api.get(ADVANCED_SEARCH+searchName)
        .then(response => {
            setListSchools(response.data[1]);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleFilter = () => {
        let listSchoolsFilterAux = []
        listSchools.forEach(school => {
            if(school.cidade.includes(filterName.toUpperCase())){
                console.log('passei')
                listSchoolsFilterAux = [...listSchoolsFilterAux, school]
                setShowFilterList(true)
            }
        })
        setListSchoolsFilter(listSchoolsFilterAux)
        setShowFilterInput(false)
    }
    return (
    <Container maxWidth='lg' >
        {isLoading?
            <LoadingContainer>
                <Spinner name="ball-spin-fade-loader" />
            </LoadingContainer>
            :
            <>
                {showSchoolSearch?
                    <TextField 
                        fullWidth
                        id="standard-basic" 
                        label="Busca" 
                        variant="standard"
                        helperText='Buscar escolas por nome'
                        value={searchName}
                        onChange={(e)=>{setSearchName(e.target.value)}}
                        onKeyDown={(e) => {if(e.key==='Enter'){handleSearch()}}}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleSearch}>
                                <BiSearchAlt2/>
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                    />
                    :
                    <>
                        <div className='d-flex flex-row justify-content-between align-items-center '>
                            <Button onClick={() => setShowSchoolSearch(true)}>Voltar</Button>
                            {showFilterInput?
                                <TextField 
                                    id="standard-basic" 
                                    label="Filtro por cidade" 
                                    variant="standard"
                                    value={filterName}
                                    onChange={(e)=>{setFilterName(e.target.value)}}
                                    onKeyDown={(e) => {if(e.key==='Enter'){handleFilter()}}}
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleFilter}>
                                            <BiSearchAlt2/>
                                            </IconButton>
                                        </InputAdornment>
                                        )
                                    }}
                                />
                                :
                                <Button 
                                    size="medium" 
                                    variant='text'
                                    onClick={() => setShowFilterInput(true)}>
                                    <FilterButton>
                                        <p>Filtrar</p>
                                        <BiFilter/>
                                    </FilterButton>
                                </Button>
                            }
                        </div>  
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell >Cidade</TableCell>
                                    <TableCell >Estado</TableCell>
                                    <TableCell >Situacao</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showFilterList?
                                    listSchoolsFilter.map((school,index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {school.nome} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.cidade} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.estado} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.situacaoFuncionamentoTxt} 
                                            </TableCell>
                                        </TableRow>
                                    ))
                                :
                                    listSchools.map((school,index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {school.nome} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.cidade} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.estado} 
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {school.situacaoFuncionamentoTxt} 
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                }
            </>
        }
    </Container>
  );
}

export default SchoolList;