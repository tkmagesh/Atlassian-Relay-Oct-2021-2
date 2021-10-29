
import { useLazyLoadQuery } from "react-relay"
import * as AppQuery from './__generated__/AppQuery.graphql';
import Bugs from './Bugs';

const { graphql } = require("babel-plugin-relay/macro");
const App = () => {
    const query = useLazyLoadQuery<AppQuery.AppQuery>(graphql`
        query AppQuery {
            users{
                id
                firstName
                lastName
            }
            ...Bugs_list @arguments(first: 10)
        }
    `, {})
    return (
        <>
        <h1>App</h1>
        <Bugs query={query} />
        </>


    )
}
export default App