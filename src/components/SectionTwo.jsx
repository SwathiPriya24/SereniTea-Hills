import React from 'react'
import teaprocess from "../images/processimg.png"
 const SectionTwo = () => {
    return (
        <>
            <div className="container text-center  py-4 sectiontwo" >
                <h2> Tea Manufacturing & Process</h2>
                <br /><br />
                <div className="col-12">

                </div>
                <img className='processimg img-fluid' src={teaprocess} alt=""  />
            </div>
        </>
    )
}
export default SectionTwo;