const runCatching = (f) => {
    try {
        f()
    } catch (e) {
        if (document.getElementById("exception")) {
            document.getElementById("exception").textContent = e.message + "\n\n" + e.stack
        } else {
            document.getElementsByClassName("jserror")[0].textContent = e.message + "\n\n" + e.stack
        }
    }
}

const showNext = () => {
    document.getElementById("next").hidden = false
}