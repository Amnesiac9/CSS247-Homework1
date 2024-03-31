// Place your DOM creation code here





function createElements() {

    let elementsMain = document.createElement("main")
    elementsMain.textContent = "{Main}"

    let elementsSection = document.createElement("section")
    elementsSection.textContent = "{Section}"



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
    postCodeText = document.createTextNode(` tags.
        Others are more going to require extra attributes or mixing text nodes with element nodes.
    `)

    //let codeText = document.createTextNode("&lt;p&gt;");
    elementsCode.textContent = "<p>"

    //elementsCode.appendChild(codeText)
    elementsP2.appendChild(preCodeText)
    elementsP2.appendChild(elementsCode)
    elementsP2.appendChild(postCodeText)


    elementsSection.appendChild(elementsH1)
    elementsSection.appendChild(elementsP1)
    elementsSection.appendChild(elementsP2)
    elementsMain.appendChild(elementsSection)





    document.body.appendChild(elementsMain)



}



createElements()
