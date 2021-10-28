import { useFragment} from 'react-relay'
import { User_user$key } from './__generated__/User_user.graphql';
const { graphql } = require('babel-plugin-relay/macro');

interface Props{
    data : User_user$key
}
const User = ({data} : Props) => {
    const fragmentDef =  graphql`
        fragment User_user on User {
            id
            firstName
            lastName
            email
        }
    `
    const user = useFragment(fragmentDef, data)
    return (
        <div>
        <h2>{user.firstName} {user.lastName}</h2>
        </div>
    )
}

export default User;