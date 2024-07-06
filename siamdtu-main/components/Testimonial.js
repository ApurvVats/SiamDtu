import React from "react"
import { TitleSm, Title } from "./common/Title"
import { testimonial } from "@/assets/data/dummydata"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='next' onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='prev' onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  )
}

const Testimonial = () => {
  const settings = {
    rows: 2,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <section className='testimonial prevent-select'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Alumnis and Their Prestigious Positions' />
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {testimonial.map((user) => (
                <div className="cards">
                  <div className='card'>
                    <div className='image'>
                      <div className='img'>
                        <img src={user.cover} alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>{user.name}</h3>
                        <span>{user.review}</span>
                      </div>
                      <div className='img'>
                        <img src={user.company} alt='' />
                    </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
