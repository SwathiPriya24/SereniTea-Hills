import React from 'react'
import aboutimg from "../images/aboutimg.png"
import { Link } from 'react-router-dom'

function SectionOne() {
    return (
        <>
            <div className="container text-center py-4 px-0">
                <h2>About Us</h2>
                <br />
                <div className="aboutUsCont">


                    <h6>Among the many businesses of the SereniTea Hills Group,
                        tea has been the primary and oldest one. Over the past
                        33 years, the company has been that of a progressive,
                        quality-focused Niligiris tea producer.
                        Our company has not only won the trust of its traders but
                        also its consumers in regard to the superior quality of tea supplied.
                        A key part of our success is our partnership with Anand Trading Co,
                        which serves as a vital marketing partner, amplifying our reach and
                        ensuring our premium tea is accessible to a wider market.</h6>
                    <br />
                    <button className='readmorebtn'>
                        <Link to="/aboutus">  Read More...</Link>
                    </button>
                    <br />

                </div>
                <img className='aboutimg img-fluid' src={aboutimg} alt="" />
            </div>
        </>
    )
}

export default SectionOne;