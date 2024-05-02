function render(organisationToMembers) {
    let i = 0
    for (const entry of organisationToMembers.entries()) {
        let organisation = entry[0];
        let members = entry[1];
        const showsOrganisation = document.createElement("p")
        showsOrganisation.className = "organisation organisation-" + organisation.orgName
        showsOrganisation.textContent = ++i + ": " + organisation.orgName + ": " + members.map(it => it.name).join(", ")
        document.getElementsByClassName("powers")[0].append(showsOrganisation)
    }
    const showsNumberOfUniquePersons = document.createElement("b")
    let uniquePersons = new Set([...organisationToMembers.values()].flat());
    showsNumberOfUniquePersons.textContent = "total members (" + uniquePersons.size + "): " + [...uniquePersons].map(it => it.name).sort().join(", ")
    document.getElementsByClassName("powers")[0].append(showsNumberOfUniquePersons)
}

setTimeout(() => {
    try {
        let showsOrganisationFid = document.getElementsByClassName("organisation-NOD");
        if (showsOrganisationFid.length === 0) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
            return
        }
        let textContent = showsOrganisationFid[0].textContent;

        if (!textContent.includes("thunder")) {
            document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
            return
        }
        showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)