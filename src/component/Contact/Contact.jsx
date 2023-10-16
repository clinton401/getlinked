import React, {useState} from 'react'
import css from './Contact.module.css';

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import congrats from '../../assets/congratulation.png'
import star2 from "../../assets/sata gra.png";
import star from "../../assets/star (1).png";

import { useNavigate } from "react-router-dom";
const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //   delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren"
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const imgAnimation = {
  hidden: {
    scale: 0.4,
    rotate: 360
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

function Contact() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const backHandler = () => {
    navigate('/')
  }
   const submitHandler = e => {
    e.preventDefault();
     
     setIsClicked(!isClicked)
  }
  console.log(isClicked)
  return (
    <motion.div
      id="contact"
      className={css.contact}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {isClicked ? (
        <motion.div variants={containerVariant} className={css.subs} id="subs">
          <motion.div>
            <img src={congrats} alt="congrats" />
            <h2>Message submitted successfully</h2>
            <button type="submit" onClick={backHandler}>
              <span>Back</span>
            </button>
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
      <motion.div id="unimportant">
        <img src={star2} className={css.star1} />

        <h2>Get in touch</h2>
        <ul>
          <li>
            Contact <br /> Information
          </li>
          <li>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </li>
          <li>Call Us : 07067981819</li>
          <li>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </li>
        </ul>
        <nav aria-label="footer links">
          <a
            href="https://twitter.com/Clinton4011"
            target="_blank"
            className="Btn"
          >
            {/* <FontAwesomeIcon icon={faXTwitter} /> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
            <FaXTwitter />

            <span className="tooltip">@Clinton4011</span>
          </a>
          <a
            href="https://github.com/clinton401"
            target="_blank"
            className="Btn"
          >
            <AiFillGithub />

            <span className="tooltip">@clinton401</span>
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-phillips-316a42250/"
            target="_blank"
            className="Btn"
          >
            <BiLogoLinkedin />

            <span className="tooltip">@clinton</span>
          </a>
        </nav>
      </motion.div>
      <motion.div>
        <img src={star} className={css.star2} />{" "}
        <img src={star} className={css.star4} />
        <motion.form onSubmit={submitHandler}>
          <img src={star2} className={css.star3} />
          <h3>Questions or need assistance?</h3>
          <h3> Let us know about it!</h3>
          <p>Email us below to any question related to our event</p>
          <input
            type="text"
            placeholder="First name"
            required
            pattern="[a-zA-Z]{2,}"
            title="Please enter a valid name with a minimum length of 2 characters."
          />
          <input
            type="phone"
            placeholder="Phone number"
            required
            pattern="^\+?\d{9,15}$"
            title="Please enter a valid phone number with a minimum length of 9, maximum length of 15, and an optional plus sign at the beginning."
          />
          <input
            placeholder="Email"
            required
            type="email"
            id="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address."
          />
          <textarea
            rows="5"
            minLength="3"
            maxLength="500"
            required
            placeholder="Message"
          ></textarea>
          <button type="submit">
            <span>Submit</span>
          </button>
        </motion.form>
        <nav aria-label="footer links" className={css.link2} id="link2">
          <a
            href="https://twitter.com/Clinton4011"
            target="_blank"
            className="Btn"
          >
            {/* <FontAwesomeIcon icon={faXTwitter} /> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
            <FaXTwitter />

            <span className="tooltip">@Clinton4011</span>
          </a>
          <a
            href="https://github.com/clinton401"
            target="_blank"
            className="Btn"
          >
            <AiFillGithub />

            <span className="tooltip">@clinton401</span>
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-phillips-316a42250/"
            target="_blank"
            className="Btn"
          >
            <BiLogoLinkedin />

            <span className="tooltip">@clinton</span>
          </a>
        </nav>
      </motion.div>
    </motion.div>
  );
}

export default Contact
