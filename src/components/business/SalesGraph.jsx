import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import data from "../../private/data";

const SalesGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            borderRadius: "4px",
            border: "0.5px solid #f4f4f4",
            backgroundColor: "#fff",
          }}
        />
        <Line
          type="monotone"
          dataKey="lastweek"
          stroke="#5E72E4"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="thisweek"
          stroke="#11CDEF"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="otherweek"
          stroke="#172B4D"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
