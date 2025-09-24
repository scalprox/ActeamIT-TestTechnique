export function orderTrain(train: TrainArrival[] | TrainDeparture[]): TrainArrival[] | TrainDeparture[] {
    return train.sort((a, b) => {
        const timeToMinutes = (timeStr: string) => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            return hours * 60 + minutes;
        };

        return timeToMinutes(a.heure) - timeToMinutes(b.heure);
    });
}

export function getActualTime(): string {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hours}h${minutes < 10 ? "0" + minutes : minutes}`;
}
