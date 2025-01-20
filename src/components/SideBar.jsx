import GenreList from "./GenreList";

const SideBar = () => {
    return (
        <>
            <div className="sidebar-app ">
                <h3 className="text-bold">Genres</h3>
                <GenreList />
            </div>
        </>
    );
};

export default SideBar;
