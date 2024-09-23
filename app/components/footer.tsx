"use client";
import { menu } from "@/constants";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  type MenuItem = {
    title: string;
    url: string;
  };

  const array: MenuItem[] = [
    { title: "Modal", url: "/content/modal" },
    { title: "Research", url: "/content/research" },
    { title: "Innovation", url: "/content/innovation" },
    { title: "Admissions + Aid", url: "/content/admissions-aid" },
    { title: "Campus", url: "/content/campus" },
    { title: "Life", url: "/content/life" },
    { title: "News", url: "/content/news" },
    { title: "Alumni", url: "/content/alumni" },
    { title: "About", url: "/content/about" },
    { title: "Tongle", url: "/content/tongle" },
  ];

  const block: MenuItem[][] = [];

  function loof({ rowSize }: { rowSize: number }) {
    for (let i = 0; i < array.length; i += rowSize) {
      const items: MenuItem[] = [];
      for (let j = 0; j < rowSize; j += 1) {
        items.push(array[i + j]);
      }
      block.push(items);
    }
  }

  loof({ rowSize: 3 });

  return (
    <footer className="flex items-start justify-center gap-8 bg-white text-slate-800 p-8">
      <div className="">
        <div className="text-3xl font-extrabold">AI</div>
      </div>
      <div>지우코딩</div>
      {block.map((item, index) => (
        <div key={index} className="border-l px-3">
          {item.map(
            (subItem, index) =>
              subItem && (
                <div key={index}>
                  <Link href={subItem.url}>{subItem.title}</Link>
                </div>
              )
          )}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
