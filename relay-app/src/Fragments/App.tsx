import { useEffect } from "react";
import { useQueryLoader } from "react-relay"
import Users from './Users'
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'

const { graphql } = require("babel-plugin-relay/macro");

const App = () => {
    const [queryRef, loadQuery, dispose] = useQueryLoader<AppFragmentedQuery.AppFragmentedQuery>(graphql`
        query AppFragmentedQuery {
            users{
                id
                ...User_user
                ...UserIds_user
            }
            totalUsers
        }
    `);
    useEffect(() => {
        loadQuery({}/* variables */);
        return dispose;
    }, []);

    return(
        <div>
             {queryRef && <Users queryRef={queryRef}/>}
        </div>
    )
}

export default App;