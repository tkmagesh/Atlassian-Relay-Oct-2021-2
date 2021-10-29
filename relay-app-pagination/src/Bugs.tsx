import { usePaginationFragment } from "react-relay";


import * as AppQuery from './__generated__/AppQuery.graphql'
import { BugPaginationQuery } from './__generated__/BugPaginationQuery.graphql'
import { Bugs_list$key } from './__generated__/Bugs_list.graphql'

const { graphql } = require("babel-plugin-relay/macro");

const Bugs =  ({query} : {query : AppQuery.AppQueryResponse}) => {
    const { data, loadNext, loadPrevious } = usePaginationFragment<BugPaginationQuery, Bugs_list$key>(graphql`
        fragment Bugs_list on RootQuery
        @argumentDefinitions(first : {type : "Int", defaultValue :2}, after : { type : String}) 
        @refetchable(queryName : "BugPaginationQuery"){
            bugs(first: $first, after: $after) @connection(key: "Bugs_bugs") {
                edges {
                    node {
                        id
                        title
                        description
                    }
                }
            }
        }
    `, query);
    return(
        <>
        <h3>Bugs</h3>
        <button onClick={() => loadNext(2)}>Next</button>
        {data.bugs?.edges && data.bugs?.edges?.map(edge => (
            <div key={edge?.node?.id}>
                <h2>{edge?.node?.title}</h2>
                <p>{edge?.node?.description}</p>
            </div>
        ))}
        </>
    )
}

export default Bugs