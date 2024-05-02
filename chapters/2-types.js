function render(types) {
    types.forEach(entry => {
        document.getElementById(typeof entry).textContent = '✅'
    })
}

setTimeout(() => {
    try {
        const checks = Array.from(document.getElementsByClassName("check")).map(it => it.textContent).join('')
        if (checks !== "✅✅✅✅") {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected 4 ✅, found only ${checks.length} ✅`
        } else {
            showNext()
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)
