import "@/styles/components/DisplayPanel.scss"
import * as TrainsData from "@/data/trains.json"
import PanelElement from "@/components/PanelElement.tsx";
import {orderTrain} from "@/utils";
import Train from "@/assets/icons/train.tsx";

interface Props {
    panelType:"arrival" | "departure"
}

const DisplayPanel = ({panelType}:Props) => {

    const filteredTrains = panelType === "arrival" ? orderTrain(TrainsData.arrivees) : orderTrain(TrainsData.depart)

    return (
        <div className={`container__panel container__panel--${panelType}`}>
            <h2 className="panel__title">
                {panelType === "arrival" ? "Prochaines arrivées": "Prochains départs"}
                <Train/>
            </h2>
            <ul className="panel__list">
                {filteredTrains.map((train, index) => (
                    <PanelElement key={index} train={train}/>
                ))}
            </ul>
        </div>
    );
};

export default DisplayPanel;