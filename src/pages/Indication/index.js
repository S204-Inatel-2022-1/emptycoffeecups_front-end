import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';

import Sidebar from '../../components/Sidebar';
import Client from '../../resources/entitiesClient';
import { Context } from '../../contexts/context';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const namesAnime = [
  'Kimetsu no Yaiba',
  'Boku no Hero',
  "Pokemon",
  'Shinjeki no Kyogin',
  'Cavaleiros do Zodíaco',
  'Dragon Ball',
  'One Piece',
  'Naruto',
];

const namesSerie = [
  'Game of Thrones',
  'This Is Us',
  "Modern Family",
  'Stranger Things',
  'The Walking Dead',
  'Orange Is the New Black',
  'CSI',
  'Lost',
  'La Casa de Papel',
  'Lupin',
];

// const namesMusical = [
//   'Axé',
//   'Blues',
//   "Country",
//   'Eletrônica',
//   'Forró',
//   'Funk',
//   'Gospel',
//   'Hip Hop',
//   'MPB',
//   'Rock',
//   'Samba',
//   'Sertanejo',
// ];

function getStyles(name, names, theme) {
  return {
    fontWeight:
      names.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Indication() {  

  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  // const [generoMusical, setGeneroMusical] = useState([]);
  const [gostaAnime, setGostaAnime] = useState('');
  const [gostaSerie, setGostaSerie] = useState('');
  const [anime, setAnime] = useState([]);
  const [serie, setSerie] = useState([]);

  const { 
    setCurrentGifts,
  } = useContext(Context);

  const navigate = useNavigate();

  const handleClickGift = async () => {
    const data = {
      idade: parseInt(idade),
      genero: genero,
      gostaAnime: gostaAnime,
      gostaSerie: gostaSerie,
      anime: anime,
      serie: serie,
    };

    const gifts = await Client.getGifts(data)
    setCurrentGifts(gifts)

    navigate(`/gift`);
  };

  const theme = useTheme();
  const handleChangeAnime = (event) => {
    const {
      target: { value },
    } = event;
    setAnime(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeSerie = (event) => {
    const {
      target: { value },
    } = event;
    setSerie(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // const handleChangeGeneroMusical = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setGeneroMusical(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  
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

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />      
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <TextField
              id = 'input-idade'
              type="number"
              fullWidth
              variant="outlined"
              label="Idade"              
              sx={styles.txtField}  
              value={idade} 
              onChange={(e) => setIdade(e.target.value)}           
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
              id='input-genero'
              fullWidth
              variant="outlined"
              label="Gênero"              
              select
              sx={styles.txtField}
              value={genero} 
              onChange={(e) => setGenero(e.target.value)}  
              >
              <MenuItem value="">{"None"}</MenuItem>
              <MenuItem value="Unissex">{"Unissex"}</MenuItem>
              <MenuItem value="Feminino">{"Feminino"}</MenuItem>
              <MenuItem value="Masculino">{"Masculino"}</MenuItem>
            </TextField>
        </Box>
        {/* <Box sx={styles.box}>          
          <FormControl sx={styles.txtField}>                               
            <InputLabel id="demo-multiple-generosmusicais-label">Gêneros Musicais</InputLabel>
              <Select
                labelId="demo-multiple-generosmusicais-label"
                id='demo-multiple-generosmusicais'
                multiple
                value={generoMusical}
                onChange={handleChangeGeneroMusical}
                input={<OutlinedInput id="select-multiple-generosmusicais" label="Gêneros Musicais" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {namesMusical.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, generoMusical, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
        </Box>   */}
        <Box sx={styles.box}>
          <TextField
              id='input-gostar-anime'
              fullWidth
              variant="outlined"
              label="Gosta de Animes"              
              select
              sx={styles.txtField}
              value={gostaAnime} 
              onChange={(e) => setGostaAnime(e.target.value)}  
          >
            <MenuItem value="">{"None"}</MenuItem>
            <MenuItem value={true}>{"Sim"}</MenuItem>
            <MenuItem value={false}>{"Não"}</MenuItem>
          </TextField>
        </Box>  
        <Box sx={styles.box}>
          <TextField
              id='input-gostar-serie'
              fullWidth
              variant="outlined"
              label="Gosta de Séries"              
              sx={styles.txtField}
              value={gostaSerie} 
              select
              onChange={(e) => setGostaSerie(e.target.value)}  
          >
            <MenuItem value="">{"None"}</MenuItem>
            <MenuItem value={true}>{"Sim"}</MenuItem>
            <MenuItem value={false}>{"Não"}</MenuItem>
          </TextField>
        </Box>  
        <Box sx={styles.box}> 
          <FormControl sx={styles.txtField}>                               
            <InputLabel id="demo-multiple-anime-label">Animes</InputLabel>
              <Select
                labelId="demo-multiple-anime-label"
                id="demo-multiple-anime"
                multiple
                value={anime}
                onChange={handleChangeAnime}
                input={<OutlinedInput id="select-multiple-anime" label="Animes" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {namesAnime.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, anime, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>              
        </Box>  
        <Box sx={styles.box}>          
          <FormControl sx={styles.txtField}>                               
            <InputLabel id="demo-multiple-series-label">Séries</InputLabel>
              <Select
                labelId="demo-multiple-serie-label"
                id="demo-multiple-series"
                multiple
                value={serie}
                onChange={handleChangeSerie}
                input={<OutlinedInput id="select-multiple-series" label="Séries" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {namesSerie.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, serie, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>   
        </Box>           
        {((idade !== "" || genero !== "" || gostaAnime !== "" || gostaSerie !== "" || serie !== "") && (idade === "" || idade > 0))
          ? (
            <Box>
              <Button 
                id = 'btn-presente'
                sx={styles.boxButton}
                onClick={(e)=> handleClickGift(e)}
              >
                Presente
              </Button>          
            </Box>
          )
          : (
            <Box>
              <Button 
                disabled  
                sx={styles.boxButton}                
              >
                Presente
              </Button>          
            </Box>
          )}
      </Box>
    </Box >
  )
}