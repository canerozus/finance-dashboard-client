import DashBoardBox from "@/components/dashboardbox";
import { useGetKpisQuery } from "@/state/api";
import { useEffect } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
type Props = {};

const Row1 = (props: Props) => {

  const { data, isLoading, isError, error } = useGetKpisQuery();
  console.log("data: ", data);

  return (
    <>
      <DashBoardBox gridArea="a"></DashBoardBox>
      <DashBoardBox gridArea="b"></DashBoardBox>
      <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  );
};

export default Row1;
