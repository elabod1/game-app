import useData from "./useData";

const useGames = (selectGenre, selectPlatform, selectSortOrder) =>
    useData(
        "/games",
        {
            params: {
                genres: selectGenre?.id,
                platforms: selectPlatform?.id,
                ordering: selectSortOrder,
            },
        },
        [selectGenre?.id, selectPlatform?.id, selectSortOrder]
    );

export default useGames;
