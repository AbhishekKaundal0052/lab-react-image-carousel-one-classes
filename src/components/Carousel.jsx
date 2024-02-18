import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            clickCount : 0
        }
      }
    
      render(){
        return (
            <>
            <div id="home">
                <div id="left" onClick={() => { 
                    if (this.state.clickCount > 0)
                        this.setState({clickCount : this.state.clickCount - 1}) 
                    else if (this.state.clickCount <= 0) 
                    this.setState({clickCount : 2})
            }}>
                    <ArrowBackIosIcon/>
                </div>
    
                <div id="carouselImage" style={{backgroundImage: `url('${images[this.state.clickCount].img}')`, backgroundRepeat: 'no-repeat'}}>
                    <div id="content">
                        <h1>{images[this.state.clickCount].title}</h1>
                        <div>{images[this.state.clickCount].subtitle}</div>
                    </div>
                </div>
    
                <div id="right" onClick={() => { 
                    if (this.state.clickCount < images.length - 1)
                    this.setState({clickCount : this.state.clickCount + 1}) 
                else if (this.state.clickCount >= images.length - 1) 
                this.setState({clickCount : 0})
        }}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
            <span>Made by Abhishek</span>
            </>
        )
      }
    
    }
     

export default Carousel;