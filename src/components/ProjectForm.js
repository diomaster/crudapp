import { useContext } from "react";
import { ProjectContext } from "../App";
import {useParams, useNavigate} from 'react-router-dom'

export default function ProjectForm() {
    const navigate = useNavigate()

    let {projects, setProjects} = useContext(ProjectContext)

    let {pid} = useParams()
    pid = parseInt(pid)

    let project;
    if(pid){
        project = { ...projects.find(p => p.id === pid)}
    } else {
        let maxId = projects[projects.length - 1].id + 1
        project = {"id": maxId, "title": "", "description": ""}
    }

    const handleTitleChange = (event) => {
        project.title = event.target.value
    }

    const handleDescriptionChange = (event) => {
        project.description = event.target.value
    }




    const addUpdateProjForm = (e) => {
        e.preventDefault();
        let projectsClone = [...projects]
        if(pid) {
            let objIndex = projectsClone.findIndex((obj => obj.id === pid));
            projectsClone[objIndex] = project
        } else {
            projectsClone.push(project);
        }
        setProjects(projectsClone)
        navigate("/list")
    }
  return (
    <div>
        <h1>Project FORM</h1>
        <form onSubmit={addUpdateProjForm}>
            <div>
                <label>id:</label>
                <input type="text" name="id" defaultValue={project.id} disabled />
            </div>
            <div>
                <label>Title:</label>
                <input type="text" name="title" defaultValue={project.title} onChange={handleTitleChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" defaultValue={project.description} onChange={handleDescriptionChange}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}