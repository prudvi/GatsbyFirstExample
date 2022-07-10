let MonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const parseDate = (dateValue: string) => {
    let splitDateTime = dateValue.split('T');
    let dateV = splitDateTime[0].split('-');
    let dateSplit = dateV[2] + ',' + MonthNames[parseInt(dateV[1]) - 1] + ' ' + dateV[0];
    return '(' + dateSplit + ') ' + splitDateTime[1] ;
}

let MonthlyDays = [
    { key: 'Jan', value: 31, id: 0 },
    { key: 'Feb', value: 28, id: 1 },
    { key: 'Mar', value: 31, id: 2 },
    { key: 'Apr', value: 30, id: 3 },
    { key: 'May', value: 31, id: 4 },
    { key: 'Jun', value: 30, id: 5 },
    { key: 'Jul', value: 31, id: 6 },
    { key: 'Aug', value: 31, id: 7 },
    { key: 'Sep', value: 30, id: 8 },
    { key: 'Oct', value: 31, id: 9 },
    { key: 'Nov', value: 30, id: 10 },
    { key: 'Dec', value: 31, id: 11 }
];

export const pastDays = (arrayCount: any) => {
    return [...Array(arrayCount).keys()].map(index => {
        const date = new Date();
        date.setDate(date.getDate() - index);
        let todayNumber = date.getDate() < 10 ? '0' + date.getDate(): date.getDate();
        const currentMonth = date.getMonth() + 1;
        let todayMonth: any = currentMonth  < 10 ? '0' + currentMonth: currentMonth;
        let todayYear = date.getFullYear();
        return {
            label: todayNumber + ', ' + MonthlyDays[parseInt(todayMonth)-1].key,
            value: todayYear + '-' + todayMonth + '-' + todayNumber
        };
    });
}