import React from 'react';

//Import Components
import Navbar from '../layout/Navbar'
import ManagementTeam from './Teams/ManagementTeam';
import AdminTeam from './Teams/AdminTeam';
import ProductTeam from './Teams/ProductTeam';
import TechTeam from './Teams/TechTeam';
import OperationsTeam from './Teams/OperationsTeam';

const OurTeam = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <ManagementTeam />
                <AdminTeam />
                <ProductTeam />
                <TechTeam />
                <OperationsTeam />
            </div>
        </React.Fragment>
    );
};

export default OurTeam;