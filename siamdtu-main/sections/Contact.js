import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top prevent-select'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='right w-70'>
              <TitleSm title='Become a Member of Our Family' />
              <p className='desc-p'>Fill out the form below to get an interview scheduled.</p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Your roll number</span>
                    <input type='text' />
                  </div>
  
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOURSELF</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
