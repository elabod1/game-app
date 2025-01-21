import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";

const MainContent = ({ selectGenre }) => {
    return (
        <>
            <div className="main-content col-span-5">
                <h1>Games</h1>
                <div className="filter my-3">
                    <PlatformSelector />
                </div>
                <div className="cover-card">
                    <GameList selectGenre={selectGenre} />
                </div>
            </div>
        </>
    );
};

export default MainContent;
