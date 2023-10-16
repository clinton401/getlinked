import React, {useState} from "react";
import css from "./Register.module.css";
import rimage from "../../assets/registerImg.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import congrats from "../../assets/congratulation.png";
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
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

function Register() {
   const navigate = useNavigate();
   const [isClicked, setIsClicked] = useState(false);
   const backHandler = () => {
     navigate("/");
   };
   const submitHandler = (e) => {
     e.preventDefault();

     setIsClicked(!isClicked);
   };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={css.register}
      id="register"
    >
      {isClicked ? (
        <motion.div variants={containerVariant} className={css.subs} id="subs">
          <motion.div>
            <img src={congrats} alt="congrats" />
            <h2>
              Congratulation <br /> You have successfully Registered
            </h2>
            <p>
              Yes it was easy and you did it! <br />
              check your mail box for next step
            </p>
            <button type="submit" onClick={backHandler}>
              <span>Back</span>
            </button>
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
      <motion.div id="rmage">
        <motion.img src={rimage} alt="register image" />
      </motion.div>
      <form onSubmit={submitHandler}>
        <h2>Register</h2>
        <p>Be part of this movement!</p>
        <h3>CREATE YOUR ACCOUNT</h3>
        <div className={css.inputs} id="inputs">
          <div>
            <label>Team’s Name</label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              required
              pattern="^[a-zA-Z0-9 ]+$"
              title="Please enter a valid name with a minimum length of 2 characters."
            />
          </div>
          <div>
            <label> Phone</label>
            <input
              placeholder="Enter phone number"
              required
              pattern="^\+?\d{9,15}$"
              title="Please enter a valid phone number with a minimum length of 9, maximum length of 15, and an optional plus sign at the beginning."
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="Enter email address"
              required
              type="email"
              id="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address."
            />
          </div>
          <div>
            <label>Project Topic</label>
            <input
              type="text"
              placeholder="Enter group topic"
              required
              pattern="^[a-zA-Z0-9 ]+$"
              title="Please enter a valid topic with a minimum length of 2 characters."
            />
          </div>
          <div>
            <label for="category">Category</label>
            <select name="category" id="category">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <label>Group Size</label>

            <select name="group" id="group">
              <option value="below 10">Below 10</option>
              <option value="Above 10">Above 10</option>
            </select>
          </div>
        </div>
        <em>Please review your registration details before submitting</em>
        <div className={css.checkb}>
          <input type="checkbox" id="check" required />
          <label for="check">Terms and condition is Required!</label>
        </div>
        <button type="submit">
          <span>Register now</span>
        </button>
      </form>
    </motion.div>
  );
}

export default Register;
