// Your code here
//Creates standard ouput
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
//Creates array of arrays
const createEmployeeRecords = arrArr => {
    return arrArr.map(array => createEmployeeRecord(array))
}
//fills time in event
const createTimeInEvent = (employeeRecord, timeIn) => {
    const time = timeIn.split(' ')
    let newEvent = {
        type: 'TimeIn',
        hour: parseInt(time[1]),
        date: time[0]
    }
    employeeRecord.timeInEvents.push(newEvent)
    // return employeeRecord
    console.log(timeIn)
}
//fills time out event
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
// returns hours worked
const hoursWorkedOnDate = (record, date) => {
    const timeIn = record.timeInEvents.find(time => date == time.date)
    const timeOut = record.timeOutEvents.find(time => date == time.date)
    const totalHrs = (timeOut.hour - timeIn.hour) / 100
    return totalHrs
}
// returns pay on specific dates
const wagesEarnedOnDate = (employee, payDate) => {
    const payRate = employee.payPerHour
    const hrsWorked = hoursWorkedOnDate(employee, payDate)
    const totalWages = payRate * hrsWorked
    return totalWages
}
// returns pay for all dates
const allWagesFor = (employee) => {
    const dayRecords = employee.timeInEvents
    const days = dayRecords.map(x => x.date)
    const wages = days.map(date => wagesEarnedOnDate(employee, date))
    const allWages = wages.reduce((acc, wages) => acc + wages)
    return(allWages)
    // console.log(days)
}

const calculatePayroll = (recordArr) => {
    let array = []
    const payRoll = recordArr.map(x => x.timeInEvents)
    const dates = payRoll.map(x => x.map(y => y.date))
    const dateArr = dates.reduce((acc, curVal) =>{
        return acc.concat(curVal)
    },[])
    console.log(dateArr.map(res => wagesEarnedOnDate(recordArr, res)))

}
//finds employee by first name
const findEmployeeByFirstName = (array, firstName) => {
    firstName = array.find(x => x.firstName)
    return firstName
}
 


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
    