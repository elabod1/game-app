import GenreList from "./GenreList/GenreList";

const SideBar = ({ onSelectGenre }) => {
    return (
        <>
            <div className="w-40 ">
                <h2 className="m-1 text-blue-700">Genres</h2>
                <GenreList onSelectGenre={onSelectGenre} />
            </div>
        </>
    );
};

export default SideBar;
