'use client';

import { useGetAllUserQuery } from '@/redux/api/userApi';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type RoleData = {
  role: string;
  count: number;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d88484'];

const UserChart = () => {
  const { data, isError, isLoading } = useGetAllUserQuery({});

  const roleData: RoleData[] =
    data?.users?.reduce((acc: RoleData[], user: User) => {
      const existingRole = acc.find((item) => item.role === user.role);

      if (existingRole) {
        existingRole.count += 1;
      } else {
        acc.push({ role: user.role, count: 1 });
      }

      return acc;
    }, []) || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="text-base-200 min-h-screen">
      <p>User Roles Pie Chart</p>

      <div>
        <PieChart width={600} height={400}>
          <Pie
            data={roleData}
            dataKey="count"
            nameKey="role"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {roleData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default UserChart;
