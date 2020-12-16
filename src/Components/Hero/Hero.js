import React from 'react'
import Img from './port-bg.jpeg'

export default function Hero(props) {
    
    const heroImage = {
        backgroundImage: `url(${Img})`
    }

    return (
        <>
          <div className="site-blocks-cover overlay" style={heroImage}>
      <div className="container">
        <div className="row align-items-center justify-content-center">

          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div className="row mb-4">
              <div className="col-md-7">
                <h1>Hi there.</h1>
                <p className="mb-5 lead">My name is Fatima Abdillahi. I help companies design, develop, and deliver the right app for their customer.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
        </>
    )
}
