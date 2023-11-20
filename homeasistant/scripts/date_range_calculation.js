//such function will be used to identify is the date within the range
//mainly used to identify is the AC will work in the cool or heat mode
function isCurrentDateInRange(fromStr, toStr) {
    // Map for month names to month numbers
    const monthNames = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };

    // Function to parse date string and create a date object
    function parseDate(dateStr) {
        const parts = dateStr.split(' ');
        if (parts.length !== 2) {
            throw new Error('Invalid date format. Use "MMM DD" format, e.g., "Nov 13".');
        }
        const month = monthNames[parts[0]];
        if (month === undefined) {
            throw new Error('Invalid month name.');
        }
        const day = parseInt(parts[1], 10);

        const date = new Date();
        date.setFullYear(date.getFullYear(), month, day);
        date.setHours(0, 0, 0, 0); // Set time to midnight
        return date;
    }

    // Parse from and to dates
    const fromDate = parseDate(fromStr);
    const toDate = parseDate(toStr);

    // Get the current date in user's local timezone
    const currentDate = new Date();

    // Check if the current date is within the range
    return currentDate >= fromDate && currentDate <= toDate;
}

// Example usage
// Desired days of cool mode
console.log(isCurrentDateInRange("May 5", "Oct 15"));