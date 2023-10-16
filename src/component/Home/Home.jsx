import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import hmcss from "./Home.module.css";
import human from "../../assets/section1-person.png";
import solar from "../../assets/section1-solar.png";
import border from "../../assets/Vector 4.png";
import chain from "../../assets/chain-9365116-7621444.png";
import blinkStar from "../../assets/blinking star.png";
import star from "../../assets/star (1).png";
import bulb from "../../assets/bulb.png";
import shadow from "../../assets/Purple-Lens-Flare-PNG.png";
import idea from "../../assets/the big idea 1.png";
import star2 from "../../assets/sata gra.png";
import arrow from "../../assets/arrow.png";
import human2 from "../../assets/human-img2.png";
import human3 from "../../assets/human-img3.png";
import price from "../../assets/priceImg.png";
import reward from "../../assets/rewardIcons.png";
import sponsor from "../../assets/sponsorsImg.png";
// import vector from "../../assets/Vector.png";
import primage from "../../assets/privacyImg.png";
import faqImg from "../../assets/faqImg.png";
import line1 from "../../assets/Line 3.png";
import line2 from "../../assets/Line 5.png";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiPhoneCall } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const containerVariants = {
  // hidden: {
  //   opacity: 0,
  // },
  // visible: {
  //   opacity: 1,
  //   transition: {
  //     delay: 1.5,
  //     duration: 1.5,
  //   },
  // },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const imgAnimation = {
  hidden: {
    scale: 0.4,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
const liOne = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 200 },
  },
};
const pLeft = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};
const pRight = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      stiffness: 200,
      type: "spring",
    },
  },
};
const headingLeft = {
  hidden: {
    x: -250,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      ease: "easeInOut",
    },
  },
};
const headingRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 200,
    },
  },
};

function Home() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState("");
  const [indexes, setIndexes] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // Function to toggle the FAQ item's open/close state
  const toggleItem = (itemNumber) => {
    switch (itemNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      default:
        break;
    }
  };

  const clickHandler = (index) => {
    setClicked(index);
    setIndexes(index);
  };
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the time remaining
    const calculateTimeRemaining = () => {
      const countdownDate = localStorage.getItem("countdownDate");
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const interval = setInterval(() => {
      const timeRemaining = calculateTimeRemaining();
      setTimeRemaining(timeRemaining);
    }, 1000);

    // Check if a countdown date is stored in local storage
    const storedCountdownDate = localStorage.getItem("countdownDate");
    if (!storedCountdownDate) {
      const currentDate = new Date();
      const countdownDate = new Date(
        currentDate.getTime() + 60 * 24 * 60 * 60 * 1000
      ); // 60 days from now
      localStorage.setItem("countdownDate", countdownDate.getTime());
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={containerVariants} initial="hidden" exit="exit">
      <main id="main">
        <section className={hmcss.section1} id="section1">
          <motion.div
            className={hmcss.section1div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={star} alt="blinking star" className={hmcss.star1} />
            <img src={star} alt="blinking star" className={hmcss.star2} />
            <img src={shadow} alt="blinking star" className={hmcss.shadow} />

            <motion.h1 className={hmcss.h1} id="h1" variants={headingLeft}>
              {/* <img src={bulb} alt="bulb" className={hmcss.bulb} id="bulb"/> */}
              getlinked Tech <br />
              Hackathon <strong>1.0</strong>{" "}
              <span>
                <img src={chain} alt="chain" />
                <img
                  src={blinkStar}
                  alt="blinking star"
                  className={hmcss.blinkingStar}
                />
              </span>
            </motion.h1>
            <motion.p variants={pLeft}>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </motion.p>
            <motion.button
              onClick={() => navigate("register")}
              variants={imgAnimation}
            >
              <span>Register</span>
            </motion.button>

            <div className={hmcss.countdown} id="countdown">
              <h2>
                {timeRemaining.days}
                <span>D</span>
              </h2>
              <h2>
                {timeRemaining.hours}
                <span>H</span>
              </h2>
              <h2>
                {timeRemaining.minutes}
                <span>M</span>
              </h2>
              <h2>
                {timeRemaining.seconds}
                <span>S</span>
              </h2>
            </div>
          </motion.div>
          <motion.div
            id="revo"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p id="igniting">
              Igniting a Revolution in HR Innovation
              <img src={border} alt="border" id="border" />
            </p>

            {/* <div id="hms"> */}
            <img src={human} alt="border" className={hmcss.human} id="human" />
            <motion.img
              src={solar}
              alt="border"
              className={hmcss.solar}
              id="solar"
              variants={imgAnimation}
            />
            {/* </div> */}
          </motion.div>
        </section>
        <section className={hmcss.section2} id="section2 ">
          <motion.div
            className={hmcss.imgHolder}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.img
              src={arrow}
              alt="arrow"
              className={hmcss.arrow}
              variants={imgAnimation}
            />
            <motion.p className={hmcss.ideaP} variants={imgAnimation}>
              The big <br /> idea!
            </motion.p>
            <img src={star2} alt="the big idea" className={hmcss.star3} />
            <motion.img
              src={idea}
              alt="the big idea"
              id="imgs"
              variants={imgAnimation}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={hmcss.intro} id="intro">
              <motion.div>
                <motion.h2 variants={pLeft}>
                  introduction to getlinked <br />{" "}
                  <strong>tech hackathon 1.0</strong>
                </motion.h2>
              </motion.div>
              <img src={star2} alt="the big idea" id="star-idea" />
            </div>

            <motion.p variants={pRight}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.p>
          </motion.div>
        </section>
        <section className={hmcss.section3} id="section3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={star} alt="blinking star" className={hmcss.star1} />
            <img src={star} alt="blinking star" className={hmcss.star33} />
            <motion.h2 variants={headingLeft}>
              Rules and <br />
              <strong>Guidelines</strong>
            </motion.h2>
            <motion.p variants={pRight}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.img
              src={human2}
              alt="human image"
              id="imgs"
              variants={imgAnimation}
            />
          </motion.div>
        </section>
        <section className={hmcss.section4} id="humann">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={star2} alt="blinking star" className={hmcss.star1} />
            <img src={star} alt="blinking star" className={hmcss.star44} />
            <img src={star} alt="blinking star" className={hmcss.star442} />

            <motion.img
              src={human3}
              alt="human image"
              id="imgs"
              variants={imgAnimation}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h2 variants={pLeft}>
              Judging Criteria <br />
              <strong>Key attributes</strong>
            </motion.h2>
            <ul>
              <motion.li variants={liOne}>
                <span>Innovation and Creativity:</span> Evaluate the uniqueness
                and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative
                features.
              </motion.li>
              <motion.li variants={liOne}>
                <span>Functionality:</span> Assess how well the solution works.
                Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and
                robustness of the solution.
              </motion.li>
              <motion.li variants={liOne}>
                <span>Impact and Relevance:</span> Determine the potential
                impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience?
                Judges would assess the potential social, economic, or
                environmental benefits.
              </motion.li>
              <motion.li variants={liOne}>
                <span>Technical Complexity:</span> Evaluate the technical
                sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </motion.li>
              <motion.li variants={liOne}>
                <span>Adherence to Hackathon Rules:</span> Judges will Ensure
                that the team adhered to the rules and guidelines of the
                hackathon, including deadlines, use of specific technologies or
                APIs, and any other competition-specific requirements.
              </motion.li>
            </ul>
            <button onClick={() => navigate("register")}>
              <span>Read More</span>
            </button>
          </motion.div>
        </section>
        <section className={hmcss.faq} id="faq">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 variants={headingLeft}>
              Frequently Asked <br />
              <strong>Questions</strong>
            </motion.h2>

            <motion.p variants={pRight}>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </motion.p>
            <ul id="faqs">
              <li>
                <h6 onClick={() => toggleItem(1)}>
                  Can I work on a project I started before the hackathon ?{" "}
                  <FontAwesomeIcon
                    className={hmcss.icons}
                    icon={!isOpen1 ? faPlus : faMinus}
                    onClick={() => toggleItem(1)}
                  />
                </h6>
                <p className={`nActive ${isOpen1 ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eos inventore doloribus reiciendis, laboriosam
                  tempora!
                </p>
              </li>
              <li>
                <h6 onClick={() => toggleItem(2)}>
                  What happens if I need help during the hackathon ?{" "}
                  <FontAwesomeIcon
                    className={hmcss.icons}
                    icon={!isOpen2 ? faPlus : faMinus}
                    onClick={() => toggleItem(2)}
                  />
                </h6>
                <p className={`nActive ${isOpen2 ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eos inventore doloribus reiciendis, laboriosam
                  tempora!
                </p>
              </li>
              <li>
                <h6 onClick={() => toggleItem(3)}>
                  What happens if I don't have an idea for a project ?
                  <FontAwesomeIcon
                    className={hmcss.icons}
                    icon={!isOpen3 ? faPlus : faMinus}
                    onClick={() => toggleItem(3)}
                  />
                </h6>
                <p className={`nActive ${isOpen3 ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eos inventore doloribus reiciendis, laboriosam
                  tempora!
                </p>
              </li>
              <li>
                <h6 onClick={() => toggleItem(4)}>
                  Can I join a team or do I have to come with one ?{" "}
                  <FontAwesomeIcon
                    className={hmcss.icons}
                    icon={!isOpen4 ? faPlus : faMinus}
                    onClick={() => toggleItem(4)}
                  />
                </h6>
                <p className={`nActive ${isOpen4 ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eos inventore doloribus reiciendis, laboriosam
                  tempora!
                </p>
              </li>
              <li>
                <h6 onClick={() => toggleItem(5)}>
                  What happens after the hackathon ends ?{" "}
                  <FontAwesomeIcon
                    className={hmcss.icons}
                    icon={!isOpen5 ? faPlus : faMinus}
                    onClick={() => toggleItem(5)}
                  />
                </h6>
                <p className={`nActive ${isOpen5 ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eos inventore doloribus reiciendis, laboriosam
                  tempora!
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.img
              src={faqImg}
              alt="faq image"
              id="imgs"
              variants={imgAnimation}
            />
          </motion.div>
        </section>
        <motion.section
          className={hmcss.timeline}
          id="timeline"
          initial="hidden"
          transition={{ staggerChildren: 0.1 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={pLeft} >
            Timeline
          </motion.h2>
          <motion.h6 variants={pRight} >
            Here is the breakdown of the time we anticipate <br /> using for the
            upcoming event.
          </motion.h6>
          <motion.ul className={hmcss.gridl}>
            <motion.li variants={liOne}>
              <div className={hmcss.second} id="second">
                <h3>Hackathon Announcement</h3>
                <p id="para">
                  The getlinked tech hackathon 1.0 is formally announced <br />{" "}
                  to the general public and teams begin to get ready to register
                </p>
              </div>
              <div classname={hmcss.first}>
                <img src={line2} alt="line 1" />
                <h4 id="h4">1</h4>
              </div>
              <div className={hmcss.third}>
                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <h3>November 18, 2023</h3>
              </div>
              <div>
                <img src={line2} alt="line2" />
                <h4>2</h4>
              </div>
              <div>
                <h3>Teams Registration begins</h3>
                <p>
                  Interested teams can now show their interest in the <br />{" "}
                  getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <h3>Teams Registration ends</h3>
                <p id="para">
                  Interested Participants are no longer Allowed to <br />{" "}
                  register
                </p>
              </div>
              <div>
                <img src={line2} alt="line 2" />
                <h4>3</h4>
              </div>
              <div>
                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <h3>November 18, 2023</h3>
              </div>
              <div>
                <img src={line2} alt="line 2" />
                <h4>4</h4>
              </div>
              <div>
                <h3>Announcement of the accepted teams and ideas</h3>
                <p>
                  All teams whom idea has been accepted into getlinked tech{" "}
                  <br />
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                <p id="para">
                  Accepted teams can now proceed to build their <br /> ground
                  breaking skill driven solutions
                </p>
              </div>
              <div>
                <img src={line2} alt="line 2" />
                <h4>5</h4>
              </div>
              <div>
                {" "}
                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                {" "}
                <h3>November 18, 2023</h3>
              </div>
              <div>
                <img src={line2} alt="line 2" />
                <h4>6</h4>
              </div>
              <div>
                <h3>Demo Day</h3>
                <p>
                  Teams get the opportunity to pitch their projects to judges.{" "}
                  <br /> The winner of the hackathon will also be announced on
                  this day
                </p>
              </div>
            </motion.li>
          </motion.ul>
          <ul className={hmcss.gridl2}>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line 1" />
                <h4>1</h4>
              </div>
              <div>
                <h3>Hackathon Announcement</h3>
                <p id="param">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line2" />
                <h4>2</h4>
              </div>
              <div>
                <h3>November 18, 2023</h3>

                <p id="param">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
                <h3>Teams Registration begins</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line 2" />
                <h4>3</h4>
              </div>
              <div>
                <h3>Teams Registration ends</h3>
                <p id="param">
                  Interested Participants are no longer Allowed to register
                </p>
                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line 2" />
                <h4>4</h4>
              </div>
              <div>
                <h3>November 18, 2023</h3>

                <p id="param">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
                <h3>Announcement of the accepted teams and ideas</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line 2" />
                <h4>5</h4>
              </div>
              <div>
                <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                <p id="param">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>

                <h3>November 18, 2023</h3>
              </div>
            </motion.li>
            <motion.li variants={liOne}>
              <div>
                <img src={line2} alt="line 2" />
                <h4>6</h4>
              </div>

              <div>
                <h3>November 18, 2023</h3>
                <p id="param">
                  Teams get the opportunity to pitch their projects to judges.{" "}
                  <br /> The winner of the hackathon will also be announced on
                  this day
                </p>
                <h3>Demo Day</h3>
              </div>
            </motion.li>
          </ul>
        </motion.section>
        <section className={hmcss.rewards}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={hmcss.rws} id="rws">
              <motion.h2 variants={pLeft}>
                Prizes and <br />
                <strong>Rewards</strong>
              </motion.h2>
              <motion.p variants={pRight}>
                Highlight of the prizes or rewards for winners and for
                participants.
              </motion.p>
            </div>
            <motion.img src={price} alt="price image" variants={imgAnimation} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="rws2" id="rws2">
              <motion.h2 variants={pLeft}>
                Prizes and <br />
                <strong>Rewards</strong>
              </motion.h2>
              <motion.p variants={pRight}>
                Highlight of the prizes or rewards for winners and for
                participants.
              </motion.p>
            </div>
            <motion.img
              src={reward}
              alt="price image"
              variants={imgAnimation}
            />
          </motion.div>
        </section>
        <motion.section
          className={hmcss.sponsors}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 variants={pLeft}>Partners and Sponsors</motion.h2>
          <motion.p variants={liOne}>
            Getlinked Hackathon 1.0 is honored to have the following major{" "}
            <br />
            companies as its partners and sponsors
          </motion.p>
          <motion.img
            src={sponsor}
            alt="sponsors image"
            variants={imgAnimation}
          />
        </motion.section>
        <section className={hmcss.privacy} id="privacy">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 variants={headingLeft}>
              Privacy Policy and <br /> <strong>Terms</strong>
            </motion.h2>
            <motion.h6 variants={pLeft}>
              Last updated on September 12, 2023
            </motion.h6>
            <motion.p variants={pRight}>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </motion.p>
            <motion.div
              className={hmcss.minipri}
              id="minipri"
              variants={imgAnimation}
            >
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h3>Licensing Policy</h3>
              <h4>Here are terms of our Standard License:</h4>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className={hmcss.checkss}
                    icon={faCircleCheck}
                    style={{ color: "#2de100" }}
                  />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon
                    className={hmcss.checkss}
                    icon={faCircleCheck}
                    style={{ color: "#2de100" }}
                  />
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </li>
              </ul>
              <div>
                <button onClick={() => navigate("register")}>
                  <span>Read More</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={hmcss.primage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* <img src={vector} alt='vector' /> */}
            <motion.img src={primage} alt="vector" variants={imgAnimation} />
          </motion.div>
        </section>
      </main>
      <footer id="footer">
        <div className={hmcss.fdiv1}>
          <div>
            <NavLink to="/">
              get<span>linked</span>
            </NavLink>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <h5>
            Terms of Use <strong></strong> Privacy Policy
          </h5>
        </div>
        <div>
          <ul>
            <h3>Useful Links</h3>
            <li>
              <NavLink activeclassname="active" to="/tt">
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/about">
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/service/inner">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
          <ul>
            <h3>Contact Us</h3>
            <li>
              <a href="tel:+23467981819">
                <BiPhoneCall /> <strong>+234-906-412-7319</strong>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/gwLdUkkomW9wVB9G9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot />{" "}
                <strong>
                  27,Alara Street <br /> Yaba 100012
                  <br /> Lagos
                </strong>
              </a>
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
        </div>
        <h6>All rights reserved. © getlinked Ltd.</h6>
      </footer>
    </motion.div>
  );
}

export default Home;
