const promiseBreaker = function () {
  let resolve, reject
  let promise = new Promise((s, j) => { // eslint-disable-line
    resolve = s
    reject = j
  })
  return Object.assign(promise, {resolve, reject})
}

export {
  promiseBreaker
}
