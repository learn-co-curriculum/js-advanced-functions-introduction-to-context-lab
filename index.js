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

const createTimeInEvent = (arrays, timeIn) => {
    const time = timeIn.split(' ')
    let newEvent = {
        type: 'TimeIn',
        hour: time[1],
        date: time[0]
    }
    return newEvent
}
const createTimeOutEvent = () => {}
const hoursWorkedOnDate = () => {}
const wagesEarnedOnDate = () => {}
const allWagesFor = () => {}
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
    