
// eslint-disable-next-line 
import React, { Component } from 'react';

import Navbar from './Navbar';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout } = this.props;  
    return (
      <>
      <Navbar 
        {...this.props}

      />
      </>


    )
  }
}

export default Header;


