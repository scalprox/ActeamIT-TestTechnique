import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import {getActualTime} from "@/utils";

interface DisplayPanelContextProps {
    trains: TrainsDataQuery
    lastUpdated:string
}

interface TrainsDataQuery {
    isLoading: boolean,
    isError: boolean,
    data: TrainsData | null
}

const DisplayPanelContext = createContext<DisplayPanelContextProps | null>(null);

export const useDisplayPanelContext = () => {
    const context = useContext(DisplayPanelContext);
    if(context === null) throw new Error("useDisplayPanelContext must be used in the DisplayPanelProvider");

    return context
}

export const DisplayPanelProvider = ({children}: { children: ReactNode })=>{
    const [trains, setTrains] = useState<TrainsDataQuery>({isError: false, isLoading: false, data: null})
    const [lastUpdated, setLastUpdated] = useState<string>("")

    // Load trains data
    useEffect(() => {
        fetchTrains()
        const AutoFetchDataInterval = setInterval(fetchTrains,30000)

        return ()=>{
            clearInterval(AutoFetchDataInterval)
        }
    }, []);

    const fetchTrains = async () => {
        if (trains.isLoading) return
        setTrains({isLoading: true, isError: false, data: null});
        try {
            const trains = await fetch("/data/trains.json")
            const data: TrainsData = await trains.json()
            if ("arrivees" in data && "depart" in data) {
                setTrains({isLoading: false, isError: false, data})
                setLastUpdated(getActualTime())
            } else {
                setTrains({isLoading: false, isError: true, data: null})
            }
        } catch (error) {
            setTrains({isLoading: false, isError: true, data: null})
        }
    }

    return (
        <DisplayPanelContext.Provider value={{trains, lastUpdated}} >
            {children}
        </DisplayPanelContext.Provider>
    )
};