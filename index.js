
const users1 = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
const users2 = ["Jim3","Pam5","Dwight77"];

const users = [...users1, ...users2]

function combineUsers() {
  const combinedObject = { 
    users: []
  }
}
  let today = new Date().toString("M/d/yyyy");

  combinedObject.merge_date = today;

  return combinedObject;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

