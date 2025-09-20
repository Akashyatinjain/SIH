// src/components/ActiveDietPlan.jsx
import React, { useState } from 'react';
import Card from './Card';
import { FaChevronDown, FaChevronUp, FaUtensils } from 'react-icons/fa';

const DietPlanCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <p className="font-bold text-gray-500">{item.meal}</p>
          <p className="text-lg font-semibold text-gray-800">{item.dish}</p>
        </div>
        <button className="text-gray-500">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="border-t p-4">
          <p className="font-semibold text-gray-600">Recipe:</p>
          <p className="text-gray-500 mb-3">{item.recipe}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm bg-gray-50 p-2 rounded-md">
            <span><strong>Cals:</strong> {item.analysis.cals}</span>
            <span><strong>Rasa:</strong> {item.analysis.rasa}</span>
            <span><strong>Guna:</strong> {item.analysis.guna}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActiveDietPlan = ({ plan }) => (
  <Card title="Active Diet Plan" icon={FaUtensils}>
    <div className="space-y-4">
      {plan.map((item, index) => <DietPlanCard key={index} item={item} />)}
    </div>
  </Card>
);

export default ActiveDietPlan;