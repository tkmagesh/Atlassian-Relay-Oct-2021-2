import { useEffect } from "react";
import { useQueryLoader } from "react-relay"
import Users from './Users'
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'
import Projects from './Projects';

const { graphql } = require("babel-plugin-relay/macro");

const App = () => {
    const [queryRef, loadQuery, dispose] = useQueryLoader<AppFragmentedQuery.AppFragmentedQuery>(graphql`
        query AppFragmentedQuery ($status : Status) {
            users{
                id
                ...User_user
            }
            totalUsers
            projects{
               ...Project_project
            }
        }
    `);
    useEffect(() => {
        loadQuery({}/* variables */);
        return dispose;
    }, []);

    return(
        <div>
             {/* {queryRef && <Users queryRef={queryRef}/>} */}
             {queryRef && <Projects queryRef={queryRef}/>}
        </div>
    )
}

export default App;