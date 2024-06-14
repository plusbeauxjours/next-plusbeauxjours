"use client";

import React from "react";

interface IProp {
  list: IColor[];
  children: React.ReactNode;
}

interface IColor {
  colorHex: string;
  textColorHex: string;
}

const AboutColors: React.FunctionComponent<IProp> = ({ list, children }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <p className="text-4xl font-semibold mb-2.5">About Colors</p>
      {children}
      <div className="flex flex-row mt-8 flex-wrap justify-center">
        {list.map((item: IColor) => (
          <div
            key={item.colorHex}
            className="relative flex justify-center items-center w-48 h-48 m-2"
            style={{ backgroundColor: item.colorHex }}>
            <p className="absolute text-center font-light" style={{ color: item.textColorHex }}>
              {item.colorHex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutColors;
