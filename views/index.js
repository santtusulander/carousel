import React from 'react';
import page  from 'page';

import Navigation from '../components/navigation';
import Carousel   from '../components/carousel';

export default React.createClass({

	render(){
		let slides=[
			{
				className: 'slide',
				content: 'juu',
				style: {


				}
			},
			{
				className: 'slide',
				content: 'ei',
				style: {


				}
			},
			{
				className: 'slide',
				content: 'jaa',
				style: {

				}
			}
		]
		return (
			<div>
				<Navigation view='index'/>
				<Carousel slides={slides} />
			</div>
		);
	}
});