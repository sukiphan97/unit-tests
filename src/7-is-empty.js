export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === "") {
      return true
    } else {
      return false
    }

  } else if (type === Array) {
    if (stringArrayOrObject === []) {
      return true
    } else {
      return false
    }
  } else if (type === Object) {
    if (stringArrayOrObject === {}) {
      return true
    } else {
      return false
    }
  }

}
