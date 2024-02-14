import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
// import ProjectsWindowPage from "./pages/ProjectsWindowPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

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
        path: "about",
        element: <AboutPage />,
    },
    {
        path: "contact",
        element: <ContactPage />,
    },
    {
        path: "resume",
        element: <ResumePage />,
    },
    {
        path: "projects",
        element: <ProjectsWindowPage />,
    },
    {
        path: "gallery",
        element: <GalleryPage />,
    },
    ],
},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
