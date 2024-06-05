import { TTrip } from '@/types';
type TTripTableProps = {
  row: TTrip;
};

const TripTable = ({ row }: TTripTableProps) => {
  return (
    <tr className="hover hover:text-gray-900">
      <td>{row.destination}</td>
      <td>{row.activities.join(',')}</td>
      <td>{row.budget}</td>
      <td>{row.user.name}</td>

      <td className="space-x-2">
        <button className="btn btn-sm btn-outline btn-info">Edit</button>
        <button className="btn btn-sm btn-outline btn-primary">
          Show Details
        </button>
        <button className="btn btn-sm btn-outline btn-error">Disable</button>
      </td>
    </tr>
  );
};

export default TripTable;
