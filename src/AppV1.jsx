import "./global.css";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import {
    BrowserRouter,
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
} from "react-router";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import { getCities } from "./services/apiCities";

const AppRoutesV1 = function ({ cities }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<ProductPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="app" element={<AppPage />}>
                    <Route index element={<Navigate replace to="cities" />} />
                    <Route
                        path="cities"
                        element={<CityList cities={cities} />}
                    />
                    <Route path="countries" element={<CountryList />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

const AppRoutesV2 = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/product", element: <ProductPage /> },
    { path: "/login", element: <LoginPage /> },
    {
        path: "/app",
        element: <AppPage />,
        children: [
            { index: true, element: <Navigate replace to="cities" /> },
            { path: "cities", element: <CityList /> },
            { path: "counties", element: <CountryList /> },
        ],
    },
    { path: "*", element: <ErrorPage /> },
]);

function App() {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Read Cities
    useEffect(function () {
        async function loadCities() {
            try {
                setLoading(true);
                const data = await getCities();
                setCities(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadCities();
    }, []);

    return <AppRoutesV1 cities={cities} />;
    // return <RouterProvider router={AppRoutesV2} />;
}

export default App;
