import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Sign from "./Sign";
import Contact from "./Contact";
import Cart from "./Cart";
import "./App.css";
import Cat from "./Cat";
import Rabbit from "./Rabbit";
import Guinea from "./Guinea";
import Chinchilla from "./Chinchilla";
import Hamster from "./Hamster";
import Random from "./Random";


function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [showRandom, setShowRandom] = useState(true);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsAuthenticated(false); // Update state
        navigate("/Login"); // Redirect to login
    };



    // Update auth state when token changes
    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem("token"));
    }, []);

    useEffect(() => {
        if (location.pathname === "/") {
            setShowRandom(true);
        } else {
            setShowRandom(false); // Hide Random on all other pages
        }
    }, [location.pathname]);

    const hideSearchAndCategories =
        location.pathname === "/Sign" ||
        location.pathname === "/Contact" ||
        location.pathname === "/Login" ||
        location.pathname === "/Cart";

    const handleCategoryClick = (event, categoryPath) => {
        event.preventDefault(); // Prevent default link behavior
        setShowRandom(false); // Hide Random component
        navigate(categoryPath); // Navigate to selected category
    };


    return (
        <div>
            <header>
                <a href="/">Home </a>
                {!isAuthenticated && <a href="/Sign" onClick={(e) => handleCategoryClick(e, "/Sign")}>Sign Up </a>}
                <a href="/Contact" onClick={(e) => handleCategoryClick(e, "/Contact")}>Contact </a>
                {isAuthenticated && <a href="/Cart" onClick={(e) => handleCategoryClick(e, "/Cart")}>Cart </a>}
                {isAuthenticated ? (
                    <a href="/Login" onClick={handleLogout}>Logout</a>
                ) : (
                    <a href="/Login" onClick={(e) => handleCategoryClick(e, "/Login")}>Login</a>
                )}
            </header>

            {!hideSearchAndCategories && (
                <div>
                    

                    <div className="dropdown">
                        <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <a href="/Cat" onClick={(e) => handleCategoryClick(e, "/Cat")}>Cats</a>
                            <a href="/Rabbit" onClick={(e) => handleCategoryClick(e, "/Rabbit")}>Rabbits</a>
                            <a href="/Guinea" onClick={(e) => handleCategoryClick(e, "/Guinea")}>Guinea pigs</a>
                            <a href="/Chinchilla" onClick={(e) => handleCategoryClick(e, "/Chinchilla")}>Chinchillas</a>
                            <a href="/Hamster" onClick={(e) => handleCategoryClick(e, "/Hamster")}>Hamsters</a>
                        </div>
                    </div>
                </div>
            )}

            {showRandom && <Random />}


            <Routes>
                <Route path="/Sign" element={<Sign />} />
                <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Cart" element={isAuthenticated ? <Cart /> : <Login />} />
                <Route path="/Cat" element={<Cat />} />
                <Route path="/Rabbit" element={<Rabbit />} />
                <Route path="/Guinea" element={<Guinea />} />
                <Route path="/Chinchilla" element={<Chinchilla />} />
                <Route path="/Hamster" element={<Hamster />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
