
import { useLazyLoadQuery, useMutation, useRelayEnvironment } from 'react-relay'
import * as AppMutationQuery from './__generated__/AppMutationQuery.graphql'
import * as AppCreateUserMutation from './__generated__/AppCreateUserMutation.graphql'
import { useState } from 'react'
import type { Environment } from 'react-relay'
import { commitLocalUpdate } from 'relay-runtime';

const { graphql } = require('babel-plugin-relay/macro')

function commitUserLocally(environment : Environment, user : any) {
    return commitLocalUpdate(environment, (store) => {
        const root = store.getRoot();
        const users = root.getLinkedRecords('users');
        if (!users) {
            return
        }
        const newUserList = [...users, user]
        root.setLinkedRecords(newUserList, 'users')
    })
}

const App = () => {
    const [fetchKey, setFetchKey] = useState('')
    const environment = useRelayEnvironment();
    
    const [createUser] = useMutation<AppCreateUserMutation.AppCreateUserMutation>(graphql`
        mutation AppCreateUserMutation($firstName : String!, $lastName : String!, $email : String!) {
            createUser(firstName: $firstName, lastName: $lastName, email: $email) {
                id
                firstName
                lastName
                email
                fullName
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
    `, {}, { fetchPolicy: 'store-and-network', fetchKey : fetchKey })

    const onCreateUserClick = (firstName : string, lastName : string, email : string) => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email
            },
            onError: (error) => {
                console.log(error)
                /* const user = clientStore.create("dummy-id-1", "User")
                console.log(user);
                if (user) {
                    user.setValue('Error - First Name', 'firstName')
                    user.setValue('Error - Last Name', 'lastName')
                    user.setValue('Error - Email', 'email')
                    user.setValue('Error - Full Name', 'fullName')
                }
                const root = clientStore.getRoot()
                const users = root.getLinkedRecords('users');
                if (!users) {
                    return
                }
                const newUserList = [...users, user]
                root.setLinkedRecords(newUserList, 'users') */
            },
            optimisticUpdater : (store) => {
                clientStore = store;
                const user = store.create("dummy-id-1", "User")
                console.log(user);
                if (user) {
                    user.setValue('First Name', 'firstName')
                    user.setValue('Last Name', 'lastName')
                    user.setValue('Email', 'email')
                    user.setValue('Full Name', 'fullName')
                }
                const root = store.getRoot()
                const users = root.getLinkedRecords('users');
                if (!users) {
                    return
                }
                const newUserList = [...users, user]
                root.setLinkedRecords(newUserList, 'users')
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
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default App;


