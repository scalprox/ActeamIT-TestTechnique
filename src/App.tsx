import DisplayPanel from "@/components/DisplayPanel.tsx";

const App = () => {

    return (
        <div className="container__main">
            <h1 className="title__main">Informations aux voyageurs</h1>
            <div className="container__panels">
                <DisplayPanel type="arrival"/>
                <DisplayPanel type="departure"/>
            </div>
        </div>
    )
}

export default App
