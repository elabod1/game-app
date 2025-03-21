import "./GameCardSkeleton.css"
const GameCardSkeleton = () => {
    return (
        <div className=" hero-div  shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="prim-div animate-pulse"></div>
            <div className="p-5">
                <div className="h-6 bg-gray-300 rounded-md mb-4 w-3/4 animate-pulse"></div>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-10 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default GameCardSkeleton;
