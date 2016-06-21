import React from 'react';

class HomeComponent extends React.Component{


  constructor() {
    super();
    this.state = { data : [] };
  }

  render() {
    return(
            <p>Hello TechBolg</p>
          )
  }
}

export default HomeComponent;
