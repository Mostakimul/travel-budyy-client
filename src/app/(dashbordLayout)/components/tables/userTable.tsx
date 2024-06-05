import { TUser } from '@/types';

type TUserTableProps = {
  row: TUser;
};

const UserTable = ({ row }: TUserTableProps) => {
  return (
    <tr className="hover hover:text-gray-900">
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.role}</td>

      <td className="space-x-3">
        <button
          onClick={() => {}}
          className="btn btn-sm btn-outline btn-primary"
        >
          Edit
        </button>
        <button onClick={() => {}} className="btn btn-sm btn-outline btn-error">
          Delete
        </button>

        <button
          className="btn btn-sm btn-outline btn-accent"
          onClick={() => {}}
        >
          Change Role
        </button>
        <button className="btn btn-sm btn-outline btn-info" onClick={() => {}}>
          Block
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
