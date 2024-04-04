import React from "react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../Constants/Assets/ProfilePhoto.jpeg";
const About = () => {
  return (
    <div className="w-[60%] relative top-[120px] mx-auto  bg-white  border border-white shadow-xl rounded-2xl mt-8 mb-5 ">
      <div className="flex justify-between">
        <div className="">
          <p className="text-5xl ml-2 mt-16 font-semibold">Sai Rohith Reddy</p>
          <p className="text-xl ml-2 mt-4">React Js Devloper</p>
          <p className="text-lg m-4">
            Hey there! I'm a React.js enthusiast who loves turning ideas into
            sleek and user-friendly websites. With a passion for clean code and
            a knack for collaboration, I bring simplicity and a dash of
            creativity to every project. Let's code and create some awesome web
            experiences together! 🚀. I am from Tirupati, AndhraPradesh.
            Currently working in tcs as Associate System Engineer.
          </p>
        </div>
        <img
          src={ProfilePhoto}
          className="w-[250px] h-[250px] ml-3 mr-3 mt-16 rounded-xl"
        />
      </div>
      <div className="text-lg ml-4">Please feel free to contact me.</div>
      <div className="text-xl m-5">
        <div>
          LinkedIn :{" "}
          <Link
            className="text-blue-400"
            to="https://www.linkedin.com/in/sairohith1998/"
            target="_blank"
          >
            Sairohith
          </Link>
        </div>
        <div>Phone : 9108385673 </div>
        <div>Gmail : sairohithtanguturi0905@gmail.com</div>
      </div>
    </div>
  );
};

export default About;
