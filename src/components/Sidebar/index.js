import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RedeemIcon from '@mui/icons-material/Redeem';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/presentes.jpg';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      overflowX: "hidden",
      backgroundColor: "#af0351",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const styles = {
    boxPrincipal: {
      display: 'flex',
      m: 0,
      p: 0,
    },

    boxAvatar: {
      display: 'flex',
      justifyContent: 'center',
    },

    avatarAberto: {
      width: '150px',
      height: '150px',
    },

    avatarFechado: {
      width: '60px',
      height: '60px',
    },

    listItemButton: {
      backgroundColor: '#af0351',
      height: '55px',
      '&:hover, &:selected, &:focused': {
        backgroundColor: '#de6021',
      }
    },

    color: {
      color: 'white',
    }
  };

  return (
    <Box sx={styles.boxPrincipal}>
      <Drawer variant="permanent" open={open} onClick={toggleDrawer}>
        <Box sx={styles.boxAvatar}>
          {open === true ?
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarAberto}
            />
            :
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarFechado}
            />
          }
        </Box>
        <List>
          <Link to="/home">
            <ListItemButton disableRipple sx={styles.listItemButton}>
              <ListItemIcon>
                <HomeIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
        <List>
          <Link to="/usuario">
            <ListItemButton disableRipple sx={styles.listItemButton}>
              <ListItemIcon>
                <AccountBoxIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Minha conta" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
        <List>
          <Link to="/indication">
            <ListItemButton disableRipple sx={styles.listItemButton}>
              <ListItemIcon>
                <RedeemIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Indicação" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </Box>
  )
}