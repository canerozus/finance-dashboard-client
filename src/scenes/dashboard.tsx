import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import DashBoardBox from "@/components/dashboardbox";

type Props = {};
const gridTemplateLarge = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"`;

const gridTemplateSmall = `
"a""a""a""a""b""b""b""b""c""c""c""d""d""d""e"
"e""f""f""f""g""g""g""h""h""h""h""i""i""j""j"`;

const Dashboard = (props: Props) => {
  const AboveMediumScreens = useMediaQuery("min-width: 1200px");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        AboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px,1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLarge,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <DashBoardBox gridArea="a"></DashBoardBox>
      <DashBoardBox gridArea="b"></DashBoardBox>
      <DashBoardBox gridArea="c"></DashBoardBox>
      <DashBoardBox gridArea="d"></DashBoardBox>
      <DashBoardBox gridArea="e"></DashBoardBox>
      <DashBoardBox gridArea="f"></DashBoardBox>
      <DashBoardBox gridArea="g"></DashBoardBox>
      <DashBoardBox gridArea="h"></DashBoardBox>
      <DashBoardBox gridArea="i"></DashBoardBox>
      <DashBoardBox gridArea="j"></DashBoardBox>
    </Box>
  );
};

export default Dashboard;
