import React from 'react';
// import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'purple'
    };
  }

  render() {
    return (
      <div>
          <h2 >
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
            <div>index</div>
            <div>new</div>
            <div >Log In</div>
            <br/>
      </div>
    );
  }
}

export default Navbar;
