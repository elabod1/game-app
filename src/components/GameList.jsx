import { useEffect, useState } from "react";

import apiClient from "../services/api-client";

const GameList = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        apiClient
            .get("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    });

    return (
        <>
            {error && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Danger alert!</span> {error}
                </div>
            )}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameList;
