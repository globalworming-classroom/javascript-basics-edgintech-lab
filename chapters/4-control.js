setTimeout(() => {
    try {
        let birds = document.getElementsByClassName("bird").length
        if (!birds) {
            document.getElementById("next").hidden = false
        } else {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected no birds, found ${birds}`
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)

function numberOfBirds() {
    return document.getElementsByClassName("bird").length;
}

function removeBird() {
    document.getElementsByClassName("bird").item(0).remove()
}
