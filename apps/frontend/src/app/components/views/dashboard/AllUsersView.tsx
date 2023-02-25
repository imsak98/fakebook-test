import { Container } from "@mui/material"
import { FC, useContext, useEffect, useState } from "react"
import { config } from "../../../helpers/config"
import { IUserObject } from "../../../helpers/types"
import AuthContext from "../../contexts/AuthContext"
import { UsersTable } from "./tables/UsersTable"

export const AllUsersView = () => {

    const { user } = useContext(AuthContext)
    const [allUsersList, setAllUsersList] = useState<IUserObject[]>()

    useEffect(() => {
        const getAllUsers = async () => {
    
            const response = await fetch(`${config.backendBaseUrl}/getAllUsers`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user?.accessToken}` 
                }
            })
            const data = await response.json()
            // console.log(data)
            setAllUsersList(data?.users)
            // return data?.users
        }
        getAllUsers()
    }, [user?.accessToken])
    
    // console.log(allUsersList)

    return (
        // <div>
            <Container  maxWidth={"xl"}>
                <h2>
                    Users list
                </h2>
                <UsersTable allUsersList={allUsersList}/>
            </Container>
        // </div>
    )
}