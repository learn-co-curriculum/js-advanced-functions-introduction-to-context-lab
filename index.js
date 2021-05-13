// Your code here
function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName: array[0], 
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [], 
        timeOutEvents: []
    };
    return employeeRecord;
}   

function createEmployeeRecords(arrayOfArrays) {
    let arrayOfEmployees = []
    for (let array of arrayOfArrays) {
        arrayOfEmployees.push(createEmployeeRecord(array));
    }
    return arrayOfEmployees;
}

function createTimeInEvent(employeeRecord, dateTime) {
    let dateTimeArray = dateTime.split(' ');
    let date = dateTimeArray[0];
    let time = parseInt(dateTimeArray[1])
    employeeRecord.timeInEvents.push({
        'type': 'TimeIn',
        'date': date, 
        'hour': time
    })
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateTime) {
    let dateTimeArray = dateTime.split(' ');
    let date = dateTimeArray[0];
    let time = parseInt(dateTimeArray[1])
    employeeRecord.timeOutEvents.push({
        'type': 'TimeOut',
        'date': date, 
        'hour': time
    })
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord) {
    if (employeeRecord.timeOutEvents['date'] === employeeRecord.timeInEvents['date']) {
        return employeeRecord.timeOutEvents['time'] - employeeRecord.timeInEvents['time']
    }
}