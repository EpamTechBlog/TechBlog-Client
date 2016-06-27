import React from 'react';
require('../../styles/index.style.css');
class NoMatchComponent extends React.Component{


  constructor() {
    super();
    this.state = { data : [] };
  }

  render() {
    return (
           	<p>No Page Found</p>   
           )
  }
}

export default NoMatchComponent;
