import { Container } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { config } from "../../../helpers/config"
import { IRequestListObject } from "../../../helpers/types"
import AuthContext from "../../contexts/AuthContext"
import { FriendRequestTable } from "./tables/FriendRequestTable"

export const InvitationsView = () => {

    const { user } = useContext(AuthContext)
    const [requestList, setRequestList] = useState<IRequestListObject[]>()

    useEffect(() => {
        const getFriendRequestList = async () => {
    
            const response = await fetch(`${config.backendBaseUrl}/friendRequests`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user?.accessToken}` 
                }
            })
            const data = await response.json()
            // console.log(data)
            setRequestList(data?.requestsList)
            // return data?.users
        }
        getFriendRequestList()
    }, [user?.accessToken])


    return (
        <Container  maxWidth={"xl"}>
        <h2>
            Friend Requests List
        </h2>
        <FriendRequestTable requestList={requestList}/>
    </Container>
)
}