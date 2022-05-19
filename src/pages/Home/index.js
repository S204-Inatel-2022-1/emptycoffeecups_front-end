import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../assets/images/GiftTips.jpg';

export default function Home() { 
  const navigate = useNavigate();

  const styles = {    
    boxPage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',      
    },
    boxMid: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      m: 0,
      p: 0,
    },
    container: {
      width: '25%',
      color: '#FFF',      
      background: '#ba0041',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.4)',
      p: '2%',      
      m: '3% auto',              
    },
    boxButtonNew: {      
      maxWidth: '30%',
      m: '5% auto',            
      backgroundColor: '#af0351',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#ff7fac',
        color: '#af0351',
      }
    },
    txt: {
      width: '50%',
    }
  };

  const handleClickEntrar = (e) => {
    navigate(`/indication`);
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar /> 
      <Box sx={styles.boxMid}>
        <Box sx={styles.container}>
          <Box 
            component="img"
            sx={{
              height: '100%',
              width: '100%',
              borderRadius: '10px',
            }} 
            src={logo}
          />                                         
        </Box>
          <Typography sx={styles.txt}>Dificuldades em encontrar o presente ideal?
            Não se preocupe, nós criamos o GiftTips justamente para te ajudar com esse problema!!</Typography>
        <Button
          id = 'btn-indicacao'
          fullWidth
          disableRipple
          sx={styles.boxButtonNew}
          onClick={(e) => handleClickEntrar(e)}
        >
          Indicação
        </Button>
      </Box>      
    </Box>
  )
}
