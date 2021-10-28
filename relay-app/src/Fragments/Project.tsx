import { useRefetchableFragment } from 'react-relay'
import { Suspense} from 'react';

import * as Project_project from './__generated__/Project_project.graphql';
import Bugs from './Bugs';

const { graphql } = require('babel-plugin-relay/macro');
interface Props{
    data : Project_project.Project_project$key
};

const Project = ({data} : Props) => {
    const [project, reload] = useRefetchableFragment(graphql`
        fragment Project_project on Project 
        @refetchable(queryName: "ProjectRefetchQuery"){
            id
            name
            description
            bugs(status : $status){
                id
                ...Bug_bug
            }
        }
    `, data)
    return (
        <>
            <b>Project : {project?.name}</b>
            <p>{project?.description}</p>
            <button onClick={() => { reload({ status: "CLOSED"})}}>Closed</button>
            <Suspense fallback={<div>Loading Bugs...</div>}>
                {project?.bugs && <Bugs data={project.bugs}/>}
            </Suspense>
            <hr/>
        </>
    )
}

export default Project;