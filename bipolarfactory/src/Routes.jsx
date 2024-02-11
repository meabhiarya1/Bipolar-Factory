import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Tables = React.lazy(() => import("pages/Tables"));
const Forms = React.lazy(() => import("pages/Forms"));
const Cards = React.lazy(() => import("pages/Cards"));
const Charts = React.lazy(() => import("pages/Charts"));
const Pages = React.lazy(() => import("pages/Pages"));
const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Pages />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/tables" element={<Tables />} />
                </Routes>
            </Router>
        </React.Suspense>
    );
};
export default ProjectRoutes;
