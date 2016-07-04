import React from 'react';
class AppComponent extends React.Component{


  constructor() {
    super();
  }

  render() {

      return (
              <div>
                  {this.props.children}
              </div>
             )

  }
}

export default AppComponent;
