import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

import {} from './Animate'

export default function HoverMenu() {
  let line1 = useRef(null)

  return (
    <div className="home-menu">
      <ul>
        <li>
          <Link ref={(el) => (line1 = el)} to="/about-us">
            <span className="menu__item-text">
              <span className="menu__item-textinner">About Us</span>
            </span>
            <span className="menu__item-sub">Learn about our history</span>
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div
                  className="hover-reveal__img"
                  style={{ backgroundImage: image1 }}
                ></div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link ref={(el) => (line1 = el)} to="/gallery">
            <span className="menu__item-text">
              <span className="menu__item-textinner">Gallery</span>
            </span>
            <span className="menu__item-sub">
              See what we've served in the past
            </span>
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div
                  className="hover-reveal__img"
                  style={{ backgroundImage: image2 }}
                ></div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link ref={(el) => (line1 = el)} to="/contact-us">
            <span className="menu__item-text">
              <span className="menu__item-textinner">Contact Us</span>
            </span>
            <span className="menu__item-sub">Reach out for a chat</span>
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div
                  className="hover-reveal__img"
                  style={{ backgroundImage: image3 }}
                ></div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
