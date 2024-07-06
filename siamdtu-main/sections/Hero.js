import { home } from "@/assets/data/dummydata"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero prevent-select'>
        <div className='container'>
          <TitleLogo />
          <h1 className='hero-title'>SOCIETY FOR INDUSTRIAL AND APPLIED MATHS</h1>

          <div className='sub-heading'>
            <TitleSm title='FOR THE LOVE OF MATHS AND ALL THINGS TECH' /> <span></span>
          </div>
        </div>
      </section>
      <section className='hero-sec prevent-select'>
        <div className='container'>
        <div className='heading-title'>
            <Title title='Words from Our Faculty Advisor'/>
            <img src="images/facad.jpg" alt="" width={200} height={200}/>
            <p style={{fontStyle: 'italic',}}>"SIAM-DTU has always been one of the leading student organisations among the Tech diaspora of DTU. Devoted to Mathematical research and application along with nurturing the potential of people in technology, it has a unique blend of the right specialisations in the right proportions. As the Faculty Advisor, I take pride in the fact that there are so many students from the department that are a part of SIAM. I believe that under the leadership of its enthusiastic Council, the society will reach new heights in this tenth year of its being."</p>
            <span>~Dr. Nilam</span>
          </div>
          <div className='heading-title'>
            <Title title='About Us' />
            <p>Society for Industrial and Applied Mathematics, is an international organisation dealing with recent mathematical advances. It funds our DTU branch for organising student related activities. It hosts conferences, publishes books and scholarly journals, and engages in lobbying in issues of interest to its members. The focus for the society is applied, computational, and industrial mathematics. Our vision is to advance the application of mathematics and computational science to engineering, industry, science, and society. We wish to promote research that will lead to effective new mathematical and computational methods and techniques for science, engineering, industry, and society.
</p>
          </div>

        </div>
      </section>
      <Brand />

      <div className='text-center prevent-select'>
        <Title title='Latest Articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
