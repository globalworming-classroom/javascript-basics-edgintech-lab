setTimeout(() => {
    try {
        let error = document.getElementById("exception").textContent;
        if (!error.includes("ServerError")) {
            document.getElementsByClassName("error")[0].textContent = "expected ServerError to be thrown"
            return
        }
        document.getElementById("next").hidden = false
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)
