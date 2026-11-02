import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

import pg1 from "./assets/Images/pg1.jpeg"
import pg2 from "./assets/Images/pg2.jpeg"
import pg3 from "./assets/Images/pg3.jpeg"
import pg4 from "./assets/Images/pg4.jpeg"
import pg5 from "./assets/Images/pg5.jpeg"
import pg6 from "./assets/Images/pg6.jpeg"

const root = ReactDom.createRoot(document.getElementById("root"));

function Gallery(props){
  return(
    <div className='card'>
      <img className='card__img' src={props.image} alt="photo1" />
      <h1 className='card__title'>{props.title}</h1>
      <p className='card__desc'>{props.desc}</p>
    </div>
  )
}

let photoCardList = [{
  image : pg1,
  title : "Majestic Morning Vista",
  desc : "Discover breathtaking landscapes where tranquil skies meet towering peaks. "
  },
  {
    image : pg2,
    title : "Tropical Beach Getaway",
    desc : "Find your inner peace with calming ocean breezes and crystal-clear waters. "
  },
  {
    image : pg3,
    title : "Forest Adventure Awaits",
    desc : "Journey deep into the woods and explore hidden trails. Discover breathtaking views."
  },
  {
    image : pg4,
    title : "Lavender Fields Forever",
    desc : "Walk through endless fields of blooming lavender surrounded by gentle hills."
  },
  {
    image : pg5,
    title : "Serenity by the Lake",
    desc : "Experience the magic of crystal-clear waters surrounded by majestic mountains."
  },
  {
    image : pg6,
    title : "Golden Hour Escape",
    desc : "Watch the golden sun disappear beyond the ocean horizon. Create a moment worth remembering."
  }]

root.render(
  <>
    <h1 className='heading'>Photo Gallery</h1>
    <div className='container'>
    {photoCardList.map(function(item, index){
      return(
        <Gallery 
        image = {item.image} 
        title = {item.title} 
        desc = {item.desc}
      />
      )
    })
    }
  </div>
  </>
)