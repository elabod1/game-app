import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const MainContent = ({ selectGenre, onSelectPlatform, selectPlatform, selectSortOrder, onSelectSortOrder }) => {
    return (
        <>
            <div className="main-content col-span-5">
                <h1>Games</h1>
                <div className="filter my-3">
                    <PlatformSelector onSelectPlatform={onSelectPlatform} selectPlatform={selectPlatform} />
                    <SortSelector onSelectSortOrder={onSelectSortOrder} selectSortOrder={selectSortOrder} />
                </div>
                <div className="cover-card">
                    <GameList selectPlatform={selectPlatform} selectGenre={selectGenre} selectSortOrder={selectSortOrder} />
                </div>
            </div>
        </>
    );
};

export default MainContent;
