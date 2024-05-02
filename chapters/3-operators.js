setTimeout(() => {
    try {
        let text = document.getElementById("willpower").innerText;
        if (parseInt(text) < 100) {
            showNext()
        } else {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected less than 100, found ${text}`
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)


function render(todaysWillpowerNeeded) {
    document.getElementById("willpower").textContent = todaysWillpowerNeeded + ""
}

