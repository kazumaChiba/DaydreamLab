import moment from "moment/moment";

export function formatDate(date, type) {
    //2017-01-15 15:00:00
    switch (type){
        case 'YYYY/MM/DD':
            return moment(date, "YYYY-MM-DD HH:mm:ss").format("YYYY/MM/DD")
            break;
        default:
            return moment(date, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY H:MM")
    }
};
