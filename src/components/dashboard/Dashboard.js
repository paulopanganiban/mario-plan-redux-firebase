import React, { useEffect } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
// 1st import useState, useDispatch, useSelector
// import the actions from todoSlice
const Dashboard = () => {
    // take a piece of the state
    // no need mag mapstate to props and connect ()()
    // sheeeeeesh
    const projects = useSelector(state => state.projects)
    useEffect(() => {
       console.log(projects)
      }, [projects]);
    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                  {/* pass down as props */}
                  <ProjectList projects={projects}/>
              </div>
              <div className="col s12 m5 offset-m1">
                  <Notifications/>
              </div>
          </div>
      </div>
    )
}

export default Dashboard
