export const checkObject = (obj: any, value: string): boolean => {
  let match: boolean = false
  const checkProperties = (obj: any, value: string): void => {
    for (const property in obj) {
      if (match) {
        break
      } else if (
        typeof obj[property] === 'string' &&
        obj[property].toLowerCase().includes(value.toLowerCase())
      ) {
        match = true
      } else if (typeof obj[property] === 'object') {
        checkProperties(obj[property], value)
      } else {
        continue
      }
    }
  }
  checkProperties(obj, value)
  return match
}
