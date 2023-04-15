import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Don't just take our word for it - see what our customers are saying!
We're proud to have received positive reviews on multiple platforms, including Google, TripAdvisor, and Yelp.
Our delicious plant-based burgers and commitment to sustainability have earned us a loyal following of happy customers.🍔 </p>
        </div>
        <p className="p__opensans"> Our Chef has an experience more than 15 years, is so talented and  don't forget when you don't finish your dish he is going to come in your table </p>
      </div>

      <div className="app__chef-sign">
        <p>Roni Chef</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
