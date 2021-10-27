var casual = require('casual')

casual.seed(123)

const userCount = 2, projectsCount = 4, bugsCount = 5, actionsCount = 20

const nodes = {
    users: {},
    projects: {},
    bugs: {},
    actions: {}
}

casual.define('user', function(idx) {
    const firstName= casual.first_name
    const lastName= casual.last_name
    return {
        email: `${firstName}.${lastName}@mail.com`,
        firstName: firstName,
        lastName: lastName,
        id : `user-${idx}`
    };
});

casual.define('project', function(idx){
    return {
        id : `project-${idx}`,
        name : casual.title,
        description : casual.description,
        isActive : casual.random_element([true, false]),
    }
})

casual.define('bug', function(idx){
    return {
        id: `bug-${idx}`,
        title : casual.title,
        description: casual.description,
        severity : casual.random_element([0,1,2,3]),
        createdBy : `user-${casual.integer(1, userCount)}`,
        status : casual.random_element([0,1,2]),
        projectId : `project-${casual.integer(0, projectsCount)}`,
    }
})

function createUsers(count){
    for(let i=1; i<=count; i++){
        const user = casual.user(i)
        nodes['users'][user.id] = user
    }
}

function createProjects(count){
    for(let i=1; i<=count; i++){
        const project = casual.project(i)
        nodes['projects'][project.id] = project
    }
}

function createBugs(count){
    for(let i=1; i<=count; i++){
        const bug = casual.bug(i)
        nodes['bugs'][bug.id] = bug
    }
}

createUsers(userCount)
createProjects(projectsCount)
createBugs(bugsCount)

function createUser(firstName, lastName, email){
    const newUserId = Object.keys(nodes['users']).length + 1
    const newUser =  {
        email: email,
        firstName: firstName,
        lastName: lastName,
        id : `user-${newUserId}`
    };
    nodes['users'][newUser.id] = newUser
    return newUser
}

function createProject({name, description, isActive}){
    const newProjectId = Object.keys(nodes['projects']).length + 1
    const bugs = Object.values(nodes['bugs']).filter(bug => bug.projectId === `project-${newProjectId}`)
    const newProject = {
        id : `project-${newProjectId}`,
        name : name,
        description : description,
        isActive : isActive,
        bugs : bugs
    }
    nodes['projects'][newProject.id] = newProject
    return newProject
}

function createBug({title, description, severity, projectId, userId}){
    const newBugId = Object.keys(nodes['bugs']).length + 1
    const newBug = {
        id: `bug-${newBugId}`,
        title : title,
        description: description,
        severity : severity,
        createdBy : userId,
        status : 0,
        projectId : projectId,
    }
    const newActionId = Object.keys(nodes['actions']).length + 1
    const newAction = {
        id: `action-${newActionId}`,
        openedBy : userId,
        date : new Date(),
        description : `Bug ${newBug.id} opened by ${userId}`,
        bugId : newBug.id,
    }
    nodes['bugs'][newBug.id] = newBug
    nodes['actions'][newAction.id] = newAction
    return newBug
}

function fixBug({bugId, fixedBy, solution}){
    const newActionId = Object.keys(nodes['actions']).length + 1
    const newAction = {
        id: `action-${newActionId}`,
        fixedBy : fixedBy,
        date : new Date(),
        solution : solution,
        bugId : bugId,
    }
    nodes['actions'][newAction.id] = newAction
    return nodes['bugs'][bugId]
}

function closeBug({bugId, closedBy, reason}){
    const newActionId = Object.keys(nodes['actions']).length + 1
    const newAction = {
        id: `action-${newActionId}`,
        closedBy : closedBy,
        date : new Date(),
        reason : reason,
        bugId : bugId,
    }
    nodes['actions'][newAction.id] = newAction
    const bug = nodes['bugs'][bugId]
    bug.status = 2
    return bug
}

function commentBug({bugId, commentedBy, comment}){
    const newActionId = Object.keys(nodes['actions']).length + 1
    const newAction = {
        id: `action-${newActionId}`,
        commentedBy : commentedBy,
        date : new Date(),
        comment : comment,
        bugId : bugId,
    }
    nodes['actions'][newAction.id] = newAction
    const bug = nodes['bugs'][bugId]
    return bug
}

const db = {
    users : () => Object.values(nodes.users),
    projects : () => Object.values(nodes.projects),
    bugs : () => Object.values(nodes.bugs),
    actions : () => Object.values(nodes.actions),
    nodes : nodes,
    createUser : createUser,
    createProject : createProject,
    createBug : createBug,
    fixBug : fixBug,
    closeBug : closeBug,
    commentBug : commentBug,
}



module.exports = db;