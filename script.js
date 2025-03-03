//your JS code here. If required.
function isSameType(value1, value2) {
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return Number.isNaN(value1) && Number.isNaN(value2);
    }
    return typeof value1 === typeof value2;
}

function daysOfAYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 366;
    }
    return 365;
}