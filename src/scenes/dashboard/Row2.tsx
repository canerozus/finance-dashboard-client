import BoxHeader from "@/components/boxheader";
import DashBoardBox from "@/components/dashboardbox";
import { useGetProductsQuery } from "@/state/api";
import React, { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

const Row2 = (props: Props) => {
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData  } = useGetProductsQuery();
  const { palette } = useTheme();

const operationalExpenses = useMemo(()=> {
  return (
    operationalData &&
    operationalData[0].monthlyData.map(({ month, operationalExpenses,nonOperationalExpenses }) => {
      return {
        name: month.substring(0, 3),
        "Operational Expenses": operationalExpenses,
        "Non Operational Expenses": nonOperationalExpenses
      };
    })
  );
},[operationalData])

  return (
    <>
      <DashBoardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBoardBox>

      <DashBoardBox gridArea="e"></DashBoardBox>
      <DashBoardBox gridArea="f"></DashBoardBox>
    </>
  );
};

export default Row2;
