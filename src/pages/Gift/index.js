import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Sidebar from '../../components/Sidebar';
import { Context } from '../../contexts/context';

export default function Gift() {  
  
  const { 
    currentGifts,
  } = useContext(Context);

  const styles = {     
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
      p: '10%',
    },
    boxButton: {
      width: '100%',
      height: '40px',     
      backgroundColor: '#af0351',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#ff7fac',
        color: '#af0351',
      }
    },
    color: {
      width: '60px',
      height: '40px',
    },
  }; 

  const gifts = currentGifts.data

  // const gifts = [
  //   {
  //     id:1,
  //     name: 'Presente 1',
  //     subheader: 'Mais indicado',
  //     image: 'https://veja.abril.com.br/wp-content/uploads/2016/12/presente.jpg?quality=70&strip=all',      
  //     description: [
  //       '10 users included',
  //       '2 GB of storage',
  //       'Help center access',
  //       'Email support',
  //     ],      
  //   },
  //   {
  //     id:2,
  //     name: 'Presente 2', 
  //     image: 'https://veja.abril.com.br/wp-content/uploads/2016/12/presente.jpg?quality=70&strip=all',         
  //     description: [
  //       '20 users included',
  //       '10 GB of storage',
  //       'Help center access',
  //       'Priority email support',
  //     ],    
  //   },
  //   {
  //     id:3,
  //     name: 'Presente 3',
  //     image: 'https://veja.abril.com.br/wp-content/uploads/2016/12/presente.jpg?quality=70&strip=all',          
  //     description: [
  //       '50 users included',
  //       '30 GB of storage',
  //       'Help center access',
  //       'Phone & email support',
  //     ],      
  //   },
  // ];

  const handleClickReview = (e) => {
    window.open(`https://www.youtube.com/results?search_query=${e.nome} Review`)
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />       
      <Box sx={styles.container}>
        <Container maxWidth="100%" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {gifts.map((gift) => (
              
              <Grid
                item
                key={gift._id}
                xs={12}                
                md={4}
              >
                <Card>
                  <CardHeader
                    title={gift.nome}
                    subheader={gift.subheader}
                    titleTypographyProps={{ align: 'center' }}                    
                    subheaderTypographyProps={{
                      align: 'center',
                      color: 'white',
                    }}
                    sx={{
                      backgroundColor: '#ba0041',                      
                      color: 'white',
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,                        
                      }}
                    >
                    <ImageListItem >
                      <img alt='img' src={gift.foto}/>  
                    </ImageListItem>                                                          
                    </Box>
                    <ul>
                      {gift.tags.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                  <Button 
                    id = 'btn-yt'
                    disableRipple sx={styles.boxButton}
                    onClick={(e)=> handleClickReview(gift)}                    
                  >                   
                    <YouTubeIcon sx={styles.color} />                                     
                  </Button>   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> 
      </Box>                     
    </Box >
  )
}