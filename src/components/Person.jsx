import React from "react";
import Button from "./Button";

const Person = ({ img, name, role, dotColor, color, bgColor }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <div className="relative">
          <div className="rounded-xl w-9 h-9">
            <img src={img} alt="" /> 
          </div>
          <span className={`w-3 h-3 bg-${dotColor} border border-r-2 rounded-full absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4`}></span>
        </div>
        <div>
          <h1 className="text-sidebarH1 font-bold">{name}</h1>
          <h3 className="text-searchContact text-sm">{role}</h3>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button icon='question' color={color} bgColor={bgColor} />
        <Button icon='phone' color={color} bgColor={bgColor} />
        <Button icon='dots' color={color} bgColor={bgColor} />
      </div>
    </div>
  );
};

export default Person;
