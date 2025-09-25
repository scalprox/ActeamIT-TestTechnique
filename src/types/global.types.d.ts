interface TrainsData {
    arrivees: TrainArrival[],
    depart: TrainDeparture[]
}

interface Train {
    numero: string
    heure: string
    retard: number
}

interface TrainArrival extends Train {
    provenance: string
}

interface TrainDeparture extends Train {
    destination: string
}