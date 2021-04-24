// Your code here
const createEmployeeRecord = array => {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
};
return testEmployee
};

const createEmployeeRecords = arrArr => {
    return arrArr.map(array => createEmployeeRecord(array))
}

const createTimeInEvent = (employeeRecord, timeIn) => {
    const time = timeIn.split(' ')
    let newEvent = {
        type: 'TimeIn',
        hour: parseInt(time[1]),
        date: time[0]
    }
    employeeRecord.timeInEvents.push(newEvent)
    return employeeRecord
}

const createTimeOutEvent = (employeeRecord, timeOut) => {
    const time = timeOut.split(' ')
    let newEvent = {
        type: 'TimeOut',
        hour: parseInt(time[1]),
        date: time[0]
    }
    employeeRecord.timeOutEvents.push(newEvent)
    return employeeRecord
}
const hoursWorkedOnDate = (record, date) => {
    const timeIn = record.timeInEvents[0].hour
    const timeOut = record.timeOutEvents[0].hour
    const hrsWorked = (timeOut - timeIn) / 100
    return(hrsWorked)
}
const wagesEarnedOnDate = (dayPay, date) => {
    const timeIn = dayPay.timeInEvents[0].hour
    const timeOut = dayPay.timeOutEvents[0].hour
    const hrsWorked = (timeOut - timeIn) / 100
    const payRate = dayPay.payPerHour
    return payRate * hrsWorked
}
const allWagesFor = (times) => {
    const dayIn = times.timeInEvents[0].date
    const dayOut = times.timeInEvents[1].date
    const timeIn = dayIn.timeInEvents[0].hour
    const timeOut = dayOut.timeOutEvents[0].hour

    const payRate = times.payPerHour
    console.log(timeIn)
    //return payRate * hrsWorked
}
const calculatePayroll = () => {}
const findEmployeeByFirstName = () => {}



  // let employeeRecords = 
    // {
    //     'firstName': '',
    //     'familyName': '',
    //     'title': '',
    //     'payPerHour': ${value}
    // }
    // const render = employeeRecords.map(record =>
    //     if(record.firstName === '')
    //     )

    // let dataEmployees = [
    //     {
    //         'firstName': 'Thor',
    //         'familyName': 'Odinsson',
    //         'title': 'Electrical Engineer',
    //         'payPerHour': 45     
    //     },
    //     {
    //         'firstName': 'Loki',
    //         'familyName': 'Laufrey-Odinson',
    //         'title': 'HR Representative',
    //         'payPerHour': 35     
    //     },
    //     {
    //         'firstName': 'Natalia',
    //         'familyName': 'Romanov',
    //         'title': 'CEO',
    //         'payPerHour': 150     
    //     },
    //     {
    //         'firstName': 'Darcey',
    //         'familyName': 'Lewis',
    //         'title': 'Intern',
    //         'payPerHour': 15     
    //     },
    //     {
    //         'firstName': 'Jarvis',
    //         'familyName': 'Stark',
    //         'title': 'CIO',
    //         'payPerHour': 125     
    //     },
    //     {
    //         'firstName': 'Anthony',
    //         'familyName': 'Stark',
    //         'title': 'Angel Investor',
    //         'payPerHour': 300     
    //     },
    //     {
    //         'firstName': 'Byron',
    //         'familyName': 'Poodle',
    //         'title': 'Mascot',
    //         'payPerHour': 3     
    //     },
    //     {
    //         'firstName': 'Julius',
    //         'familyName': 'Ceasar',
    //         'title': 'General',
    //         'payPerHour': 27     
    //     }, 
    //     {
    //         'firstName': 'Rafiki',
    //         'familyName': '',
    //         'title': 'Aide',
    //         'payPerHour': 10     
    //     },
    //     {
    //         'firstName': 'Simba',
    //         'familyName': '',
    //         'title': 'King',
    //         'payPerHour': 100     
    //     }
    //   ]
    