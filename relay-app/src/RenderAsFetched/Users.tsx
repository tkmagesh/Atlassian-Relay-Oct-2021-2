
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import * as AppPreLoadQuery from './__generated__/AppPreLoadQuery.graphql'

interface Props{
    queryRef : PreloadedQuery<AppPreLoadQuery.AppPreLoadQuery>
}

const Users = ({queryRef} : Props) => {
    const {totalUsers, users} = usePreloadedQuery(AppPreLoadQuery.default, queryRef);
    return(
        <>
        <h3>Users {totalUsers}</h3>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.firstName} {user.lastName}</li>
            ))}
        </ul>
        </>
    )
}

export default Users;