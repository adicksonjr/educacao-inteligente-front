
import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Container, IconButton, InputAdornment, TextField } from '@mui/material';
import { BiCommentDetail, BiFilter, BiSearchAlt2 } from 'react-icons/bi';
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
    
    const handleSearch = async () => {
        setLoading(true)
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
        listSchools.forEach(school => {
            if(filterName.toUpperCase()===school.cidade){
                setListSchoolsFilter([...listSchoolsFilter,school])
                setShowFilterList(true)
            }
        })
        setShowFilterInput(false)
    }
    return (
    <Container component='main' maxWidth='lg' >
        <div className='d-flex flex-row justify-content-between align-items-center '>
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
            <TextField 
                id="standard-basic" 
                label="Busca" 
                variant="standard"
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
        </div>
        {isLoading?
            <LoadingContainer>
                <Spinner name="ball-spin-fade-loader" />
            </LoadingContainer>
            :
            <List
            sx={{ bgcolor: 'background.paper' }}
            component="nav"
            >
                {showFilterList?
                    listSchoolsFilter.map((school,index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={school.nome} />
                            <BiCommentDetail/>
                        </ListItemButton>
                    ))
                :
                    listSchools.map((school,index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={school.nome} />
                            <BiCommentDetail/>
                        </ListItemButton>
                    ))}
            </List>
        }
    </Container>
  );
}

export default SchoolList;