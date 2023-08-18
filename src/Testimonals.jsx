import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { members } from './data';


export default class Testimonials extends Component {
  render() {
    return ( <div className="testimonials-container"  style={{marginLeft: "auto",marginRight:"auto",margin:"auto",position:'absolute',top:'75px'}}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
       
          {members.map((member) => {
            const { id, img, name, job, say } = member;
            return (
          <div key={id} >
          <img src={img} />
          <div className="myCarousel" >
                <h3>{name}</h3>
                <h4>{job}</h4>
            <p>
             {say}
            </p>
          </div>
          
              </div>)
          })}

            

      
      </Carousel>
      </div>
    );
  }
}