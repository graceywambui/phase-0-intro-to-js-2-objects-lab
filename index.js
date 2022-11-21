// Write your solution in this file!
const driver = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]:value});
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({},employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    Object.assign({}, driver);
    delete driver[key];
    return driver;
}