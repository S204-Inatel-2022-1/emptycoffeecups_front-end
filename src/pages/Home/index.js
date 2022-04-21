import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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
      width: '50%',
      color: '#FFF',
      background: '#ba0041',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      p: '10%',
      m: '5% auto',              
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
          <Typography>Logo</Typography>                                  
        </Box>
          <Typography sx={styles.txt}>Texto dissertativo é um formato de escrita que busca defender uma ideia central a partir da argumentação, valendo-se, portanto, de opiniões e provas, como dados, levantamentos, estatísticas, fatos, exemplos e quaisquer outros elementos que sejam capazes de sustentar a tese apresentada.</Typography>
        <Button
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