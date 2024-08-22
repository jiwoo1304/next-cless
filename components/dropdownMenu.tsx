"use client";
import { title } from "process";
import React, { useState } from "react";

interface Props {}

const DropdownMenu: React.FC<Props> = ({}) => {
  const [ShowMenu, setShowMenu] = useState(false);

  if (!ShowMenu) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#331",
        position: "absolute",
        minWidth: "6rem",
        padding: "4px",
      }}
    >
      {menus.map((item, index) => (
        <div key={index} className="flex">
          <div>{item.title}</div>
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;

const menus = [{ title: "menu 1" }, { icon: "menu 2" }];
