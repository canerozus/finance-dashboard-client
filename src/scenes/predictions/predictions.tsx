import DashBoardBox from "@/components/dashboardbox";
import FlexBetween from "@/components/flexbetween";
import { useGetKpisQuery } from "@/state/api";
import { useTheme, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  return (
    <DashBoardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="0.3rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: "white",
            bgColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >Show Predicted Revenue for Next Year</Button>
      </FlexBetween>
    </DashBoardBox>
  );
};

export default Predictions;
