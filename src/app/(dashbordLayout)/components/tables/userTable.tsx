import { TUser } from '@/types';

type TUserTableProps = {
  row: TUser;
  handleBlock?: (email: string) => void;
  handleUnblock?: (email: string) => void;
};

const UserTable = ({ row, handleBlock, handleUnblock }: TUserTableProps) => {
  return (
    <tr className="hover hover:text-gray-900">
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.role}</td>

      <td className="space-x-3">
        {row.status === 'ACTIVE' ? (
          <>
            <button
              onClick={() => {}}
              className="btn btn-sm btn-outline btn-primary"
            >
              Edit
            </button>

            <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => {}}
            >
              Change Role
            </button>
            <button
              className="btn btn-sm btn-outline btn-info"
              onClick={() => handleBlock && handleBlock(row.email)}
            >
              Block
            </button>
          </>
        ) : (
          <button
            className="btn btn-sm btn-outline btn-info"
            onClick={() => handleUnblock && handleUnblock(row.email)}
          >
            Unblock
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTable;
