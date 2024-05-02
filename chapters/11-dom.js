const state = {
    heroes: ["lightning", "thunder"],
    villains: ["fire", "brimstone"],
    tab: "heroes"
}

const app = {
    render() {
        let e = document.getElementById("app");
        [...e.children].forEach(child => child.remove())
        const tabSwitch = document.createElement("button")
        tabSwitch.textContent = state.tab
        tabSwitch.onclick = function (ev) {
            state.tab = state.tab === "heroes" ? "villains" : "heroes"
            app.render()
        }
        const list = document.createElement("ol");
        let persons = state.tab === "heroes" ? state.heroes : state.villains;
        persons.forEach(s => {
            const listItem = document.createElement("li")
            listItem.textContent = s
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "❌"
            deleteButton.onclick = () => {
                delete persons[persons.indexOf(s)]
                app.render()
            }
            listItem.append(deleteButton)
            list.append(listItem)
        })
        e.append(tabSwitch, list)
    }
}



function addSuccess(s) {
    const item = document.createElement("li")
    item.textContent = "✅ " + s
    document.getElementById("tests").append(item)
}


const RunTest = {
    test1() {
        try {
            const switchButton = () => document.querySelectorAll("#app button")[0];

            (function appInitialStateShouldShowButtonText(t) {
                const buttonText = switchButton().textContent
                if (buttonText !== t) {
                    throw new Error("expecting button to say 'heroes'")
                }
                addSuccess("appInitialStateShouldShowButtonText")
            })("heroes");


            (function appInitialStateShouldShowTwoEntries() {
                let numberOfListItems = document.querySelectorAll("#app li").length;
                if (numberOfListItems !== 2) {
                    throw new Error("expecting two list entries but was " + numberOfListItems)
                }
                addSuccess("appInitialStateShouldShowTwoEntries")

            })();

            (function removingAnEntryDecreasesListSize() {
                let initialNumberOfListItems = document.querySelectorAll("#app li").length;
                document.querySelectorAll("#app li button")[0].click()
                let newNumberOfListItems = document.querySelectorAll("#app li").length;
                if (newNumberOfListItems !== initialNumberOfListItems - 1) {
                    throw new Error("expecting one less entries")
                }
                addSuccess("removingAnEntryDecreasesListSize")
            })();
        } catch (e) {
            document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
            throw e
        }
    }
}

