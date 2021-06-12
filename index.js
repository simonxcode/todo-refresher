submit.addEventListener("click", (e) => {
  //conditional to check if input is empty
  if(input.value === "" || input.value === null) {
    console.log("empty input")
    e.preventDefault()
  } else {

    //create li element
    let list = document.createElement("li")

    //create item element 
    let item = document.getElementById("input").value

    //create label element with complete class
    let label = document.createElement("label")
    label.className = "complete"

    //create input element wih type checkbox 
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    //create remove button
    let remove = document.createElement("button")
    remove.type = "button"
    remove.innerHTML = "x"

    //remove item
    remove.addEventListener("click", removeItem)

    //append text node to label 
    label.appendChild(document.createTextNode(item))

    //append checkbox, label and remove to li element
    list.appendChild(checkbox)
    list.appendChild(label)
    list.appendChild(remove)

    //append li to ul
    itemList.appendChild(list)

    //clear input field
    clearInput()
  } 
})

let clearInput = () => {
  input.value = ""
}

//updater function to remove li item 
function removeItem () {
  let item = this.parentNode  
  let parent = item.parentNode
  parent.removeChild(item)
}











