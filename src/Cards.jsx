import React from 'react'
import Image from './Image';

function Card(props) { // make sure to define props or any other word in () such that it can be use in our function as we see in line 10, 12 and 13
    return (
        <div className="cards">
          <div className="card">
            <Image imgsrc={props.imgsrc} />
            <div className="card_info">
              <span className='card_category' >{props.category}</span>
              <h3 className='card_title'>{props.title}</h3>
              <a href={props.link} target='blank'>
                <button className='btn'>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
    );
  }
export default Card ;
