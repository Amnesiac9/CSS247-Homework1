
function createElements() {

    // Main
    let elementsMain = document.createElement("main")
    document.body.appendChild(elementsMain)

    // Section
    let section = document.createElement("section")
    elementsMain.appendChild(section)


    // Section Children
    let h1 = document.createElement("h1")
    h1.textContent = "Homework 01"
    section.appendChild(h1)

    // First paragraph
    let p1 = document.createElement("p")
    p1.textContent = `For this homework, I want you to recreate this HTML page using JavaScript and the DOM API.
    This means, the HTML should have a blank body and minimal head.
    Once the page loads, use JavaScript to recreate all the elements from the original page.`
    section.appendChild(p1)

    // Second paragraph, with extra code child
    let p2 = document.createElement("p")

    let code = document.createElement("code")
    preCodeText = document.createTextNode(`
        To make it fun, and maybe a bit tricky, I've added several types of elements.
        Some elements are pretty simple like these `
    )
    code.textContent = "<p>"
    postCodeText = document.createTextNode(` tags.
        Others are more going to require extra attributes or mixing text nodes with element nodes.
    `)

    //let codeText = document.createTextNode("&lt;p&gt;");
    //elementsCode.appendChild(codeText)

    p2.appendChild(preCodeText)
    p2.appendChild(code)
    p2.appendChild(postCodeText)

    section.appendChild(p2)


    // Aside
    let aside = document.createElement("aside")
    document.body.appendChild(aside)

    let img = document.createElement("img")
    img.src = "assets/mario.png"
    aside.appendChild(img)

    let blockquote = document.createElement("blockquote")
    blockquote.textContent = 'Mario says "Wahoo!" to homework'
    aside.appendChild(blockquote)

    let audio = document.createElement("audio")
    audio.controls = "true"
    audio.autoplay = "false"
    audio.src = "assets/Super Mario Bros. medley.mp3"
    aside.appendChild(audio)

}



createElements()
