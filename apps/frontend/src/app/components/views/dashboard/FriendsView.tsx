import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { config } from "../../../helpers/config";
import { IRequestListObject, IUserObject } from "../../../helpers/types";
import AuthContext from "../../contexts/AuthContext";
import {  } from "./tables/FriendRequestTable";
import { UsersFriendsListTable } from "./tables/UsersFriendsListTable";

export const FriendsView = () => {
    const { user } = useContext(AuthContext);
    const [usersFriendsList, setUsersFriendsList] = useState<IUserObject[]>();
  
    useEffect(() => {
      const getFriendRequestList = async () => {
        const response = await fetch(`${config.backendBaseUrl}/getAllUsersFriends`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        const data = await response.json();
        // console.log(data)
        setUsersFriendsList(data?.friendsList);
        // return data?.users
      };
      getFriendRequestList();
    }, [user?.accessToken]);
  
    return (
      <Container maxWidth={'xl'}>
        <h2>Friend Requests List</h2>
        <UsersFriendsListTable usersFriendsList={usersFriendsList} />
      </Container>
    );
  }