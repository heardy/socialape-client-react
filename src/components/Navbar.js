import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">signup</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
