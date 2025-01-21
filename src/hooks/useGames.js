import useData from "./useData";

const useGames = (selectGenre) => useData("/games", { params: { genres: selectGenre?.id } }, [selectGenre?.id]);

export default useGames;
