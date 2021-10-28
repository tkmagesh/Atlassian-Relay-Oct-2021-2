
import { useLazyLoadQuery } from 'react-relay';

//import type { UsersQuery } from './__generated__/UsersQuery.graphql';
    //typedef = UsersQuery;

//import * as UsersQuery from './__generated__/UsersQuery.graphql';
    //typedef => UsersQuery.UsersQuery

import { UsersQuery as UsersQueryType } from './__generated__/UsersQuery.graphql';
    //typedef => UsersQueryType

import { UsersTotalQuery as UsersTotalQueryType } from './__generated__/UsersTotalQuery.graphql';

const { graphql } = require('babel-plugin-relay/macro');
const Users = () => {
    const { users } = useLazyLoadQuery<UsersQueryType>(graphql`
        query UsersQuery {
            users {
                id
                firstName
                lastName
            }
        }`, {});
    
    const { totalUsers } = useLazyLoadQuery<UsersTotalQueryType>(graphql`
        query UsersTotalQuery {
            totalUsers
        }
    `, {});
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