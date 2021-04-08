const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('🤘🏽'), 3000)
            : reject(new Error('💩'))
    })
}

const doSomething = async () => {
    const something = await asyncFunction()
    console.log('1', something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    try {
        const something = await asyncFunction()
        console.log('2', something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1')
anotherFunction()
console.log('After 1')