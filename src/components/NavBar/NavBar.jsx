import Logo from "../Logo";
import LogoImag from "../../assets/images/logo.webp";
import SearchInput from "../SearchInput";
import './NavBar.css'


const NavBar = ({ toggleTheme, theme, onSearch }) => {
    return (
        <>
            <div className="navbar-app  border-b-blue-400 prim-div">
                {/* Logo Section */}

                <div className="cover-logo col-span-1">
                    <Logo image={LogoImag} text="gamp app header" className="logo-heder" />
                </div>

                {/* Search Section */}
                <div className="cover-search search-div">
                    <SearchInput onSearch={onSearch} />
                </div>

                {/* Theme Toggle Section */}
                <div className="theme-mode col-span-2 flex justify-center">
                    <label className="inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} checked={theme === "dark"} />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{theme === "light" ? "light" : "Dark"}</span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default NavBar;
