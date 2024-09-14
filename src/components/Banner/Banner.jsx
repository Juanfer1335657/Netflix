// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Typography, Box, useMediaQuery, useTheme } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


export default function Component() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    
    <Grid2 container spacing={7} >
        <Grid2 Item lg={3} md={4} sm={6} xs={12}></Grid2>
    <Box
      sx={{
        position: 'relative',
        height: { xs: '50vh', sm: '60vh', md: '80vh' },
        width: '100%',
        overflow: 'hidden',
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />



      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: '0 2rem', sm: '0 3rem', md: '0 4rem' },
          color: 'white',
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          sx={{ marginBottom: '1rem' }}
        >
          Stranger Things
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '1.5rem',
            maxWidth: { xs: '100%', sm: '75%', md: '50%' }
          }}
        >
          Cuando un niño desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña extraña.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              },
            }}
          >
            Play
          </Button>
          <Button
            variant="contained"
            startIcon={<InfoOutlinedIcon />}
            sx={{
              backgroundColor: 'rgba(109, 109, 110, 0.7)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(109, 109, 110, 0.4)',
              },
            }}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>
        </Grid2>

  )
}
