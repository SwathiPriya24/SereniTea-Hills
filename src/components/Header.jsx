import React from 'react'


const Header = () => {
    return (
        <>
     
            <div className="container  text-cente px-0">
                <div className='heading text-center'>
                    <div className="cont">
                        <h2 className="cont">Welcome To SereniTea Hills</h2>
                        <br/>
                        <h4 className="cont">"Indulge in Flavorful Bliss,Delivered to Your Doorstep."</h4>
                    </div>
                </div>

                {/* <div>
                    <h1 className='welcome'>Welcome to serenity Hills</h1>
                    <img src={Headerimg} className='img-fluid'  />
                </div> */}
                {/* <div>
                    <img src={Headerimg} className='img-fluid' />
                    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                        <h1>Welocme To Serenity Hills</h1>
                        <br />
                        <h2>"Indulge in Flavorful Bliss,Delivered to Your Doorstep."</h2>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Header