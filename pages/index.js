import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new.css";
import ReactSearchBox from 'react-search-box';


export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="main-page">
        <div className="nav">
          <img className="logo" src="/static/images/main-page/logo.png"></img>

          <img className="search" src="/static/images/main-page/search.svg"></img>
          <ReactSearchBox
            placeholder="Search your news..."
            value="Doe"
            data={this.data}
            callback={record => console.log(record)}
          />
          <img className="user" src="/static/images/main-page/login.svg"></img>
        </div>
        <Slider {...settings}>
          <div>
            <img src="/static/images/main-page/sport.png" alt="123"></img>
            <p className="title">Amazing News</p>
          </div>
          <div>
            <img src="/static/images/main-page/travel-1.png" alt="123"></img>
            <p className="title">Amazing News</p>
          </div>
          <div>
            <img src="/static/images/main-page/entertainment.png" alt="123"></img>
            <p className="title">Amazing News</p>
          </div>
          
      </Slider>
      <div className="category-container">
        <p className="category-title">CATEGORY</p>
        <div className="grid-container">
          <div class="grid-sport">
            <a href="https://www.w3schools.com">
              <p className="category-font">sport</p>
            </a>
          </div>
          <div class="grid-art">
            <a href="https://www.w3schools.com">
              <p className="category-font">Arts</p>
            </a>
          </div>
          <div class="grid-entertainment">
            <a href="https://www.w3schools.com">
              <p className="category-font">Entertainment</p>
            </a>
          </div>
          <div class="grid-travel">
            <a href="https://www.w3schools.com">
              <p className="category-font">Travel</p>
            </a>
          </div>
          <div class="grid-technology">
            <a href="https://www.w3schools.com">
              <p className="category-font">Technology</p>
            </a>
          </div>
          <div class="grid-politics">
            <a href="https://www.w3schools.com">
              <p className="category-font">Politics</p>
            </a>
          </div>
          <div class="grid-finance">
            <a href="https://www.w3schools.com">
              <p className="category-font">Finance</p>
            </a>
          </div>
          <div class="grid-wheather">
            <a href="https://www.w3schools.com">
              <p className="category-font">Wheather</p>
            </a>
          </div>
        </div>
        <div className="footer">
          <p>About us</p>
        </div>
      </div>
    </div>
    );   
  }
}