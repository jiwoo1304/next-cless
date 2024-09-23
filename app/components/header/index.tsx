"use client";

import { menu } from "@/constants";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderNav from "./headerNav";
import MobileNav from "./mobileNav";
import { UserContext } from "@/utils/userContext";
import DropdownMenu, { MenuType } from "../dropdownMenu";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [selectedPageNum, setSelectedPageNum] = useState<number | undefined>();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const userData = useContext(UserContext);

  const mainColor = "#750314";

  console.log(userData);
  return (
    <header className="relative h-[5rem] border-b bg-[#750314]">
      <div className="mx-auto h-full flex items-center">
        <div className="mx-8 text-3xl font-extrabold">AI</div>
        <div className="w-full">
          <div className="hidden xl:flex justify-center gap-6">
            {menu.map((item, index) => (
              <HeaderNav
                key={index}
                index={index}
                item={item}
                setSelectedPageNum={setSelectedPageNum}
                selectedPageNum={selectedPageNum}
              />
            ))}
          </div>
        </div>
        <div className="mx-8 whitespace-nowrap">
          {userData?.user?.name ? (
            <div>
              <DropdownMenu menu={usermenu} bgColor={mainColor}>
                <div> {userData?.user?.name}</div>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex gap-5 text-xl">
              <div className="font-thin">Sign in</div>
              <div>Sign up</div>
            </div>
          )}
        </div>
        <div
          className="mx-8 xl:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu size={30} />
        </div>
      </div>
      {/* 모바일 메뉴 */}
      {showMobileMenu && (
        <div className="absolute flex flex-col gap-3 xl:hidden bg-black w-full h-full p-12 text-xl">
          {menu.map((item, index) => (
            <MobileNav
              key={index}
              item={item}
              index={index}
              setShowMobileMenu={setShowMobileMenu}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

const usermenu: MenuType[] = [
  { title: "Logout", func: "logout" },
  { title: "Userinfo" },
];
