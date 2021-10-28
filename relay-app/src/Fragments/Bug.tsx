
import { useFragment } from 'react-relay/hooks'
import {Bug_bug$key} from './__generated__/Bug_bug.graphql'
const graphql = require('babel-plugin-relay/macro');

interface Props{
    data: Bug_bug$key
}

const Bug = ({data} : any) => {
    const bug = useFragment(graphql`
        fragment Bug_bug on Bug {
            id
            title
            description
            status
        }`, data)
    return (
        <div>
            <h4>{bug.title}</h4>
            <div>{bug.description}</div>
            <div>{bug.status}</div>
        </div>
    )
}
export default Bug;