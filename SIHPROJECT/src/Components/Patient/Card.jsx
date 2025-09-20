// src/components/Card.jsx
import React from 'react';

const Card = ({ title, icon, children }) => {
  const IconComponent = icon;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          {IconComponent && <IconComponent className="mr-3 text-green-600" />}
          {title}
        </h3>
      )}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Card;