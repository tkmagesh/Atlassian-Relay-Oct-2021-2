import { useEffect } from "react";
import { useQueryLoader } from "react-relay"
import Users from './Users'
import * as AppPreLoadQuery from './__generated__/AppPreLoadQuery.graphql'

const { graphql } = require("babel-plugin-relay/macro");

const App = () => {
    const [queryRef, loadQuery, dispose] = useQueryLoader<AppPreLoadQuery.AppPreLoadQuery>(graphql`
        query AppPreLoadQuery {
            totalUsers
            users{
                id
                firstName
                lastName
            }
        }
    `);
    useEffect(() => {
        loadQuery({});
        return dispose;
    }, []);

    return(
        <div>
            {queryRef && <Users queryRef={queryRef}/>}
        </div>
    )
}

export default App;