export function checkUid(uid) {
  // const uid = localStorage.getItem('uid');
  if (!uid) {
    return true;
  }
  return false;
}

export function checkErrors(res) {
  if (!res || (res && res.errors)) {
    return true;
  }
  return false;
}
