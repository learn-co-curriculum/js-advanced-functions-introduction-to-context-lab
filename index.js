// // Your code here
function createEmployeeRecord(employeeInfo){
    const employeeRecord = {
        firstName : employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}
function createEmployeeRecords(arrayOfRecords){
    const employeeRecords = arrayOfRecords.map(recordArr => {
        const recordObj = createEmployeeRecord(recordArr);
        return recordObj;
    })
    return employeeRecords;
}
function createTimeInEvent(empRecObj, date){
    empRecObj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    }) 
    return empRecObj;
}
function createTimeOutEvent(empRecObj, date){
    empRecObj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    }) 
    return empRecObj;
}
function hoursWorkedOnDate(empRecObj, TimeIndate){
    let timeInEvent = empRecObj.timeInEvents.find(event => {
        return event.date === TimeIndate;
    })
    let timeOutEvent = empRecObj.timeOutEvents.find(event => {
        return event.date === TimeIndate;
    })
    let hoursWorked = Math.abs(timeInEvent.hour - timeOutEvent.hour) / 100;
    return hoursWorked
}
function wagesEarnedOnDate(empRecObj, TimeIndate){
    let hours = hoursWorkedOnDate(empRecObj,TimeIndate)
    return hours * empRecObj.payPerHour;
}
function  allWagesFor(empRecObj){
    let wages = empRecObj.timeInEvents.reduce((acc,event) => {
        return acc + wagesEarnedOnDate(empRecObj, event.date)
    },0) 
    return wages;
}
function findEmployeeByFirstName(empRecords, firstName){
    let empRecord = empRecords.find(record => {
        return record.firstName === firstName;
    })
    return empRecord;
}
function calculatePayroll(empRecords){
    let payrollTotal = empRecords.reduce((acc, record) => {
        return acc + allWagesFor(record);
    },0)
    return payrollTotal;
}
// function createEmployeeRecord(array) {
//     let employeeRecord = {
//         firstName: array[0], 
//         familyName: array[1], 
//         title: array[2], 
//         payPerHour: array[3], 
//         timeInEvents: [], 
//         timeOutEvents: []
//     };
//     return employeeRecord;
// }   

// function createEmployeeRecords(arrayOfArrays) {
//     let arrayOfEmployees = arrayOfArrays.map(element => createEmployeeRecord(element));
//     return arrayOfEmployees;
// }

// function createTimeInEvent(employeeRecord, dateTime) {
//     let dateTimeArray = dateTime.split(' ');
//     let date = dateTimeArray[0];
//     let time = parseInt(dateTimeArray[1])
//     employeeRecord.timeInEvents.push({
//         'type': 'TimeIn',
//         'date': date, 
//         'hour': time
//     })
//     return employeeRecord;
// }

// function createTimeOutEvent(employeeRecord, dateTime) {
//     let dateTimeArray = dateTime.split(' ');
//     let date = dateTimeArray[0];
//     let time = parseInt(dateTimeArray[1])
//     employeeRecord.timeOutEvents.push({
//         'type': 'TimeOut',
//         'date': date, 
//         'hour': time
//     })
//     return employeeRecord;
// }

// //given employee record and date to check hours work
// //employee record has timeIn and timeOut events
// //find correct timeIn event for given date and correct timeOut for given date
// //subtract out from in
// function hoursWorkedOnDate(employeeRecord, date) {
//     let timeInEvent = employeeRecord.timeInEvents.find(element => element['date'] === date)
//     let timeOutEvent = employeeRecord.timeOutEvents.find(element => element['date'] === date)
//     return (timeOutEvent['hour'] - timeInEvent['hour']) / 100;
// }
        
// function wagesEarnedOnDate(employeeRecord, date) {
//     let hours = hoursWorkedOnDate(employeeRecord, date);
//     let wage = employeeRecord.payPerHour;
//     return (hours * wage);
// }

// function allWagesFor(employeeRecord) {
//     let wages = 0; //this becomes an accumulator
//     employeeRecord.timeInEvents.forEach(function(element) {
//         wages = wages + wagesEarnedOnDate(employeeRecord, element['date'])
//     });
//     return wages;
// }

// function calculatePayroll(arrayOfEmployees) {
//     let sample = arrayOfEmployees.reduce((acc, element) => allWagesFor(element), 0);
//     console.log(sample)
// }
