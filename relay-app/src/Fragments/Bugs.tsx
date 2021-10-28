

import type {Bug_bug$key} from './__generated__/Bug_bug.graphql'
import Bug from './Bug'
const graphql = require('babel-plugin-relay/macro');

interface Props {
    data : readonly Bug_bug$key[] | null | undefined
}

const Bugs = ({data} : Props ) => {
    return (
        <div>
            <h4>Bugs</h4>
            <div>
                {data?.map(bug => (<Bug data={bug} />))}
            </div>
        </div>
    )          
}
export default Bugs;