
import { useLazyLoadQuery } from 'react-relay';

//import type { UsersQuery } from './__generated__/UsersQuery.graphql';
    //typedef = UsersQuery;

//import * as UsersQuery from './__generated__/UsersQuery.graphql';
    //typedef => UsersQuery.UsersQuery

import { UsersQuery as UsersQueryType } from './__generated__/UsersQuery.graphql';
    //typedef => UsersQueryType


const { graphql } = require('babel-plugin-relay/macro');
const Users = () => {
    const { totalUsers, users } = useLazyLoadQuery<UsersQueryType>(graphql`
        query UsersQuery {
            totalUsers
            users {
                id
                firstName
                lastName
            }
        }`, {});
    return (
        <>
            <h1>Users : {totalUsers}</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Users;