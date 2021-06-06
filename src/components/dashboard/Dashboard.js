import React, { useEffect } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { Redirect } from 'react-router'
// 1st import useState, useDispatch, useSelector
// import the actions from todoSlice
const Dashboard = () => {
    const authState = useSelector(state => state.auth)
    // take a piece of the state
    // no need mag mapstate to props and connect ()()
    // sheeeeeesh
    const projects = useSelector(state => state.projects)
    if (!authState.isSignedIn) return <Redirect to='/signin'/>    
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
