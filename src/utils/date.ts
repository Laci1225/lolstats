import {secondsToHours, secondsToMinutes} from "date-fns";

export const formatDate = (date: number, shortFormat: boolean) => {
    const hour = secondsToHours(date);
    const min = secondsToMinutes(date) - hour * 60;
    const sec = date - hour * 3600 - min * 60;
    if (shortFormat)
        return hour ? `${hour}h ${min}m ${sec}s` : `${min}m ${sec}s`
    return hour ? `${hour} hour ${min} min ${sec} sec` : `${min} min ${sec} sec`;
}