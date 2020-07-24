console.log('script init at', new Date())
console.time('script')

function slow(index = 0) {
    if(index === 1_000_000) return console.timeEnd('slow')
    return setImmediate(slow, index+1)
}

function timeoutCallback() {
    console.time('timeout callback')
    console.timeEnd('timeout callback')
}

function fast() {
    console.time('fast')
    setTimeout(timeoutCallback, 1000)
    console.timeEnd('fast')
}

fast()
console.log('fast function end at', new Date())
console.time('slow')
slow()
console.log('slow function end at', new Date())
console.timeEnd('script')