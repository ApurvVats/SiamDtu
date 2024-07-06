import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Alumni = () => {
  return (
    <>
      <section className='agency bg-top prevent-select'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='OUR ALUMNI' /> <br />
            <br />
            <Title title='Excelling in Every Field!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Our placement records speak for themselves!' />
              <p className='desc-p'>SIAM-DTU proudly stands as a beacon of excellence, showcasing unparalleled placement records that epitomize our commitment to fostering industry-ready professionals. Our graduates consistently secure coveted positions in leading corporations, testament to the comprehensive education and skill development imparted at our institution. With a stellar placement rate, SIAM-DTU continues to be the preferred choice for students aspiring to embark on successful and rewarding careers, solidifying our reputation as a premier institution for transformative education and career advancement.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10</h1>
                  <h3>Years of Society</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>30+</h1>
                  <h3>Placed Alumnis</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Pursuing Research</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          
        </div>
      </section>

      {/* <Brand /> */}
      <Testimonial />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Alumni
