const willHappen = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('😊') : reject('😰')
    })
}

willHappen()
    .then(response => console.log(response))

const willHappen2 = () => {
        return new Promise((resolve, reject) => {
            true ?
                setTimeout(() => {
                    resolve('😜')
                }, 2000) :
                reject(new Error('😰'))
        })
    }

willHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error))

Promise.all([willHappen(), willHappen2()])
    .then(response => {
        console.log('List of results', response)
    })
    .catch(error => {
        console.error(error)
    })