import DisplayPanel from "@/components/DisplayPanel.tsx";
import {getActualTime} from "@/utils";

const App = () => {

    return (
        <div className="container__main">
            <h1 className="title__main">Informations aux voyageurs</h1>
            <div className="container__panels">
                <DisplayPanel panelType="departure" />
                <DisplayPanel panelType="arrival" />
            </div>
            <div className="container__footer">
                <p>Pensez à rafraîchir régulièrement cette page afin d'obtenir les dernières mises à jour.</p>
                <span>Dernière mise à jour : {getActualTime()}</span>
            </div>
        </div>
    )
}

export default App
