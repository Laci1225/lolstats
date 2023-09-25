import {secondsToHours, secondsToMinutes} from "date-fns";

export const formatDate = (date: number) => {
    const hour = secondsToHours(date);
    const min = secondsToMinutes(date) - hour * 60;
    const sec = date - hour * 3600 - min * 60;
    return hour ? `${hour} hour ${min} min ${sec} sec` : `${min} min ${sec} sec`;
}