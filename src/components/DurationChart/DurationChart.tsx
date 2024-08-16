'use client';
import { useGetAllTripQuery } from '@/redux/api/tripApi';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const DurationChart = () => {
  const { data, isError, isLoading } = useGetAllTripQuery({});

  const travelData =
    data?.trips?.map((trip) => {
      const start = new Date(trip.startDate);
      const end = new Date(trip.endDate);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        const duration =
          (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        return {
          destination: trip.destination,
          duration: duration,
        };
      } else {
        return {
          destination: trip.destination,
          duration: 0,
        };
      }
    }) || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  return (
    <div>
      <p>Destination Duration Chart</p>

      <BarChart width={600} height={300} data={travelData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="destination" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DurationChart;
