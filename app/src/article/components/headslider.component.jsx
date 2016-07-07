import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
// require('../../styles/navi.style.css');
require('../../../styles/headslider.style.css');
require('../../../../node_modules/react-responsive-carousel/styles/carousel.css');
// var Carousel = require('react-responsive-carousel').Carousel;

// var Decorators = [{
//   component: React.createClass({
//     render() {
//       return (
//         <button
//           onClick={this.props.previousSlide}>
//           Previous Slide
//         </button>
//       )
//     }
//   }),
//   position: 'CenterLeft',
//   style: {
//     padding: 20
//   }
// }];
var Carousel = require('nuka-carousel');
class HeadSliderComponent extends React.Component{

	constructor(){

		super();

	}

	render() {
    return (
      <Carousel dragging={true} autoplay={true}> 
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2067/small/iStock_000023954847_Fullwide_ppt.jpg"/>
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2030/small/iStock_000065756809_Large_2.jpg"/>
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2430/small/%D1%88%D0%B5%D0%BB%D0%B5.jpg"/>
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2067/small/iStock_000023954847_Fullwide_ppt.jpg"/>
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2030/small/iStock_000065756809_Large_2.jpg"/>
        <img className="carouselImage"
          src="https://d1ujii9cn3t0u4.cloudfront.net/uploads/production/event_page_part/2430/small/%D1%88%D0%B5%D0%BB%D0%B5.jpg"/>
      </Carousel>
    )
  }

	// render() {
	// 	return (

 //             // <Carousel showThumbs={false} showArrows={false} showStatus={false} onChange={onChange} onClickItem={onClickItem}>
 //            // <Carousel showThumbs={false} showArrows={true} showStatus={false} onChange={this.onChange} onClickItem={this.onClickItem}>
 //            //     <div>
 //            //         <img src="app/res/images/background.jpg" />
 //            //         <p className="legend">Legend 1</p>
 //            //     </div>
 //            //     <div>
 //            //         <img src="app/res/images/background.jpg" />
 //            //         <p className="legend">Legend 2</p>
 //            //     </div>
 //            //     <div>
 //            //         <img src="app/res/images/background.jpg" />
 //            //         <p className="legend">Legend 3</p>
 //            //     </div>
 //            //     <div>
 //            //         <img src="app/res/images/background.jpg" />
 //            //         <p className="legend">Legend 4</p>
 //            //     </div>
 //            //     <div>
 //            //         <img src="app/res/images/background.jpg" />
 //            //         <p className="legend">Legend 5</p>
 //            //     </div>
                
 //            // </Carousel>
 //        );
	// }
}

export default HeadSliderComponent;