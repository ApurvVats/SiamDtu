import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import {AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container prevent-select'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='SIAM' caption='DTU' className='logobg' />
            </div>
            <ul>
              <h3>SIAM-DTU</h3>
              <li>
                <Link href='/alumni'>Alumni</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>LOCATION</h3>
              <div className="contact">
        <BiCurrentLocation/>
        <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9555529345544!2d77.1154390744407!3d28.750743975600294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01276613c4cf%3A0x3c4c8de2f6cdf15b!2sSIAM%20DTU!5e0!3m2!1sen!2sin!4v1693151954476!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/dtusiam/' target="__blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/dtu_siam/?hl=en' target="__blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/dtu-siam/' target="__blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <div className='legal connect py'> */}
            <div className='text'>
              <span>© 2023 SIAM-DTU. ALL RIGHTS RESERVED.</span>
            </div>
          {/* </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
