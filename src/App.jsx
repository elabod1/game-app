import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar";
import LoginPage from "./components/login/LoginPage";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [gameQuery, setGameQuery] = useState({});

    const root = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!isAuthenticated) {
        return( <LoginPage onLogin={() => setIsAuthenticated(true)} />
    );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <NavBar toggleTheme={toggleTheme} theme={theme} onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            <div className="grid grid-cols-6 gap-4">
                <SideBar onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
                <MainContent
                    selectPlatform={gameQuery.platform}
                    selectSortOrder={gameQuery.sortOrder}
                    selectGenre={gameQuery.genre}
                    searchText={gameQuery.searchText}
                    onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                    onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                />
            </div>
        </div>
    );
}

export default App;
