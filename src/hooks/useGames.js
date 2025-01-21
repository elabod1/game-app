import useData from "./useData";

const useGames = (selectGenre, selectPlatform) =>
    useData(
        "/games",
        {
            params: {
                genres: selectGenre?.id,
                platforms: selectPlatform?.id,
            },
        },
        [selectGenre?.id, selectPlatform?.id]
    );

export default useGames;
