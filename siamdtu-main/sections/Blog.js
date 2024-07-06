import BlogCard from "@/components/BlogCard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top prevent-select'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='A Journey into the World of Maths:' />
            <Title title='Where Curiosity Meets Insight.' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
