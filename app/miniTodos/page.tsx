"use client";
import React, { useState } from "react";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const [inputField, setInputField] = useState<string | undefined>();
  return (
    <div>
      <input
        onChange={(e) => {
          setInputField(e.currentTarget.value);
        }}
        value={inputField}
        type="text"
        className="text-gray-500"
      />
    </div>
  );
};

export default Page;
