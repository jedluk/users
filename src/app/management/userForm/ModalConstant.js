const cases = {
  ADD: "ADDED",
  NOT_VALID: "NOT_VALID",
  UPDATED: "UPDATED",
  DELETED: "DELETED",
  ERROR: "ERROR"
};
const userAdded = {
  title: "User added",
  body: "User has been successfully added"
};
const userNotValid = {
  title: "Missing fields",
  body: "Some fields are missing. All fields are required"
};
const userDeleted = {
  title: "User deleted",
  body: "User has been successfully deleted"
};
const userUpdated = {
  title: "User updated",
  body: "User has been successfully updated"
};
const error = {
  title: "Oooooops",
  body: "An error has occured, please try once again!"
};

export default {
  cases,
  userAdded,
  userNotValid,
  userDeleted,
  userUpdated,
  error
};
