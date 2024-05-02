const render = (id, text) => {
    document.getElementById(id).textContent = text
};

setTimeout(() => {
    try {
        let hero = document.getElementById("heroId").innerText;
        let villain = document.getElementById("villainId").innerText;
        if (hero === villain) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected hero and villain to have different names`
        } else {
            showNext()
        }
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)
