import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
// require('../../styles/navi.style.css');
require('../../../styles/category.style.css');

class CategoryComponent extends React.Component{

	constructor(){

		super();

	}
	render(){
	  return (
			    <div>
			    	<div className="grid">
						<figure className="effect-layla">
							<img src="http://7xk83p.com2.z0.glb.qiniucdn.com/logo!574bac8cda97b6e9299d2f04.png" alt="img06"/>
							<figcaption>
								<h2>Crazy <span>Layla</span></h2>
								<p>When Layla appears, she brings an eternal summer along.</p>
								<a href="#">View more</a>
							</figcaption>			
						</figure>
					</div>
				</div>
			)
	}
}


					// <ul class="demo-list-item mdl-list">
					//   <li class="mdl-list__item">
					//     <span class="mdl-list__item-primary-content">
					//       <h3>JAVASCRIPT</h3>
					//       <div className="mdl-grid">

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image4 mdl-card mdl-shadow--2dp">

					// 				<a className="custA" href="#">Viewmore</a>
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image2 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image3 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image1 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>
					// 	</div>
					//     </span>
					//   </li>
					//   <li class="mdl-list__item">
					//     <span class="mdl-list__item-primary-content">
					//       <h3>PHP</h3>
					//       <div className="mdl-grid">

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image4 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image2 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image3 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image1 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>
					// 	</div>
					//     </span>
					//   </li>
					//   <li class="mdl-list__item">
					//     <span class="mdl-list__item-primary-content">
					//       <h3>JAVA</h3>
					//       <div className="mdl-grid">

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image4 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">	
					// 			<div className="demo-card-image2 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image3 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>

					// 		<div className="mdl-cell mdl-cell--3-col">
					// 			<div className="demo-card-image1 mdl-card mdl-shadow--2dp">
					// 				<div className="mdl-card__title mdl-card--expand"></div>
					// 				<div className="mdl-card__actions">
					// 					<span className="demo-card-image__filename">
					// 						hahaha
					// 					</span>
					// 				</div>
					// 			</div>
					// 		</div>
					// 	</div>
					//     </span>
					//   </li>
					// </ul>
export default CategoryComponent;