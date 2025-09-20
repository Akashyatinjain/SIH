// src/components/WeightTrend.jsx
import React from 'react';
import Card from './Card';
import { FaChartLine } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const WeightTrend = ({ data }) => (
  <Card title="Weight Trend" icon={FaChartLine}>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#34d399" strokeWidth={3} name="Weight (kg)"/>
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default WeightTrend;