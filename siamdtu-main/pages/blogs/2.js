// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
    const post = blogdata.find((temp) => temp.id === 2);
  return (
    <>
      <section className="post-details bg-top prevent-select">
         <div className="container">
          <div className="heading-title">
            <TitleSm title={post.date} /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post.titlefull} />
              <p className="desc-p">
                {" "}
                Geometry and fractals are fascinating mathematical subjects that deal with abstract and complex mathematical concepts. These subjects have found numerous applications in various fields, such as computer graphics, number theory, and chaos theory. In this blog, we will delve into the intricate world of geometry and fractals, exploring their fundamental principles and delving into their fascinating connections to complex analysis.
              </p>
              <p className="desc-p">
              Geometry is a branch of mathematics that deals with the properties of space and the relationships between geometric figures. The two most fundamental principles of geometry are incidence and order. Incidence refers to the concept that any two distinct points determine a unique line. Order, on the other hand, is a concept that relates to the way in which points, lines, and planes can be arranged in a consistent manner.
              </p>
              <p className="desc-p">
              The history of geometry is rich and diverse, with countless contributions made by scholars from various cultures and time periods. One of the most famous geometrical texts is Euclid's "Elements," a comprehensive treatise on geometry that has been studied and appreciated for centuries.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Interesting world of Fractals" />

              <p className="desc-p">
                {" "}
                Fractals are a type of mathematical object that displays self-similarity at various scales. They were first studied in the early 20th century by the British mathematician Arthur Cayley, who introduced the concept of a "self-affine fractal" in his work. However, it was not until the 1970s and 1980s that fractals began to attract significant attention in the field of mathematics, largely due to the pioneering work of mathematicians such as Benoît Mandelbrot and Julia Set.
              </p>
              <p className="desc-p">
              Fractals have provided valuable insights into a wide range of mathematical problems and concepts. For example, fractals have been used to develop rigorous mathematical models for the behavior of dynamical systems, such as those found in chaos theory. These models have then been employed to analyze complex systems in various fields, such as meteorology, finance, and engineering.
              </p>
              <p className="desc-p">
              Complex analysis is a branch of mathematics that deals with complex numbers and the associated mathematical structures, such as functions and complex integration. The study of complex analysis has provided valuable tools for analyzing geometric objects and fractals, offering new perspectives and insights into these intricate mathematical concepts.
              </p>
              <p className="desc-p">
              For instance, the concept of analytic continuation, which allows the analytic extension of a function to a larger domain, has been used to analyze fractals from a complex analytic perspective. This approach has led to the development of various powerful techniques for understanding the complex behavior of fractals and the relationships between different fractal objects.
              </p>
              <p className="desc-p">
              In conclusion, geometry and fractals are captivating and profoundly complex mathematical subjects that have played a significant role in the development of modern mathematics. By exploring the fascinating world of geometry and fractals and delving into their intricate connections to complex analysis, we can better appreciate the remarkable achievements and ongoing advancements of this enigmatic field of study.
              </p>
            </div>
          </div>
          <div className="cards">
                <span >Written By: </span>
                  <div className='card'>
                  
                    <div className='image'>
                      <div className='img'>
                        <img src={post.profile} alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>{post.author}</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
