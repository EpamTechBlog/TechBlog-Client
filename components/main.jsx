'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let FirstComp = React.createClass({
	render: () => {
		return (
			<p>Hello TechBolg</p>
		);
	}
});

ReactDOM.render(
	<FirstComp />,
	document.getElementById('react')
);