import Logo from "./Logo";

const NavBar = () => {
    return (
        <>
            <div className="navbar-app">
                <Logo text="gamp app header" className="logo-heder" />
                <div>search</div>
                <div>Mode</div>
            </div>
        </>
    );
};

export default NavBar;
