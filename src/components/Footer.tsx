'use client'

import React, { useState } from "react";
import Contact from "./Contact";
import { ContactMailIcon } from "./Icons";

const Footer: React.FunctionComponent<any> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="bg-blue-500 w-full flex justify-center items-center">
      {modalOpen && (
        <div className="z-8 fixed inset-0 flex justify-center items-center">
          <div
            className="z-5 fixed inset-0 bg-gray-800 bg-opacity-50"
            onClick={() => setModalOpen(false)}
          />
          <div className="z-10 bg-white rounded-lg p-8 max-w-xl mx-auto animation-fade-in">
            <div className="text-4xl font-semibold mb-6 text-center">
              Thanks for taking the time to reach out. How can I help you today?
            </div>
            <div className="text-lg font-light mb-12 text-center">
              Interested in working together? We should queue up a chat. I’ll buy the coffee. I’m
              always open to discussing project or partnership opportunities.
            </div>
            <Contact />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="bg-blue-900 w-11/12 max-w-3xl rounded-lg p-8 text-white relative bottom-24">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="text-4xl font-semibold mb-4">THANKS!</div>
            <div>Want to chat about something?</div>
            <div className="flex justify-center mt-4">
              <button
                className="w-72 h-12 mt-4 bg-blue-500 text-white rounded-lg text-xl cursor-pointer flex justify-center items-center border-none"
                onClick={() => setModalOpen(true)}>
                <div className="mr-2">
                  <ContactMailIcon />
                </div>
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-30 mt-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/minjae-lee-08391a101/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="fill-current text-white">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/plusbeauxjours/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="fill-current text-white">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="font-thin text-sm text-white mt-24">
            Handcrafted by plusbeauxjours © twentytwenty
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;