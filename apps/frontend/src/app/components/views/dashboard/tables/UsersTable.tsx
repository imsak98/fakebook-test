import { FC, useContext, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { IUserObject } from '../../../../helpers/types';
import { config } from '../../../../helpers/config';
import AuthContext from '../../../contexts/AuthContext';
import { useNotificationContext } from '../../../contexts/NotificationContext';

interface IUserTableProps {
  allUsersList: IUserObject[] | undefined;
}

export const UsersTable: FC<IUserTableProps> = ({ allUsersList }) => {
  //   const [selectedRow, setSelectedRow] = useState(null);
  const { user } = useContext(AuthContext);
  const { notify } = useNotificationContext();

  const handleRowClick = (row: IUserObject) => {
    // setSelectedRow(row.id);
  };

  const sendFriendRequest = async (user_id: string) => {
    console.log(user_id);
    const response = await fetch(`${config.backendBaseUrl}/sendFriendRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify({
        user_id: user_id,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      notify({
        message: data.message,
        type: 'success',
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>Joind On</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsersList?.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => handleRowClick(row)}
              //   selected={selectedRow === row.id}
              hover
            >
              {/* <TableCell>{row.id}</TableCell> */}
              <TableCell>{row.display_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contact_no}</TableCell>
              <TableCell>
                {new Date(row.created_at).toLocaleDateString('en-GB')}
              </TableCell>
              <TableCell>
                <Button
                  variant="text"
                  onClick={() => sendFriendRequest(row.id)}
                >
                  INVITE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
