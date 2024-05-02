setTimeout(() => {
    try {
        let foods = document.getElementsByClassName("foods")[0]
        let textContent = foods.textContent;
        if (textContent.includes("undefined")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected no 'undefined' food`
            return
        }
        if (!textContent.includes("apple")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'apple'`
            return
        }
        if (!textContent.includes("banana")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'banana' food`
            return
        }
        showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)

function render(food) {
    const p = document.createElement("pre")
    p.textContent = food
    document.getElementsByClassName("foods")[0].append(p)
}

