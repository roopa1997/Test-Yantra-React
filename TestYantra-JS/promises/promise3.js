const myPromise1 = new Promise(function (res) {
    setTimeout(function () {
        resolve('myPromise1 executed')
    }, 4000)
})

const myPromise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('myPromise2 executed')
    }, 1000)
})
const promise3 = new Promise(function (reject) {
    setTimeout(function () {
        reject('myPromise3 executed')
    }, 1000)
})

Promise.all([myPromise1, myPromise2, promise3])
    .then(function (response) {
        console.log('response ', response)
    })

