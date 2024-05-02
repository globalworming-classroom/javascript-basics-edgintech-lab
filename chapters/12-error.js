setTimeout(() => {
    try {
        if (!document.getElementById("exception").textContent.includes("Error")) {
            document.getElementsByClassName("error")[0].textContent = "expected error to be thrown"
            return
        }
        document.getElementById("next").hidden = false
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)