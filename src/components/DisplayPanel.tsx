import "@/styles/components/DisplayPanel.scss"

interface Props {
    type:"arrival" | "departure"
}

const DisplayPanel = ({type}:Props) => {
    return (
        <div className={`container__panel container__panel--${type}`}>
            <h2>
                {type === "arrival" ? "Tableaux des arrivées": "Tableaux des départs"}
            </h2>
        </div>
    );
};

export default DisplayPanel;