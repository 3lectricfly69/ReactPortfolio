import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import React from "react";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import ProjectsWindowPage from "./pages/ProjectsWindowPage.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    error: <ErrorPage />,
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