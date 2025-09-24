import "@/styles/components/PanelElement.scss"

interface Props {
    train: TrainArrival | TrainDeparture
}

const PanelElement = ({train}: Props) => {
    return (
        <li className="panel__element">
            <div className="panel__schedule">
                <span className="panel__clock">{train.heure.replace(":", "h")}</span>
                <div className={`panel__delay ${train.retard > 0 ? "panel__delay--delayed" : undefined}`}>{train.retard === 0 ? "à l'heure" : (
                    <>
                        <span>retard</span>
                        <span>+{train.retard} min</span>
                    </>
                )}</div>
            </div>
            <div className="panel__information">
                <span className="panel__destination">{"destination" in train ? train.destination : train.provenance}</span>
                <span className="panel__trainId">{train.numero}</span>
            </div>
        </li>
    );
};

export default PanelElement;