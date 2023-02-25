import { FC, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { IRequestListObject, IUserObject } from "../../../../helpers/types";

interface IFriendRequestTable {
    requestList: IRequestListObject[] | undefined
}

export const FriendRequestTable:FC<IFriendRequestTable> = ( {requestList}) => {
//   const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row: IRequestListObject) => {
    // setSelectedRow(row.id);
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
              <TableCell>{new Date(row.requested_at).toLocaleDateString("en-GB")}</TableCell>
              <TableCell>  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
