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

//given employee record and date to check hours work
//employee record has timeIn and timeOut events
//find correct timeIn event for given date and correct timeOut for given date
//subtract out from in
function hoursWorkedOnDate(employeeRecord, date) {
    let timeInEvent = employeeRecord.timeInEvents.find(element => element['date'] === date)
    let timeOutEvent = employeeRecord.timeOutEvents.find(element => element['date'] === date)
    return (timeOutEvent['hour'] - timeInEvent['hour']) / 100;
}
        
function wagesEarnedOnDate(employeeRecord, date) {
    let timeInEvent = employeeRecord.timeInEvents.find(element => element['date'] === date)
    let timeOutEvent = employeeRecord.timeOutEvents.find(element => element['date'] === date)
    let totalHours = (timeOutEvent['hour'] - timeInEvent['hour']) / 100;
    return totalHours * employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord) {
    let timeInArray = employeeRecord.timeInEvents
    let timeOutArray = employeeRecord.timeOutEvents
    console.log('TIME IN:', timeInArray, 'TIME OUT:', timeOutArray);
    let matchingDatesArray = timeInArray.filter(element => timeOutArray.includes(element['date']))
    console.log('MATCHING', matchingDatesArray)
}
