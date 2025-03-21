import "./CriticScore.css"
const CriticScore = ({ score }) => {
    let color = score > 75 ? "orange" : score > 60 ? "yellow" : "";
    return (
        <span className={`bg-${color}-600 text-${color}-800 score dark:bg-${color} dark:text-${color}-300 border-blue-800 border-solid rounded-lg border-2`}>
            {score}
        </span>
    );
};

export default CriticScore;
