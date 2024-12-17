import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, Box, Heading } from "@radix-ui/themes";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export function Overview() {
  return (
    <Card
      className="w-[40%]"
      style={{
        backgroundColor: "#000000", // Svart bakgrund
        color: "#FFFFFF", // Vit text
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Box p="3">
        <Heading as="h2" size="2" style={{ color: "#FFFFFF" }}>
          Overview
        </Heading>
        <p style={{ color: "#CCCCCC" }}>Monthly sales data</p>
      </Box>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          {/* X-Axis */}
          <XAxis
            dataKey="name"
            stroke="#FFFFFF" // Vit text för axlar
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          {/* Y-Axis */}
          <YAxis
            stroke="#FFFFFF" // Vit text för axlar
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          {/* Bar */}
          <Bar
            dataKey="total"
            fill="#FFFFFF" // Vit text för axlar
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
