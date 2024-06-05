import { getUserInfo } from '@/services/auth.services';
import { TUser } from '@/types';
import Link from 'next/link';
import { TChangeRole } from '../../dashboard/admin/users/all-user/page';

type TUserTableProps = {
  row: TUser;
  handleBlock?: (email: string) => void;
  handleUnblock?: (email: string) => void;
  handleChangeRole?: (data: TChangeRole) => void;
};

const UserTable = ({
  row,
  handleBlock,
  handleUnblock,
  handleChangeRole,
}: TUserTableProps) => {
  const user = getUserInfo();
  // const router = useRouter()
  // const handleEdit = () => {
  //   router
  // }

  return (
    <tr className="hover hover:text-gray-900">
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.role}</td>

      <td className="space-x-3">
        {row.status === 'ACTIVE' ? (
          <>
            <Link
              href={`/dashboard/admin/users/${row.id}`}
              className="btn btn-sm btn-outline btn-primary"
            >
              Edit
            </Link>

            {user?.email !== row.email && (
              <>
                <button
                  className="btn btn-sm btn-outline btn-accent"
                  onClick={() => {
                    handleChangeRole &&
                      handleChangeRole({ email: row.email, role: row.role });
                  }}
                >
                  Change Role
                </button>
                <button
                  className="btn btn-sm btn-outline btn-info"
                  onClick={() => {
                    handleBlock && handleBlock(row.email);
                  }}
                >
                  Block
                </button>
              </>
            )}
          </>
        ) : (
          <button
            className="btn btn-sm btn-outline btn-info"
            onClick={() => {
              handleUnblock && handleUnblock(row.email);
            }}
          >
            Unblock
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTable;
