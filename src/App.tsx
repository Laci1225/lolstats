import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SummonerByName from "./Pages/SummonerByName.tsx";
import LastGameByName from "./Pages/LastGameByName.tsx";
import AuthStore from "./store/AuthStore.tsx";
import {useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import CurrentMatchData from "./Pages/CurrentMatchData.tsx";

const router = (isAuthenticated: boolean) =>
    createBrowserRouter([
            {
                path: '/',
                element: (
                    <ProtectedRoute safeToLoad={!isAuthenticated} redirectTo={"/smn"}>
                        <LoginPage/>
                    </ProtectedRoute>)
            },
            {
                path: "/smn",
                element: (
                    <ProtectedRoute safeToLoad={isAuthenticated} redirectTo={"/"}>
                        <SummonerByName/>
                    </ProtectedRoute>)
            },
            {
                path: "/match",
                element: (<ProtectedRoute safeToLoad={isAuthenticated} redirectTo={"/"}>
                    <LastGameByName/>
                </ProtectedRoute>)
            }
            ,
            {
                path: "/:id",
                element:
                    <CurrentMatchData id2={"0"}/>
            }
        ]
    )

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthStore.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <RouterProvider router={router(isAuthenticated)}/>
        </AuthStore.Provider>
    )
}

export default App;