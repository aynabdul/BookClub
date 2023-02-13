import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
    <div class="about-us">
  <div class="about-us-left">
    <img src='./images/img-logo.png' alt="GCU Book Club Society logo" class="logo"></img>
    <h2 class="society-name">BOOK CLUB</h2>
    <h3 class="society-location">GC university, Lahore</h3>
  </div>
  <div class="about-us-right">
    <p class="society-intro">The GCU Book Club Society is a literary society 
    established in 2021 with the purpose of encouraging students' interest in books. 
    Our goal is to bring together students who share a passion for reading and 
    engage in discussions about literature.</p>
  </div>
</div>

      <h1>Feel free to explore following pages!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Discover new perspectives with STUDY CIRCLES, READ FEST, MEET THE AUTHOR and MUCH MORE.'
              label='Events'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Stay updated and do not miss out amazing opportunities to learn'
              label='Announcements'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Discover new perspectives with STUDY CIRCLES, READ FESTS, MEET THE AUTHOR and MUCH MORE.'
              label='Events'
              path='/events'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Stay updated and do not miss out amazing opportunities to LEARN, NETWORK and GROW'
              label='Announcements'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Step into the world of leadership and unleash your potential with GCU Cabinet.'
              label='Cabinet'
              path='/cabinet'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards