const selection = document.querySelector(".selection");
const optionsContainer = document.querySelector(".options-container")

optionsContainer.style.display = "none"

// CHECK BOX
function checked_box(){
    const checkboxs = document.querySelectorAll('.checkboxs')
    checkboxs.forEach(checkbox => {
        if(checkbox.checked == true){
        console.log("checked!")
        checkbox.nextElementSibling.style.color = "grey"
        }
        else{
            checkbox.nextElementSibling.style.color = "black"
            console.log("unchecked!")
        }
    })
}


// OPTIONS
const lis = document.querySelectorAll("li");
lis.forEach(li => {
    // console.log(li.textContent.toLowerCase())
    li.addEventListener("click", () => pick_state(li, li.textContent.toLowerCase()))
})
function pick_state(li, state){
    let backgroundColor = "rgb(168, 210, 168)";
    let color = "rgb(60, 75, 60)";
    let textContent = "Chill";
    switch(state){
        case "chill":
            backgroundColor = "rgb(168, 210, 168)";
            color = "rgb(60, 75, 60)"
            textContent = "Chill";
            break
        case "medium":
            backgroundColor = "#fde69a";
            color = "#564e34";
            textContent = "Medium";
            break
        case "important":
            backgroundColor = "rgb(250, 145, 145)";
            color = "rgb(65, 38, 38)";
            textContent = "Important";
            break
    }
    li.parentElement.previousElementSibling.style.backgroundColor = backgroundColor;
    li.parentElement.previousElementSibling.textContent = textContent;
    console.log(state)
    console.log(li.parentElement.previousElementSibling)
}

// Ẩn hiện options khi hover qua .selected
selection.addEventListener("mouseover", () =>{
    optionsContainer.style.display = "inline-block"
})
selection.addEventListener("mouseout", () =>{
    optionsContainer.style.display = "none"
})


// THÊM MỘT TASK MỚI KHI ẤN VÀO DẤU CỘNG
function addNewTask(){
    const containers = document.querySelector(".containers");
    const inner_container = document.querySelector(".inner-container");
    const newClone = inner_container.cloneNode(true);
    
    newClone.querySelector(".tasks_name").value = "";
    newClone.querySelector(".tasks_name").style.color = "black";
    newClone.querySelector(".checkboxs").checked = false;

    // newClone.createElement("hr");
    
    // Gán lại thuộc tính cho selected
    const newSelected = newClone.querySelector(".selected");
    newSelected.style.backgroundColor = "rgb(168, 210, 168)";
    newSelected.textContent = "Chill";
    // Gán lại event cho selection trong newClone
    const newSelection = newClone.querySelector(".selection");
    const newOptionsContainer = newClone.querySelector(".options-container");
    newSelection.addEventListener("mouseover", () => {
        newOptionsContainer.style.display = "inline-block";
    });
    newSelection.addEventListener("mouseout", () => {
        newOptionsContainer.style.display = "none";
    });

    // Gán lại event cho các thẻ li khi được click
    const newLis = newSelection.querySelectorAll("li");
    newLis.forEach(li => {
        // console.log(li.textContent.toLowerCase())
        li.addEventListener("click", () => pick_state(li, li.textContent.toLowerCase()))
    })

    // Add lại thẻ hr(fake line)
    containers.appendChild(newClone);
    const hr = document.createElement("hr");
    if (newClone.nextSibling) { //check xem sau newClone có thẻ anh em nào không
        containers.insertBefore(hr, newClone.nextSibling);//nếu có thì add hr trước thẻ đó
    } else {
        containers.appendChild(hr);//nếu không thì add ở cuối cùng của containers
    }

}





