import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore/CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../PlatformIconList";
import "./GameCard.css"

const GameCard = ({ game }) => {
    return (
        <div className="heroo-div shadow dark:bg-[#08223c] dark:border-gray-900 hover:bg-gray-300 dark:hover:bg-blue-700 ">
            <a href="#">
                <img className="img-game" src={getCroppedImageUrl(game.background_image)} alt="" />
            </a>
            <div className="p-5 mb-2">
                <div className="flex justify-between items-center">
                    <div className="platform">
                        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    </div>
                    <div className="score">
                        <CriticScore score={game.metacritic} />
                    </div>
                </div>
                <a href="#">
                    <h5 className=" text-gray-900 dark:text-white">
                        {game.name} <Emoji rating={game.rating_top} />{" "}
                    </h5>
                </a>
            </div>
        </div>
    );
};

export default GameCard;
