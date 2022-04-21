import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField, Typography, Button } from '@mui/material';


import presentes from '../../assets/images/presentes.jpg';

export default function CreateUser() {
  const navigate = useNavigate();

  const styles = {
    boxPrincipal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      height: '100%',
      background: `url(${presentes}) no-repeat left top fixed`,
      backgroundSize: 'cover',
    },
    boxIconButton: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      m: 0,
      p: 0,
    },
    icon: {
      color: '#af0351',
      m: 0,
      p: 0
    },
    txtField: {
      mb: '30px',
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
    boxButtonNew: {
      mt: '52px',
      height: '42px',
      backgroundColor: '#af0351',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#de6021',
      }
    },
    box: {
      display: 'flex',
      backgroundColor: 'white',
      position: 'absolute',
      width: '80%',
      height: '80%',
      borderRadius: '20px',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      m: '36px',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      width: '35%',
      height: '100%',
    },
    boxText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      mr: '36px',
    },
    text: {
      color: '#af0351',
      fontSize: '20px',
      textAlign: 'center',
    },
    boxForm: {
      display: 'flex',
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      pl: '36px',
      justifyContent: 'center',
      borderLeft: '2px solid #af0351',
    },
    boxTxtRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };

  const handleClick = (e) => {
    navigate(`/`);
  }

  return (
    <Box sx={styles.boxPrincipal}>
      <Box sx={styles.box}>
        <Box sx={styles.container}>
          <Box sx={styles.right}>
            <Box sx={styles.boxIconButton}>
              <IconButton disableRipple onClick={(e) => handleClick(e)}>
                <ArrowBackIosIcon sx={styles.icon} />
              </IconButton>
            </Box>
            <Box sx={styles.boxText}>
              <Typography sx={styles.text}>
                LOGO
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.boxForm}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="E-mail"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Nome"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Senha"
              disableRipple
              sx={styles.txtField}
            />                       
            <Button fullWidth disableRipple sx={styles.boxButtonNew}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}