import { FC, useContext } from 'react';
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
import { IRequestListObject } from '../../../../helpers/types';
import { config } from '../../../../helpers/config';
import AuthContext from '../../../contexts/AuthContext';
import { useNotificationContext } from '../../../contexts/NotificationContext';


interface IFriendRequestTable {
  requestList: IRequestListObject[] | undefined;
}

export const FriendRequestTable: FC<IFriendRequestTable> = ({
  requestList,
}) => {
  //   const [selectedRow, setSelectedRow] = useState(null);

  const { user } = useContext(AuthContext);
  const { notify } = useNotificationContext();


  const handleRowClick = (row: IRequestListObject) => {
    // setSelectedRow(row.id);
  };

  const acceptFriendRequest = async (
    request_id: string,
    request_by_user_id: string
  ) => {
    console.log(request_id);
    const response = await fetch(`${config.backendBaseUrl}/acceptFriendRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify({
        request_id: request_id,
        requested_by_user_id: request_by_user_id
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
  const rejectFriendRequest = async (request_id: string) => {
    console.log(request_id);
    const response = await fetch(`${config.backendBaseUrl}/rejectFriendRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify({
        request_id: request_id,
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
            <TableCell>Requested On</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestList?.map((row) => (
            <TableRow
              key={row.request_id}
              onClick={() => handleRowClick(row)}
              //   selected={selectedRow === row.id}
              hover
            >
              {/* <TableCell>{row.id}</TableCell> */}
              <TableCell>{row.display_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contact_no}</TableCell>
              <TableCell>
                {new Date(row.requested_at).toLocaleDateString('en-GB')}
              </TableCell>
              <TableCell>
                <Button
                  variant="text"
                  onClick={() =>
                    acceptFriendRequest(row.request_id, row.user_id)
                  }
                >
                  Accept
                </Button>
                <Button
                  variant="text"
                  onClick={() => rejectFriendRequest(row.request_id)}
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
