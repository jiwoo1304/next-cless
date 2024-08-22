import React, { ReactNode } from "react";
import { colorSet } from "../../components/page";
import OldButton from "../../components/oldButton";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div className=" m-8">
      <OldButton bgColor="main" padX="xl" padY="lg">
        CLICK
      </OldButton>
    </div>
  );
};

export default Page;
