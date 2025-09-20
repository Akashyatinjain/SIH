import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", calories: 1800, protein: 60 },
  { day: "Tue", calories: 2000, protein: 75 },
  { day: "Wed", calories: 1700, protein: 55 },
  { day: "Thu", calories: 2200, protein: 80 },
  { day: "Fri", calories: 1900, protein: 70 },
  { day: "Sat", calories: 2100, protein: 85 },
  { day: "Sun", calories: 1950, protein: 65 },
];

export default function DietChartCard() {
  return (
    <div className="mt-12 md:mt-0 relative z-10">
      <div className="w-96 h-64 bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl shadow-xl border border-white relative overflow-hidden p-4">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-30"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-300 rounded-full blur-xl opacity-30"></div>

        {/* Chart */}
        <div className="h-full flex flex-col justify-between">
          <h3 className="text-center text-lg font-semibold text-gray-700">
            Interactive Diet Chart Preview
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#374151" />
              <YAxis stroke="#374151" />
              <Tooltip contentStyle={{ borderRadius: "12px" }} />
              <Bar dataKey="protein" fill="#34d399" barSize={20} radius={[6, 6, 0, 0]} />
              <Line type="monotone" dataKey="calories" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
