import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App/App.jsx";

import React from "react";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import GalleryPage from "./pages/Gallery/GalleryPage.jsx";
import ResumePage from "./pages/Resume/ResumePage.jsx";
import ProjectsWindowPage from "./pages/Projects/ProjectsWindowPage.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
{
    path: "/",
    element: <App />,path,
    errorElement: <ErrorPage />,
    children: [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "/About",
        element: <AboutPage />,
    },
    {
        path: "/Contact",
        element: <ContactPage />,
    },
    {
        path: "/Resume",
        element: <ResumePage />,
    },
    {
        path: "/Projects",
        element: <ProjectsWindowPage />,
    },
    {
        path: "/Gallery",
        element: <GalleryPage />,
    },
    ],
},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);