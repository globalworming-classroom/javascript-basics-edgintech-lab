setTimeout(() => {
    try {
        if (document.getElementsByClassName("value-size")[0].textContent !== "big") {
            document.getElementsByClassName("error")[0].textContent = `test failed, i'd like to have a "big" pizza`
            return
        }
        if (document.getElementsByClassName("value-slices")[0].textContent !== "8") {
            document.getElementsByClassName("error")[0].textContent = `test failed, i'd like to have a "8" slices`
            return
        }

       showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)
function render(pizza) {
    const entries = Object.entries(pizza);
    for (const entry of entries) {
        const p = document.createElement("p")
        const key = document.createElement("b")
        key.className = "key-" + entry[0]
        key.textContent = entry[0]
        const value = document.createElement("span")
        value.className = "value-" + entry[0]
        value.textContent = entry[1]
        p.append(key, ": ", value)
        document.getElementsByClassName("pizza")[0].append(p)
    }
}
