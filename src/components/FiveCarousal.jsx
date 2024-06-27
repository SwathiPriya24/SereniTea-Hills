import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chocimg from '../images/homechoc.jpg';
import varkeyimg from '../images/varkey.jpg';
import coffeeimg from '../images/coffee 2.jpg';
import { Link } from 'react-router-dom'

const FiveCarousal = () => {
    return (
        <div className="container pt-4 px-0">
            <Carousel
                autoPlay={true}  
                interval={3000}  
                stopOnHover={false} 
                infiniteLoop={true}  
            >
                <div className='changeht'>
                    <img src={chocimg} alt="slide 1" className=' carousalimg img-fluid' />
                    <button className="legend"> <Link to="/ourteas">Homemade Chocolate</Link> </button>
                </div>
                <div className='changeht'>
                    <img src={varkeyimg} alt="slide 2" className='img-fluid'/>
                    <button className="legend"> <Link to="/ourteas">Ooty Varkey</Link> </button>
                </div>
                <div className='changeht'>
                    <img src={coffeeimg} alt="slide 3" className='img-fluid' />
                    
                    <button className="legend"> <Link to="/ourteas">   Original Coffee</Link> </button>
                </div>
            </Carousel>
        </div>
    );
}

export default FiveCarousal;

