import React from "react"
import { Gallery } from "next-gallery"

const ShowCase = () => {
  const images = [{ src: "/events/1.jpg", aspect_ratio: 4/3 },
  { src: "/events/2.jpeg", aspect_ratio: 3/4 },
  { src: "/events/4.jpeg", aspect_ratio: 4/3 },
  { src: "/events/7.jpeg", aspect_ratio: 3/4 },
  { src: "/events/13.jpg", aspect_ratio: 3/4 },
  { src: "/events/8.jpeg", aspect_ratio: 4/3 },
  { src: "/events/9.jpeg", aspect_ratio: 16/9 },
  { src: "/events/10.jpg", aspect_ratio: 4/3 },
  { src: "/events/11.jpg", aspect_ratio: 4/3 },
  { src: "/events/3.jpeg", aspect_ratio: 3/4 },
  // { src: "/events/12.jpg", aspect_ratio: 3/4 },
  
  { src: "/events/14.jpg", aspect_ratio: 4/3 },
  { src: "/events/15.jpg", aspect_ratio: 4/3},
  { src: "/events/16.jpg", aspect_ratio: 16/9 },
  { src: "/events/25.jpg", aspect_ratio: 16/9 },
  { src: "/events/17.jpg", aspect_ratio: 4/3 },
  { src: "/events/18.jpg", aspect_ratio: 4/3 },
  { src: "/events/19.jpg", aspect_ratio: 4/3 },
  { src: "/events/20.jpg", aspect_ratio: 16/9 },
  { src: "/events/21.jpg", aspect_ratio: 4/3},
  { src: "/events/22.jpg", aspect_ratio: 4/3 },
  { src: "/events/23.jpg", aspect_ratio: 4/3 },
  { src: "/events/26.jpg", aspect_ratio: 16/9 },
]
  const widths = [ 1000, 1600, 2400 ]
const ratios = [ 2, 4, 6, 8 ]
  return (
    <>
      <section className='showcase bg-top'>
      <Gallery {...{images, widths, ratios}} />
      </section>
    </>
  )
}

export default ShowCase
