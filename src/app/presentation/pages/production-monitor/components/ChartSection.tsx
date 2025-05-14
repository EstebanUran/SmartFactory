import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import type { WorkUnit } from '../../../../domain/shared.types'

export const ChartSection = ({ unit }: { unit: WorkUnit }) => (
  <div className="chart-section">
    <ResponsiveContainer width="100%" height={200}>
      <BarChart layout="vertical" data={[unit]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={60} />
        <Tooltip />
        <Legend />
        <Bar dataKey="tpar" fill="#ff6b6b" name="Down time" />
        <Bar dataKey="tprep" fill="#4ecdc4" name="Prep Time" />
        <Bar dataKey="tprod" fill="#ffe66d" name="Prod Time" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)
