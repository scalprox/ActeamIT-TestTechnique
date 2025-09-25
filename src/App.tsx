import DisplayPanel from "@/components/DisplayPanel.tsx";
import ErrorBoundary from "@/components/ErrorBoundary.tsx";
import Modal from "@/components/ui/Modal.tsx";
import {useDisplayPanelContext} from "@/context/DisplayPanelContext.tsx";

const App = () => {
    const lastUpdate = useDisplayPanelContext().lastUpdated;

    return (
        <div className="container__main">
            <h1 className="title__main">Informations aux voyageurs</h1>
            <div className="container__panels">
                <ErrorBoundary
                    fallback={
                        <Modal title="Problème survenu"
                            text="Un problème est survenu lors du chargement des trains. Merci de réessayer plus tard"
                            icon="warning" />
                    }>
                    <DisplayPanel panelType="departure" />
                    <DisplayPanel panelType="arrival" />
                </ErrorBoundary>
            </div>
            <div className="container__footer">
                <p>Les données s'actualise toutes les 30 secondes.</p>
                <span>Dernière mise à jour : {lastUpdate}</span>
            </div>
        </div>
    )
}

export default App
