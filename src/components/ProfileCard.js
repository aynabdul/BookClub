import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard(props) {
  return (
    <>
      <div className='card'>
        <figure className='card_pic-wrap' data-category={props.label}>
            <img
                className='card_image'
                alt={props.name}
                src={props.src}
            />
        </figure>
        <div className='card_info'>
          <h5 className='card_name'>{props.name}</h5>
          <p className='card_designation'>{props.designation}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
