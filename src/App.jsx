import { useState } from "react";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useEffect } from "react";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 ">
                <NavBar toggleTheme={toggleTheme} theme={theme} />
                <div className="grid grid-cols-6 gap-4">
                    <SideBar />
                    <MainContent />
                </div>
            </div>
        </>
    );
}

export default App;
