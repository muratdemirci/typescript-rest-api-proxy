const { readFileSync } = require('fs')

export function jsonReader(path) {
  const data = readFileSync(path)
  return JSON.parse(data)
}
