import { useMutation, usePaginationFragment } from "react-relay";


import * as AppQuery from './__generated__/AppQuery.graphql'
import { BugPaginationQuery } from './__generated__/BugPaginationQuery.graphql'
import { Bugs_list$key } from './__generated__/Bugs_list.graphql'
import { ConnectionHandler } from 'relay-runtime';

const { graphql } = require("babel-plugin-relay/macro");

const Bugs =  ({query} : {query : AppQuery.AppQueryResponse}) => {
    const { data, loadNext, refetch } = usePaginationFragment<BugPaginationQuery, Bugs_list$key>(graphql`
        fragment Bugs_list on RootQuery
        @argumentDefinitions(status : { type : Status}, first : {type : "Int"}, after : { type : String}) 
        @refetchable(queryName : "BugPaginationQuery"){
            users {
                id
            }
            projects{
                id
            }
            bugs(status : $status, first: $first, after: $after) @connection(key: "Bugs_bugs") {
                edges {
                    node {
                        id
                        title
                        description
                        status
                    }
                }
            }
        }
    `, query);

    const [createBug] = useMutation(graphql`
        mutation BugsCreateNewBugMutation($input : CreateBugInput!){
            createBug(input: $input){
                bugEdge{
                    node{
                        id
                        title
                        description
                        severity
                        status
                        projectId
                    }
                    cursor
                }
            }
        }
    `);


    const onCreateBugClick = () => {
        createBug({
            variables: {
                input: {
                    bug : {
                        title: 'New bug',
                        description: 'New bug description',
                        severity: 'CRITICAL',
                        projectId: data.projects[0]?.id,
                        userId: data.users[0]?.id
                    }
                }
            },
            updater: (store) => {
                const payload = store.getRootField('createBug');
                if (!payload) {
                    return;
                }
                const newBugEdge = payload.getLinkedRecord('bugEdge');
                if (!newBugEdge) {
                    return;
                }
                const bugs = ConnectionHandler.getConnection(store.getRoot(), 'Bugs_bugs');
                if (!bugs) {
                    return;
                }
                ConnectionHandler.insertEdgeAfter(bugs, newBugEdge);
            }
        });
    }

    return(
        <>
        <h3>Bugs</h3>
        <button onClick={onCreateBugClick}>Create Bug</button>
        <button onClick={() => loadNext(2)}>Next</button>
        {data.bugs?.edges && data.bugs?.edges?.map(edge => (
            <div key={edge?.node?.id}>
                <h2>{edge?.node?.title}</h2>
                <p>{edge?.node?.description}</p>
                <p>{edge?.node?.status}</p>
            </div>
        ))}
        </>
    )
}

export default Bugs