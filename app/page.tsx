import DropdownMenu from "@/components/dropdownMenu";
import Button from "../components/page";
import { JiButton } from "@l0ylz/l0ylz-next-ui-kit";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center w-full items-center h-screen">
        <div style={{ border: "solid 1px red" }}>
          <JiButton paddingX="12px" bgColor="dark">
            click
          </JiButton>{" "}
          <div>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
