import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import Project from './Project';
import { Suspense } from 'react'
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql'

interface Props{
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>
}

const Projects = ({queryRef} : Props) => {
    const data = usePreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>(AppFragmentedQuery.default, queryRef);
    return (
        <div>
            <h3>Projects</h3>
            <div>Count : {data.projects.length}</div>
            {data.projects.map(project => (project && 
                <Suspense key={project.id} fallback={<div>Loading Project...</div>}>
                    <Project data={project}></Project>
                </Suspense>
            ))}            
        </div>
    )
}

export default Projects;
