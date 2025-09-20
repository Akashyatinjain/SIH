// src/components/PrakritiSnapshot.jsx
import React from 'react';
import Card from './Card';
import { FaBalanceScale } from 'react-icons/fa';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, Legend, Radar } from 'recharts';

const PrakritiSnapshot = ({ prakriti, vikriti }) => {
  const data = [
    { subject: 'Vata', A: prakriti.vata, B: vikriti.vata, fullMark: 100 },
    { subject: 'Pitta', A: prakriti.pitta, B: vikriti.pitta, fullMark: 100 },
    { subject: 'Kapha', A: prakriti.kapha, B: vikriti.kapha, fullMark: 100 },
  ];
  return (
    <Card title="Dosha Balance" icon={FaBalanceScale}>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Tooltip />
            <Legend />
            <Radar name="Prakriti (Constitution)" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Vikriti (Imbalance)" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
    </Card>
  );
};

export default PrakritiSnapshot;