import "@/styles/components/DisplayPanel.scss"
import PanelElement from "@/components/PanelElement.tsx";
import {orderTrain} from "@/utils";
import Train from "@/assets/icons/train.tsx";
import {useEffect, useState} from "react";
import {useDisplayPanelContext} from "@/context/DisplayPanelContext.tsx";
import Warning from "@/assets/icons/warning.tsx";

interface Props {
    panelType: "arrival" | "departure"
}

const DisplayPanel = ({panelType}: Props) => {
    const trainsData = useDisplayPanelContext().trains;
    const [filteredTrains, setFilteredTrains] = useState<TrainArrival[] | TrainDeparture[]>([])

    // Filter and order trains
    useEffect(() => {
        if (trainsData.isError || trainsData.isLoading || trainsData.data === null) return
        setFilteredTrains(orderTrain(panelType === "arrival" ? trainsData.data.arrivees : trainsData.data.depart))
    }, [trainsData]);

    return (
        <div className={`container__panel container__panel--${panelType}`}>
            <h2 className="panel__title">
                {panelType === "arrival" ? "Prochaines arrivées" : "Prochains départs"}
                <Train />
            </h2>
            <ol className="panel__list">
                {
                    trainsData.isLoading ? (
                        <span className="panel__empty">Chargement...</span>
                    ) : (
                        trainsData.isError ? (
                            <span className="panel__empty"><Warning width={45} height={45} /> Impossible de récupérer les trains, réessayer plus tard</span>
                        ) : (filteredTrains.length > 0 ? (
                            filteredTrains.map((train, index) => (
                                <PanelElement key={index} train={train} />
                            ))
                        ) : (
                            <span className="panel__empty">Pas de train attendu..</span>
                        ))
                    )
                }
            </ol>
        </div>
    );
};

export default DisplayPanel;