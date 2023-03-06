import './Card.css'
import React from 'react';

const Card = () => {

    return (
        <div className='Card'>
            <div className='inner'>
                <div className='front'>
                    <p className='question'>What is a blueprint or template for creating objects that define the attributes and behavior of the objects?</p>
                </div>

                <div className='back'>
                    <p className='answer'>Class</p>
                </div>
            </div>
        </div>
    )

}

export default Card;