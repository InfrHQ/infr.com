function postConvertTimestamp(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp * 1000); // Multiplied by 1000 because JS works in milliseconds

    // Get the date string for 'datetime' key
    const dateString = date.toISOString().split('T')[0];

    // Convert date to human-readable title format
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
        }
    };
    const title = `${months[date.getMonth()]} ${date.getDate()}${ordinalSuffix(date.getDate())}, ${date.getFullYear()}`;

    // Return the desired dictionary structure
    return {
        datetime: dateString,
        title: title,
    };
}

function timeAgo(unixTimestamp) {
    const seconds = Math.floor(Date.now() / 1000) - unixTimestamp;
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30; // Approximation
    const year = day * 365; // Approximation

    if (seconds < minute) {
        return 'just now';
    } else if (seconds < hour) {
        const minutes = Math.floor(seconds / minute);
        return minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
    } else if (seconds < day) {
        const hours = Math.floor(seconds / hour);
        return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    } else if (seconds < week) {
        const days = Math.floor(seconds / day);
        return days + ' day' + (days > 1 ? 's' : '') + ' ago';
    } else if (seconds < month) {
        const weeks = Math.floor(seconds / week);
        return weeks + ' week' + (weeks > 1 ? 's' : '') + ' ago';
    } else if (seconds < year) {
        const months = Math.floor(seconds / month);
        return months + ' month' + (months > 1 ? 's' : '') + ' ago';
    } else {
        const years = Math.floor(seconds / year);
        return years + ' year' + (years > 1 ? 's' : '') + ' ago';
    }
}

export { postConvertTimestamp, timeAgo };
