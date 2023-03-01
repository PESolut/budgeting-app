import { Routes, Route, Navigate, Outlet, } from "react-router-dom"

import Home from "../pages/Home";
import FourOFour from "../pages/Four0Four";
import New from "../pages/New"

const RouteComp = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/new" element={<New /> } />
            <Route path="not-found" element={<FourOFour />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        </>
    );
};

export default RouteComp;