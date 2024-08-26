import DropdownMenu from "@/components/dropdownMenu";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-white text-zinc-800">
        <div className="flex gap-6">
          {headerNav.map((item, index) => (
            <DropdownMenu menu={menus} key={index}>
              <div style={{ paddingInline: "10px" }}>{item}</div>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
}

const headerNav = ["User"];

const menus = [
  { title: "menu 1", icon: <div>.</div> },
  {},
  { title: "menu 2" },
];
