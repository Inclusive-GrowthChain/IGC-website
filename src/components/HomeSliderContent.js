import React from 'react';
import Carousel from 'react-material-ui-carousel';

import {ReactComponent as Img_1} from '../assets/home_img/1.svg';
import {ReactComponent as Img_2} from '../assets/home_img/6.svg';
import hackathon_img from '../assets/home_img/hackathon.jpg';
import hackathon2_img from '../assets/home_img/hackathon2.jpg';
import partners_img from '../assets/home_img/Partners/partners.png';

import './css/home.css';

const SliderContent = () => {
  var items = [
    {
      index: 1,
      title: "WELCOME TO IGC",
      description: "Inclusive Growth Chain - Impact that Empowers",
      text: ""
    },
    {
      index: 2,
      title: "",
      description: "Winners of NPCI Hackathon 2022-23",
      text: "Our Team has won the NPCI Hackathon for building a PoC of Blockchain enabled Retail Bond Market  for Indian market. We created Micro Bond Exchange PoC that can tokenize and trade Indian listed bonds at more affordable prices for retail investors. "
    },
    {
      index: 3,
      title: "",
      description: "Winners of International Blockchain Hackathon, Dubai 2022",
      text: "Inclusive Growth Chain won first prize at the International Blockchain Hackathon, Dubai 2022 for building a PoC to create real time air quality monitoring through Blockchain Platform using Citizen Science model. "
    },
    {
      index: 4,
      title: "",
      description: "Our Partners",
      text: "Our Partners and Collaborators Engage in Creating Impact through digital transformation"
    },
    {
      index: 5,
      title: "",
      description: "Hello World!",
      text: ""
    }
  ]

  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <div className='home_container_1'>
      <div className='welcome_container'>
        <div className={'welcome_title'}>
          {props.item.title}
        </div>
        <div className={'welcome_desc'}>
          {props.item.description}
        </div>
        <div className={'welcome_text'}>
          {props.item.text}
        </div>
        <div className='learn_more'>
          <button className={'learn_button'}>
            LEARN MORE
          </button>
        </div>
      </div>
      <div className='img_container'>
        {
          props.item.index === 1 && (
            <Img_1 className={'home_img'}/>
          )
        }
        {
          props.item.index === 2 && (
            <img src={hackathon_img} style={{boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}} className={'home_img'}/>
          )
        }
        {
          props.item.index === 3 && (
            <img src={hackathon2_img} style={{boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)', height: '550px'}} className={'home_img'}/>
          )
        }
        {
          props.item.index === 4 && (
            <img src={partners_img} style={{boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)', width: '35%', height: '35%'}} className={'home_img'}/>
          )
        }
        {
          props.item.index === 5 && (
            <Img_2 className={'home_img'}/>
          )
        }
        
      </div>
    </div>
  )
}

export default SliderContent;