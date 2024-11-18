import { Navigate } from "react-router-dom";
import ComingSoonPage from "./Pages/ComingSoonPage";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotfoundPage";

const AppRoutes = [
    { index: true, element: <Home /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/coming-soon', element: <ComingSoonPage /> },
    // { path: '*', element: <Navigate to="/coming-soon" /> },
    { path: '*', element: <NotFoundPage /> },
];

export default AppRoutes;