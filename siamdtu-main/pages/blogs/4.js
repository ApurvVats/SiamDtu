// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
    const post = blogdata.find((temp) => temp.id === 4);
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
                Let's start our adventure by immersing ourselves in the beauty of pure mathematics. Often described as the language of the universe, mathematics is more than just a collection of formulas and theorems – it is an art form. From the elegance of prime numbers to the mesmerizing patterns in fractals, pure mathematics captivates us with its aesthetic appeal and the sheer elegance of its structures.
              </p>
              <p className="desc-p">
              No mathematical journey is complete without encountering unsolved puzzles and tantalizing conjectures. Dive into the enigmatic world of problems that have eluded mathematicians for centuries, such as the Riemann Hypothesis, the Collatz Conjecture, and the twin prime conjecture. Explore the excitement of contemporary researchers as they strive to unlock the answers to these mathematical riddles.
              </p>
              <p className="desc-p">
              Contrary to popular belief, mathematics isn't confined to abstract concepts and theoretical musings. Explore the fascinating ways in which mathematics intersects with the real world. From cryptography and data science to game theory and optimization, mathematics plays a pivotal role in shaping the technology and innovations that drive our modern society.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="The Frontiers of Research" />

              <p className="desc-p">
                {" "}
                Now, let's step into the laboratories of mathematical research. Discover the cutting-edge projects and breakthroughs that are pushing the boundaries of our understanding. Whether it's exploring the depths of chaos theory, deciphering the complexities of machine learning algorithms, or navigating the uncharted territories of pure abstraction, mathematicians are at the forefront of unlocking the secrets of the universe.
              </p>
              <p className="desc-p">
              No exploration of mathematics is complete without meeting the brilliant minds behind the equations. In this section, we'll spotlight renowned mathematicians who have left an indelible mark on the field. Learn about their lives, contributions, and the enduring impact of their work on the world of mathematics.
              </p>
              <p className="desc-p">
              As we conclude our mathematical odyssey, let's celebrate the ever-evolving nature of this captivating discipline. Mathematics is not a static entity but a living, breathing force that continues to inspire awe and wonder. Whether you're an avid mathematician or someone intrigued by the beauty of numbers, this journey through the realms of mathematics and research is a testament to the limitless possibilities that await those who dare to explore the infinite depths of the mathematical universe. So, dear reader, may your curiosity be forever piqued, and may you continue to unravel the mathematical mysteries that beckon on the horizon. Happy exploring! 
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
