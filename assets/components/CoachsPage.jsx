import React from 'react';
import Coachs from './modules/coach/Coachs';
import NavBar from './modules/layout/NavBar';

const CoachsPage = (props)=>{ 
    return (
        <div>
            <NavBar name="navbar-home"></NavBar>
            <Coachs></Coachs>
        </div>
    )
}
export default CoachsPage;
