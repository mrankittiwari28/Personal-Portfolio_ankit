import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin,AiFillCode } from "react-icons/ai";
const ContactSection = () => {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me:)
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:kshitijawasthi51@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              kshitijawasthi51@gmail.com
            </a>
            <a
              href="tel:+919336949467"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              +91 9336949467
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://github.com/Kshitijawasthi">
              <AiFillGithub className="text-white text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/kshitij-awasthi-131b77204/">
              <AiFillLinkedin className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/shtjjz_/">
              <AiFillInstagram className="text-white text-2xl" />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/kshitijawasthi51">
              <AiFillCode className="text-white text-2xl" />
            </a>
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            OR
          </h2>
        </div>
        <div>
          <form
            action="https://getform.io/f/87e18040-0ce3-4e4c-b773-c7e393506d8f"
            // enctype="multipart/form-data"
            method="POST"
            className="flex flex-col p-3"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <div>
              <label htmlFor="img" className="text-white text-xl gradient-text">
                Send Resume :)
              </label>
              <input
                type="file"
                name="file"
                id="img"
                accept="file"
                className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              />
            </div>
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
              required
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg"
            >
              Send Message yupp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
