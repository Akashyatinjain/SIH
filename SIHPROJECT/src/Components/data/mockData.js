// src/data/mockData.js
import { FaSeedling, FaTint, FaWalking, FaUser } from "react-icons/fa";

export const patientData = {
  name: "Rahul Kumar",
  age: 42,
  gender: "Male",
  dosha: "Vata-Pitta",
  keyStats: {
    weight: "72 kg",
    height: "175 cm",
    bmi: 23.5,
  },
  prakriti: { vata: 30, pitta: 50, kapha: 20 },
  vikriti: { vata: 60, pitta: 25, kapha: 15 },
  dietaryAnalysis: {
    rasa: [
      { name: 'Sweet', prescribed: 40, actual: 35 },
      { name: 'Sour', prescribed: 10, actual: 15 },
      { name: 'Salty', prescribed: 10, actual: 12 },
      { name: 'Pungent', prescribed: 15, actual: 20 },
      { name: 'Bitter', prescribed: 15, actual: 10 },
      { name: 'Astringent', prescribed: 10, actual: 8 },
    ],
    guna: [
      { name: 'Cooling', value: 60 },
      { name: 'Heating', value: 40 },
    ]
  },
  lifestyleLog: [
    { time: 'Today, 8:00 AM', event: 'Good bowel movement.', icon: FaSeedling, color: 'text-green-500' },
    { time: 'Today, 7:30 AM', event: 'Drank 500ml of warm water.', icon: FaTint, color: 'text-blue-500' },
    { time: 'Today, 7:00 AM', event: '30-minute walk.', icon: FaWalking, color: 'text-orange-500' },
    { time: 'Yesterday, 10:00 PM', event: 'Slept well.', icon: FaUser, color: 'text-indigo-500' },
  ],
  activeDietPlan: [
      {
        meal: 'Breakfast',
        dish: 'Oats Upma',
        recipe: 'Cook oats with vegetables like carrots and peas. Season with turmeric and a pinch of salt.',
        analysis: { cals: 350, rasa: 'Sweet, Salty', guna: 'Light, Warm' }
      },
      {
        meal: 'Lunch',
        dish: 'Moong Dal Khichdi',
        recipe: 'Cook yellow moong dal and rice with ginger, turmeric, and cumin seeds.',
        analysis: { cals: 450, rasa: 'Sweet, Astringent', guna: 'Light, Easy to Digest' }
      },
  ],
  weightTrend: [
    { date: "Week 1", weight: 74 },
    { date: "Week 2", weight: 73 },
    { date: "Week 3", weight: 72.5 },
    { date: "Week 4", weight: 72 },
  ],
  appointments: [
    { id: 1, title: "Dr. Meera (Follow-up)", date: "26 Sep", time: "11:00 AM" },
    { id: 2, title: "Dietitian Consultation", date: "10 Oct", time: "4:00 PM" }
  ],
  alerts: [
    { id: 1, type: "warning", message: "Vata dosha is significantly elevated. Focus on grounding activities." },
    { id: 2, type: "info", message: "Your next appointment with Dr. Meera is in 6 days." },
  ],
  herbalRecommendations: [
    { name: "Ashwagandha", benefit: "To reduce Vata and stress." },
    { name: "Brahmi", benefit: "To calm the nervous system." },
    { name: "Amalaki", benefit: "To balance Pitta and aid digestion." },
  ],
  medicalRecords: [
    { id: 1, name: "Blood Test Report - Aug 2025", date: "2025-08-15" },
    { id: 2, name: "Initial Consultation Notes", date: "2025-07-20" },
  ]
};