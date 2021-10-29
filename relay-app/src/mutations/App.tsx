
import { useLazyLoadQuery, useMutation } from 'react-relay'
import * as AppMutationQuery from './__generated__/AppMutationQuery.graphql'
import * as AppCreateUserMutation from './__generated__/AppCreateUserMutation.graphql'

const { graphql } = require('babel-plugin-relay/macro')
const App = () => {
    const [createUser] = useMutation<AppCreateUserMutation.AppCreateUserMutation>(graphql`
        mutation AppCreateUserMutation($firstName : String!, $lastName : String!, $email : String!) {
            createUser(firstName: $firstName, lastName: $lastName, email: $email) {
                id
                firstName
                lastName
                email

            }
        }
    `)

    const data = useLazyLoadQuery<AppMutationQuery.AppMutationQuery>(graphql`
        query AppMutationQuery {
            users{
                id
                firstName
                lastName
                email
                fullName
            }
        }
    `, {})

    const onCreateUserClick = (firstName : string, lastName : string, email : string) => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email
            },
            updater : (store) => {
                const root = store.getRoot();
                const payload = store.getRootField('createUser');
                const users = root.getLinkedRecords('users');
                if (!users) {
                    return
                }
                const newUserList = [...users, payload]
                root.setLinkedRecords(newUserList, 'users')
            }
        });
    }

    return(
        <div>
            <h1>Users</h1>
            <button onClick={() => onCreateUserClick("Magesh", "Kuppan", "mk@mail.com")}>Create User</button>
            {data.users.map(user => (
                <div key={user.id}>
                    <h3>{user.fullName}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default App;