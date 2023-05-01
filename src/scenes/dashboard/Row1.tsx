import DashBoardBox from "@/components/dashboardbox";


type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashBoardBox gridArea="a"></DashBoardBox>
      <DashBoardBox gridArea="b"></DashBoardBox>
      <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  );
};

export default Row1;
