import GameList from "./GameList";

const MainContent = ({ selectGenre }) => {
    return (
        <>
            <div className="main-content col-span-5">
                <h1>Games</h1>
                <div className="filter">Filter</div>
                <div className="cover-card">
                    <GameList selectGenre={selectGenre} />
                </div>
            </div>
        </>
    );
};

export default MainContent;
