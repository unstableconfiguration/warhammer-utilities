
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from "../components/header";

// 
const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    }
]);

const onNavigate = function (page: string) {
    redirect(page);
}

export default function Router() {
    return (
        <>
            <Header onNavigate={onNavigate} />
            <RouterProvider router={router} />
        </>
    )
}