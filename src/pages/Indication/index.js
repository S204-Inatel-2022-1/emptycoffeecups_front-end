import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import Sidebar from '../../components/Sidebar';

export default function Usuario() {  
  const navigate = useNavigate();

  const styles = {
    txtField: {
      width: '700px',
      borderRadius: '10px',
      backgroundColor: 'white !important',
      color: 'white !important',
      '& label.Mui-focused': {
          color: '#ba0041',
          backgroundColor: 'transparent !important',
      },
      '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          backgroundColor: 'white !important',
          '&.Mui-focused fieldset': {
              backgroundColor: 'transparent !important',
              borderRadius: '10px',
              borderColor: '#ba0041',
          },
      },
    },   
    boxPage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      m: 0,
      p: 0,
    },
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',     
      p: '24px',
    },
    buttonInfo: {
      backgroundColor: '#ba0041',
      color: 'white',
      borderRadius: '10px',
      width: '338px',
      height: '53px',
      ml: '24px',
      '&:hover': {
          backgroundColor: '#9c0036',
      }
    },
    boxButton: {
      width: '390px',
      height: '40px',
      mt: '40px',
      mb: '20px',
      ml: '150px',
      backgroundColor: '#af0351',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#ff7fac',
        color: '#af0351',
      }
    },   
    box: {
      pt: '24px',
    },
  };

  const handleClickGift = (e) => {
    navigate(`/gift`);
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />      
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Idade"
              disableRipple
              sx={styles.txtField}              
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Genero"
              disableRipple
              sx={styles.txtField}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Generos Musicais"
              disableRipple
              sx={styles.txtField}
          />
        </Box>  
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Gosta Anime"
              disableRipple
              sx={styles.txtField}
          />
        </Box>  
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Gosta Series"
              disableRipple
              sx={styles.txtField}
          />
        </Box>  
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Animes"
              disableRipple
              sx={styles.txtField}
          />
        </Box>  
        <Box sx={styles.box}>
          <TextField
              required
              fullWidth
              variant="outlined"
              label="Series"
              disableRipple
              sx={styles.txtField}
          />
        </Box>                      
        <Box>
          <Button 
            disableRipple sx={styles.boxButton}
            onClick={(e)=> handleClickGift(e)}
          >
            Presente
          </Button>          
        </Box>
      </Box>
    </Box >
  )
}