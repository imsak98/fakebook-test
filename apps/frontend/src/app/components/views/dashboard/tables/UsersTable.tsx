import { FC, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { IUserObject } from "../../../../helpers/types";

interface IUserTableProps {
    allUsersList: IUserObject[] | undefined
}

export const UsersTable:FC<IUserTableProps> = ( {allUsersList}) => {
//   const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row: IUserObject) => {
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
              <TableCell>{new Date(row.created_at).toLocaleDateString("en-GB")}</TableCell>
              <TableCell>  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
