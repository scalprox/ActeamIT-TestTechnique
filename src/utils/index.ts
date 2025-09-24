/**
 * Sorts an array of train arrivals or departures by their time in ascending order.
 * @param {TrainArrival[] | TrainDeparture[]} train - The array of train arrival or departure objects to be sorted. Each object must include a `heure` property representing the time as a string in the "HH:mm" format.
 * @return {TrainArrival[] | TrainDeparture[]} The sorted array of train arrival or departure objects.
 */
export function orderTrain(train: TrainArrival[] | TrainDeparture[]): TrainArrival[] | TrainDeparture[] {
    return train.sort((a, b) => {
        const timeToMinutes = (timeStr: string) => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            return hours * 60 + minutes;
        };

        return timeToMinutes(a.heure) - timeToMinutes(b.heure);
    });
}

/**
 * Retrieves the current time in a formatted string representing hours and minutes.
 * @return {string} A string representing the current time in the format "HhMM" where H is the hour and MM is the minute.
 */
export function getActualTime(): string {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hours}h${minutes < 10 ? "0" + minutes : minutes}`;
}
