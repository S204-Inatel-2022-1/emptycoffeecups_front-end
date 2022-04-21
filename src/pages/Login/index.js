import { useNavigate } from 'react-router-dom';

import presentes from '../../assets/images/presentes.jpg';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function Login() {
    const navigate = useNavigate();

    const styles = {
        avatarAberto: {
            width: '50%',
            height: '100%',
        },
        boxPrincipal: {
            display: 'flex',
            flexDirection: 'row',            
            width: '100%',
            height: '100%',
        },
        boxButtonNew: {
            mt: '20px',
            mb: '5px',
            backgroundColor: '#af0351',
            borderRadius: '10px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#ff7fac',
                color: '#af0351',
            }
        },
        boxButtonCreate: {
            mt: 3,
            backgroundColor: "White",
            borderRadius: '10px',
            color: '#af0351',
            '&:hover': {
                backgroundColor: '#ff7fac',                
            }
        },
        boxCreate: {
            display: 'flex',
            flexDirection: 'column',
            m: '30px',
            justifyContent: 'center',
            alignItems: 'center',

        },
        boxTypographyCreate: {
            color: '#eb6095',
            fontSize: '20px',
            alignItems: 'center',
            justifyContent: 'center',

        },
        listItemButton: {
            backgroundColor: '#b03b00',
            height: '55px',
            '&:hover, &:selected, &:focused': {
                backgroundColor: '#de6021',
            }
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
        container: {
            width: '100%',
            height: '100%'
        },
        boxForm: {
            p: '24px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center'
        },
        boxTitle: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: '50px',
        },
        title: {
            color: '#af0351',
            fontWeight: 'bold',
            fontSize: '60px',
            mt: '20px',
        },
        subTitle: {
            color: '#eb6095',
            fontSize: '20px',
            mt: '20px',
        },
        checkbox: {
            color: '#eb6095 !important',
        },
    };

    const handleClickCreate = (e) => {
        navigate(`/create`);
    };

    const handleClickEntrar = (e) => {
        navigate(`/home`);
    };

    return (
        <Box sx={styles.boxPrincipal}>
            <Avatar variant="square"
                src={presentes}
                sx={styles.avatarAberto}
            />
            <Box sx={styles.container}>
                <Box sx={styles.boxForm}>
                    <Box sx={styles.boxTitle}>
                        <Typography sx={styles.title}>Gift Tips</Typography>
                        <Typography sx={styles.subTitle}>
                            Faça login para mais benefícios
                        </Typography>
                    </Box>

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Email"
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
                    <FormControlLabel
                        control={<Checkbox value="remember" sx={styles.checkbox} disableRipple />}
                        label="Lembre de mim"
                    />
                    <Button
                        fullWidth
                        disableRipple
                        sx={styles.boxButtonNew}
                        onClick={(e) => handleClickEntrar(e)}
                    >
                        Entrar
                    </Button>

                    <Button
                        fullWidth
                        disableRipple
                        sx={styles.boxButtonNew}
                        onClick={(e) => handleClickEntrar(e)}
                    >
                        Entrar como visitante
                    </Button>

                    <Box sx={styles.boxCreate}>
                        <Typography sx={styles.boxTypographyCreate}>
                            Não possui uma conta?
                        </Typography>
                        <Button
                            startIcon={<AddIcon />}
                            sx={styles.boxButtonCreate}
                            disableRipple
                            onClick={(e) => handleClickCreate(e)}
                        >
                            Criar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}