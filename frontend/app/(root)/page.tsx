import React from "react";
import Ball from "../../components/ball";
import CountText from "../../components/countText";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-[100px]">
      <Ball />
      <CountText />
    </div>
  );
};

export default page;
