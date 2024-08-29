"use client";
import React, { ReactNode, useState } from "react";
import "./dropdownMenu.module.css";
import { doesNotThrow } from "assert";
import { log } from "console";
import { useRouter } from "next/navigation";

const alignType = {
  left: 0,
  right: "",
};

const funcs = {
  logout: () => {
    console.log("Log out!");
  },
};

export type MenuType = {
  title?: string;
  icon?: JSX.Element;
  url?: string;
  func?: "logout";
};

interface Props {
  children: ReactNode;
  menu: Array<MenuType>;
  align?: "left" | "right";
  textColor?: string;
  backgrounColor?: string;
}

const DropdownMenu: React.FC<Props> = ({
  children,
  menu,
  align,
  textColor,
  backgrounColor,
}) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const closeHandle = () => {
    setShowMenu(false);
  };

  const menuItemHandle = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      {/* 메뉴를 제외한 전체화면 클릭시 사라짐 */}
      {showMenu && (
        <div
          onClick={closeHandle}
          style={{
            zIndex: 10,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* 상단메뉴 */}
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        style={{ cursor: "pointer" }}
      >
        {children}
        <div style={{ position: "relative" }}>
          {showMenu && (
            <div
              style={{
                position: "absolute",
                left: align ? alignType[align] : "",
                right: 0,
                top: 0,
                backgroundColor: backgrounColor ? backgrounColor : "",
                color: textColor ? textColor : "",
                minWidth: "6rem",
                padding: "4px",
                zIndex: "10",
                boxShadow: "2px 2px 6px rgba(100, 100, .2)",
              }}
            >
              {menu.map((item, index) =>
                item.icon || item.title ? (
                  <div
                    onClick={() => {
                      if (item.url) menuItemHandle(item.url);
                      if (item.func) funcs[item.func]();
                    }}
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                    className=" menu-item"
                  >
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </div>
                ) : (
                  <div key={index} style={{ border: "solid 0.5px " }}></div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
