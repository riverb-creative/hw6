/**
 * PageHeader.jsx
 * will display project name and desc. of project
 */

const PageHeader = ({projectName, projectAuthor, projectDesc}) => {
    return (
        <header>
            <h1>{projectName}</h1>
            <h2>{projectAuthor}</h2>
            <p>{projectDesc}</p>
        </header>
    )
}

export default PageHeader;