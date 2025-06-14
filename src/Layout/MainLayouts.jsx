import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Dynamic LayOutes */}
            <section>
                <Outlet />
            </section>

            {/* Footer */}
            <div>

            </div>
        </div>
    );
};

export default MainLayouts;