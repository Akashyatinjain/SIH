// src/components/HerbalRecommendations.jsx
import React from 'react';
import Card from './Card';
import { FaLeaf } from 'react-icons/fa';

const HerbalRecommendations = ({ recommendations }) => (
    <Card title="Herbal Recommendations" icon={FaLeaf}>
        <ul className="space-y-3">
            {recommendations.map((herb, index) => (
                <li key={index} className="flex items-center">
                    <FaLeaf className="text-green-500 mr-3" />
                    <div>
                        <p className="font-semibold text-gray-700">{herb.name}</p>
                        <p className="text-sm text-gray-500">{herb.benefit}</p>
                    </div>
                </li>
            ))}
        </ul>
    </Card>
);

export default HerbalRecommendations;