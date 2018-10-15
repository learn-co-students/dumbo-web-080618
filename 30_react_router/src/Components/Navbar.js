import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
            <div>index</div>
            <div>new</div>

            <Link to="/login">
              <div >Log In</div>
            </Link>

            <br/>
      </div>
    );
  }
}

export default Navbar;
