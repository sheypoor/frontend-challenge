import {useState, FC} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LoginIcon from '@material-ui/icons/PeopleAltRounded';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import {Link} from 'react-router-dom';

const NavBar: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setShowDrawer(prevState => !prevState);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={handleToggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography style={{marginLeft: 'auto'}}>
            <Button
              color="inherit"
              variant="outlined"
              href="/register"
              style={{margin: 3}}
            >
              <LoginIcon /> SignUp
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} onClose={handleToggleDrawer}>
        <Typography align="center">
          <List>
            <ListItem>
              <Link to="/">
                <ListItemText>
                  <Button onClick={handleToggleDrawer}>
                    <HomeIcon /> Home
                  </Button>
                </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Typography>
      </Drawer>
    </div>
  );
};

export default NavBar;
