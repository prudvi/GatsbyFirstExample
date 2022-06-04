import { graphql } from 'gatsby';
import React from "react";
import CustomLayout from '../components/layout';
import { docLinkStyle, listStyles } from '../css/styles';
const Users = ({ data }: any) => (

    <CustomLayout pageTitle="Users Page">
        <h4>users count: {data.external.users.length}</h4>
        <ul style={listStyles}>
            {data.external.users.map((user: any) => (
                <li key={user.firstname} style={docLinkStyle}>
                    <span>

                        <span aria-label="New Badge">
                            {user.firstname}
                        </span>


                    </span>
                </li>
            ))}
        </ul>
    </CustomLayout>

)

export default Users

export const query = graphql`
  query {
    external {
        users {
        firstname
        lastname
        }
    }
}
`