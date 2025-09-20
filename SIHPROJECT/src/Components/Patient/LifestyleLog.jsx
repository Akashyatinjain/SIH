// src/components/LifestyleLog.jsx
import React from 'react';
import Card from './Card';
import { FaFire } from 'react-icons/fa';

const LifestyleLog = ({ log }) => (
  <Card title="Lifestyle Log" icon={FaFire}>
    <div className="space-y-4">
      {log.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className={`mr-4 mt-1 p-2 rounded-full bg-gray-100 ${item.color}`}>
            <item.icon />
          </div>
          <div>
            <p className="font-semibold text-gray-700">{item.event}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default LifestyleLog;