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
    let dateSplit = dateV[2] + ',' + MonthNames[parseInt(dateV[1])-1] + ' ' + dateV[0];
    return  splitDateTime[1] +' (' + dateSplit + ')';
}