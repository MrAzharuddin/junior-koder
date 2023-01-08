import validator from "validator";

function mobileCheck(mobile) {
  if (validator.isMobilePhone(mobile) && mobile.length === 10) {
    return true;
  }
  return false;
}

function notNull(value) {
  if (value !== "") {
    return true;
  }
  return false;
}
export function validateForm(
  studentName,
  parentName,
  phone,
  grade,
  school,
  laptop
) {
  if (
    notNull(studentName) &&
    notNull(parentName) &&
    mobileCheck(phone) &&
    notNull(grade) &&
    notNull(school) &&
    notNull(laptop)
  ) {
    return true;
  }
  return false;
}
