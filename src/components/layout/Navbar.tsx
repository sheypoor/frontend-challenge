import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sheypoor Newsletter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
