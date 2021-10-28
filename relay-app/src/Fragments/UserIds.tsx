import { useFragment} from 'react-relay'

import { UserIds_user$key } from './__generated__/UserIds_user.graphql'
const { graphql } = require('babel-plugin-relay/macro');

const UserIds = (props : { data : UserIds_user$key}) => {
    const userId = useFragment(graphql`
        fragment UserIds_user on User{
            id
        }
    `, props.data)
    return(
        <>
        <h3>User Ids</h3>
        <p>User Id  : {userId}</p>
        </>
    )
}

export default UserIds;