// Place your DOM creation code here





function createElements() {

    // Main
    let elementsMain = document.createElement("main")
    document.body.appendChild(elementsMain)

    // Section
    let elementsSection = document.createElement("section")
    elementsMain.appendChild(elementsSection)


    // Section Children
    let elementsH1 = document.createElement("h1")
    elementsH1.textContent = "Homework 01"

    let elementsP1 = document.createElement("p")
    elementsP1.textContent = `For this homework, I want you to recreate this HTML page using JavaScript and the DOM API.
    This means, the HTML should have a blank body and minimal head.
    Once the page loads, use JavaScript to recreate all the elements from the original page.`

    let elementsP2 = document.createElement("p")
    let elementsCode = document.createElement("code")
    preCodeText = document.createTextNode(`
        To make it fun, and maybe a bit tricky, I've added several types of elements.
        Some elements are pretty simple like these `
    )
    elementsCode.textContent = "<p>"
    postCodeText = document.createTextNode(` tags.
        Others are more going to require extra attributes or mixing text nodes with element nodes.
    `)

    //let codeText = document.createTextNode("&lt;p&gt;");
    //elementsCode.appendChild(codeText)

    // Special p tag within second paragraph
    elementsP2.appendChild(preCodeText)
    elementsP2.appendChild(elementsCode)
    elementsP2.appendChild(postCodeText)


    elementsSection.appendChild(elementsH1)
    elementsSection.appendChild(elementsP1)
    elementsSection.appendChild(elementsP2)


    // Aside
    let elementsAside = document.createElement("aside")
    elementsAside.textContent = "{aside}"

    let elementsImg = document.createElement("img")
    elementsImg.src = "assets/mario.png"
    elementsAside.appendChild(elementsImg)

    let blockquote = document.createElement("blockquote")
    blockquote.textContent = 'Mario says "Wahoo!" to homework'
    elementsAside.appendChild(blockquote)

    let audio = document.createElement("audio")
    audio.controls = "true"
    audio.autoplay = "false"
    audio.src = "assets/Super Mario Bros. medley.mp3"
    elementsAside.appendChild(audio)





    document.body.appendChild(elementsAside)



}



createElements()
