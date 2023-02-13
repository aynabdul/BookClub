import React from 'react';
import ProfileCard from '../ProfileCard';
import './Cabinet.css';

export default function Products() {
  return (
    <>
    <div className='for-bg'>
        <div className='cabinet'>
          <div className='card_container'><h1 className='cabinet-header'>CABINET</h1>
            <div className='card_wrapper'>
              <ProfileCard
                src={'./images/boy1.jpg'}
                name='Hamza'
                designation='President'
              />
              <ProfileCard
                src={'./images/girl3.jpg'}
                name='Ayesha'
                designation='Vice President'
              />
              <ProfileCard
                src={'./images/girl2.jpg'}
                name='Sarah'
                designation='Secretary'
              />
              <ProfileCard
                src={'./images/boy2.jpg'}
                name='John'
                designation='Treasurer'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
