import React from "react";

interface IProp {
  title: string;
  text: string;
}

const TextBox: React.FunctionComponent<IProp> = ({ title, text }) => (
  <div className="flex flex-col text-center justify-center items-center mt-24">
    <p className="text-2xl font-semibold mb-6">{title}</p>
    <p className="max-w-4xl">{text}</p>
  </div>
);

export default TextBox;
