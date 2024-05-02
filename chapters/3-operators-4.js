function render(eatPizza) {
    document.getElementById("eat").textContent = eatPizza ? "yes" : "no"
}

setTimeout(() => {
    try {
        let text = document.getElementById("eat").innerText;
        if (text === "yes") {
            showNext()
        } else {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected "yes", found ${text}`
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)