'use client';
import { TTrip } from '@/types';
import Link from 'next/link';
type TTripTableProps = {
  row: TTrip;
  handleDisable?: (id: string) => void;
  handleActive?: (id: string) => void;
};

const TripTable = ({ row, handleDisable, handleActive }: TTripTableProps) => {
  return (
    <tr className="hover hover:text-gray-900">
      <td>{row.destination}</td>
      <td>{row.activities.join(',')}</td>
      <td>{row.budget}</td>
      <td>{row.user.name}</td>

      <td className="space-x-2">
        {row.tripStatus === 'ACTIVE' ? (
          <>
            <Link
              href={`/dashboard/admin/trips/edit/${row.id}`}
              className="btn btn-sm btn-outline btn-info"
            >
              Edit
            </Link>
            <Link
              href={`/dashboard/admin/trips/${row.id}`}
              className="btn btn-sm btn-outline btn-primary"
            >
              Show Details
            </Link>
            <button
              onClick={() => handleDisable && handleDisable(row.id)}
              className="btn btn-sm btn-outline btn-error"
            >
              Disable
            </button>
          </>
        ) : (
          <button
            onClick={() => handleActive && handleActive(row.id)}
            className="btn btn-sm btn-outline btn-error"
          >
            Activate
          </button>
        )}
      </td>
    </tr>
  );
};

export default TripTable;
