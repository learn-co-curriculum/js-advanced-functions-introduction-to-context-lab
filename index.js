// // Your code here
function createEmployeeRecord(array){
    const employeeRecord = {
        firstName : array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
};

function createEmployeeRecords(arrayOfArrays) {
        let arrayOfEmployees = arrayOfArrays.map(element => createEmployeeRecord(element));
        return arrayOfEmployees;
};

function createTimeInEvent(employeeRecord, dateTime) {
    employeeRecord.timeInEvents.push({
        type: "TimeIn", 
        date: dateTime.split(' ')[0], 
        hour: parseInt(dateTime.split(' ')[1])
    })
    return employeeRecord;
};

function createTimeOutEvent(employeeRecord, dateTime) {
    employeeRecord.timeOutEvents.push({
        type: "TimeOut", 
        date: dateTime.split(' ')[0], 
        hour: parseInt(dateTime.split(' ')[1])
    })
    return employeeRecord;
};

function hoursWorkedOnDate(employeeRecord, date) {
        let timeInEvent = employeeRecord.timeInEvents.find(element => element.date === date)
        let timeOutEvent = employeeRecord.timeOutEvents.find(element => element.date === date)
        return (timeOutEvent.hour - timeInEvent.hour) / 100;
};

function wagesEarnedOnDate(employeeRecord, date) {
        let hours = hoursWorkedOnDate(employeeRecord, date);
        let wage = employeeRecord.payPerHour;
        return (hours * wage);
};

function allWagesFor(employeeRecord) {
    let wages = employeeRecord.timeInEvents.reduce((acc, element) => {
        return acc + wagesEarnedOnDate(employeeRecord, element.date)
    }, 0)
    return wages;
};

function findEmployeeByFirstName(employeeRecords, firstName) {
    let employee = employeeRecords.find(element => element.firstName === firstName);
    return employee;
};

function calculatePayroll(employeeRecords) {
    let payrollTotal = employeeRecords.reduce((acc, element) => {
        return acc + allWagesFor(element)
    }, 0)
    return payrollTotal;
};