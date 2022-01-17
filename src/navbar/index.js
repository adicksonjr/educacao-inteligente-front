import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { FiArrowLeft, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { GiArchiveRegister } from 'react-icons/gi';
import { FaListAlt } from 'react-icons/fa';
import { BsFillInfoSquareFill } from 'react-icons/bs';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = ({children}) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <FiMenu size={30}/>
          </Button>
          <Typography variant="h6" noWrap component="div">
            MOBIEDUCA.ME
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Button onClick={handleDrawerClose}>
            <FiArrowLeft size={30}/>
          </Button>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem button >
              <ListItemText>
                <Link className='sideLink' to='/listagem'>
                  <Typography variant="h7" gutterBottom component="div">
                    <FaListAlt className='sideSVG'/>
                    Lista de Escolas API
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button >
              <ListItemText>
                <Link className='sideLink' to='/registro'>
                  <Typography variant="h7" gutterBottom component="div">
                    <GiArchiveRegister className='sideSVG'/>
                    Cadastar Escola
                  </Typography>
                  </Link>
              </ListItemText>
            </ListItem>
            <ListItem button >
              <ListItemText>
                <Link className='sideLink' to='/sobre'>
                  <Typography variant="h7" gutterBottom component="div">
                    <BsFillInfoSquareFill className='sideSVG'/>
                    Sobre
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        {children}
      </Main>
    </Box>
  );
}
export default NavBar;