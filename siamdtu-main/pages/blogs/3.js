// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
    const post = blogdata.find((temp) => temp.id === 3);
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
              <TitleSm title="'There is no need of invoking God, as long as we have mathematics.' -Stephen Hawking " />
              <p className="desc-p">
                {" "}
                The parallels between the principles of evolution and mathematics are intriguing. Evolution operates on the premise of natural selection, where the fittest adaptation to the environment ensures survival. Similarly, mathematics relies on the belief that the most fitting solution to a mathematical model yields the correct answer.
              </p>
              <p className="desc-p">
              Consider the behavior of vervet monkeys in the face of predators. Instead of instinctively fleeing to protect themselves, these monkeys emit a warning call to alert their peers, even though this act draws attention to the caller, potentially increasing the risk of an attack. Understanding this behavior through the lens of game theory, which explores interactions among individuals competing for limited resources, reveals a delicate balance between risk and reward. Game theory suggests that natural selection would favor monkeys that abstain from forewarning calls, yet the prevalence of such calls in a group provides a survival advantage, encouraging the evolution of this trait.
              </p>
              <p className="desc-p">
              This concept extends beyond vervet monkeys, other animal groups employ game theory to ensure the survival of their species. For instance, vampires share regurgitated blood with group members who have failed to feed at night, preventing starvation and promoting collective survival.
              </p>
              <p className="desc-p">
              Even without delving into the intricacies of evolution, the role of mathematics remains essential. Considering the chronological aspect, discussing the last evolutionary occurrence involves the concept of time, a field fundamentally rooted in mathematics. Highlighting the indispensability of mathematics, one cannot undermine its significance. Neglecting it may lead to unsatisfactory solutions or potential contradictions down the line. The integration of mathematics with evolutionary principles underscores the intricate interplay between scientific understanding and mathematical frameworks, reinforcing the idea that mathematics serves as a fundamental tool in comprehending and explaining the complexities of our world.

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
