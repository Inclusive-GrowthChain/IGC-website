import React from 'react';
import Carousel from 'react-material-ui-carousel';

import {ReactComponent as Img_1} from '../../assets/home_img/1.svg';
import {ReactComponent as Img_2} from '../../assets/home_img/2.svg';

import '../css/home.css';

const Example = () => {
  var items = [
    {
      index: 1,
      title: "WELCOME TO IGC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      index: 2,
      title: "Impact Story #1",
      description: "Hello World!"
    },
    {
      index: 3,
      title: "Impact Story #2",
      description: "Hello World!"
    },
    {
      index: 4,
      title: "Hackathon",
      description: "Hello World!"
    },
    {
      index: 5,
      title: "Our Partners",
      description: "Hello World!"
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
        <div className={'welcome_text'}>
          {props.item.description}
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
            <Img_2 className={'home_img'}/>
          )
        }
      </div>
    </div>
  )
}

export default Example;