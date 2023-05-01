import DashBoardBox from "@/components/dashboardbox";
import React from "react";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashBoardBox gridArea="d"></DashBoardBox>
      <DashBoardBox gridArea="e"></DashBoardBox>
      <DashBoardBox gridArea="f"></DashBoardBox>
    </>
  );
};

export default Row2;
