import React from 'react';

class HomeComponent extends React.Component{


  constructor() {
    super();
    this.state = { data : [] };
  }

  render() {
    return (
          <div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Button
            </button>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              Button1
            </button>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button2
            </button>
          </div>
          )
  }
}

export default HomeComponent;
