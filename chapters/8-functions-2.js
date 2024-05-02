setTimeout(() => {
    try {
        let guests = [...document.getElementsByClassName("guest")]
        let textContent = guests.map(it => it.textContent).join(" ");
        if (textContent.includes("undefined")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, 'anonymous' should be the default name`
            return
        }
        if (!textContent.includes("Name: anonymous")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'Name: anonymous'`
            return
        }
        if (textContent.includes("Name: fish,")) {
            document.getElementsByClassName("error")[0].textContent = `unexpected 'Name: fish', please pass a name`
            return
        }
        showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)