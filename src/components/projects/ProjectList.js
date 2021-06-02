import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProjects } from '../../features/project/projectSlice'
import { db } from '../../firebase'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
  const dispatch = useDispatch()
  const projectState = useSelector(state => state.projects)
  useEffect(() => {
    console.log(projectState)
    if (db) {
       const unsubscribe = db
        .collection('projects')
        .orderBy('timestamp', 'desc')
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            dispatch(getProjects({data}))
        })
        return unsubscribe
    }
}, [])
  console.log(projects + 'im from projects')
  return (

    <div className="project-list section">
      {projectState.project.data?.map(project => {
        return (

          <Link to={'/project/' + project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      }
      )}
    </div>
  )
}

export default ProjectList
