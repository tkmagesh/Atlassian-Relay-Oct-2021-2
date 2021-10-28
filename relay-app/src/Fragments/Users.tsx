
import { graphql, PreloadedQuery, useFragment, usePreloadedQuery } from 'react-relay';
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'
import User from './User';

interface Props{
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>
}

const Users = ({queryRef} : Props) => {
    const {totalUsers, users} = usePreloadedQuery(AppFragmentedQuery.default, queryRef);
    
    return(
        <>
        <h3>Users : {totalUsers}</h3>
        <ul>
            {users.map(user => (
                <User key={user.id} data={user} />
            ))}
        </ul>
        </>
    )
}

export default Users;