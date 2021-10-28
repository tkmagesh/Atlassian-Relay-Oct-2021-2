import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import Project from './Project';

import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'

interface Props{
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>
}

const Projects = ({queryRef} : Props) => {
    const data = usePreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>(AppFragmentedQuery.default, queryRef);
    console.log(data);
    return (
        <div>
            <h3>Projects</h3>
            <div>Count : {data.projects.length}</div>
            {data.projects.map(project => (project && <Project data={project}></Project>))}
            

            
        </div>
    )
}

export default Projects;
