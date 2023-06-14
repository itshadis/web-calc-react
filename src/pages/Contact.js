import React from "react";
import PageLayout from "../Layout/PageLayout";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BiMailSend } from "react-icons/bi"
const Contact = () => {
  return (
    <PageLayout>
      <div className="h-screen flex justify-center w-[90%] mt-6 mx-auto">
        <div className="w-[600px]">
          <div className="border border-black p-6 rounded-3xl">
            <ul className="flex flex-col gap-6">
            <a href="https://github.com/itshadis" target="_blank" rel="noreferrer">
              <li className=" flex items-center gap-4">
                <FaGithub className="hover:fill-slate-800" size={"36px"} />
                <span className="hover:scale-105">GitHub</span>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/itshadis/" target="_blank" rel="noreferrer">
              <li className=" flex items-center gap-4">
                <FaLinkedin className="hover:fill-slate-800" size={"36px"} />
                <span className="hover:scale-105">LinkedIn</span>
              </li>
            </a>
            <a href="mailto:hadis1098@gmail.com">
              <li className=" flex items-center gap-4" target="_blank" rel="noreferrer">
                <BiMailSend className="hover:fill-slate-800" size={"36px"} />
                <span className="hover:scale-105">hadis1098@gmail.com</span>
              </li>
            </a>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;