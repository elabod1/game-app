import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-full h-60" src={game.background_image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>
                </a>
                <div className="flex justify-between items-center">
                    <div className="platform">
                        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    </div>
                    <div className="score">
                        <CriticScore score={game.metacritic} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
