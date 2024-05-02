setTimeout(() => {
    try {
        if (
            [...document.querySelectorAll(".check")].findIndex(it =>
                it.getAttribute('hidden') === 'hidden') > -1
        ) {
            document.getElementsByClassName("error")[0].textContent = `please build a prototype chain as described`
            return
        }
        showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)
