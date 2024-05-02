setTimeout(() => {
    try {
        let features = [...document.querySelectorAll(".features li").values()]
            .map(element => element.textContent)
            .join(", ");
        if (!features.includes("notifyAuthorities")) {
            document.getElementsByClassName("error")[0].textContent = `missing feature. define a function that can be called by "notifyAuthorities()"`
            return
        }
        showNext()
    } catch (e) {
        document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
        throw e
    }
}, 1000)


function render(features) {
    const showsFeatures = document.getElementsByClassName("features")[0];
    for (const feature in features) {
        const showsFeature = document.createElement("li")
        showsFeature.textContent = feature
        let invokeFeatureWithHero = features[feature];
        if (typeof invokeFeatureWithHero !== 'function') {
            // continue skips this execution of the loop
            continue
        }
        showsFeature.onclick = () => invokeFeatureWithHero({name: "Thunder"})
        showsFeatures.append(showsFeature)
    }
}