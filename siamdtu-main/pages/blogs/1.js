// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
    const post = blogdata.find((temp) => temp.id === 1);
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
                In the realm of modern security and communication, cryptography
                stands as a pivotal player, shaping the landscape of computer
                science and cryptology. Abstract algebra, with its complicated
                structures and principles, is often the bedrock supporting the
                complexity of contemporary encryption algorithms.
              </p>
              <p className="desc-p">
                Cryptography, defined as the art of "writing in secret or cipher
                codes," functions as a technique to secure communication by
                encoding messages or data. Through the application of intricate
                mathematical algorithms, this process ensures that only the
                intended recipient can decipher the information, rendering it
                incomprehensible to unauthorized parties. The overarching goals
                of cryptography encompass confidentiality, integrity, and
                availability:
                <br />
                <br />
                Confidentiality: Safeguarding the content of a message from
                unauthorized access.
                <br />
                Integrity: Ensuring the authenticity of a message, confirming
                the true originator.
                <br />
                Availability: Guaranteeing that the intended recipient can
                access the message when required.
                <br />
              </p>
              <p className="desc-p">
                Abstract algebra emerges as a key player in the formulation of
                cryptographic algorithms, furnishing a mathematical foundation
                for critical aspects such as the development of public-key
                systems and the assessment of encryption algorithm security.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="An example: " />

              <p className="desc-p">
                {" "}
                Consider the following example of a cryptographic system,
                suppose Siri wishes to securely send a message to Alexa.
                Utilizing a system grounded in the modular multiplicative
                inverse and two secret prime numbers, p and q, the encryption
                and decryption keys are computed as follows:
              </p>
              <p className="desc-p">
                def encrypt(plaintext, key):<br /> &ensp; ciphertext = [ord(char)**key for
                char in plaintext]<br />&ensp; return ciphertext<br /> def decrypt(ciphertext,
                key):<br /> &ensp; key = mod_inverse(key)<br />&ensp;  plaintext = [chr(char**key) for
                char in ciphertext] <br />&ensp;   return ''.join(plaintext)
              </p>
              <p className="desc-p">
              In this system, the ord function converts characters to their ASCII values. Encryption involves raising each character's ASCII value to the power of the key, while decryption employs the modular multiplicative inverse of the key.
              </p>
              <p className="desc-p">
              Beyond basic encryption and decryption techniques, cryptography encompasses advanced concepts like digital signatures, secure key exchange, and cryptographic hash functions. These sophisticated methods ensure the integrity, authenticity, and confidentiality of digital data and communications.
              </p>
              <p className="desc-p">
              So we see that cryptography stands as a linchpin in upholding the security and privacy of digital communication and data. By grasping the fundamentals of cryptography and its intricate ties to abstract algebra, we gain a deeper appreciation for the complexity and significance of this field. As technology progresses, prioritizing the development of robust cryptographic systems becomes essential to safeguarding digital assets and ensuring secure communication in an ever-evolving digital landscape.
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
