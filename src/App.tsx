import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SummonerByName from "./pages/SummonerByName.tsx";
import AuthStore from "./store/AuthStore.tsx";
import {useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CurrMatchTypedIn from "./components/currmatchtypedin/CurrMatchTypedIn.tsx";


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
                path: "/:summonerName",
                element: (
                    //<ProtectedRoute safeToLoad={isAuthenticated} redirectTo={"/"}>
                    <CurrMatchTypedIn/>
                    //</ProtectedRoute>
                )

            }
            /*,
            {
                path: "/:matchId",
                element:
                    <CurrentMatchData id={"0"}/>
            }*/
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