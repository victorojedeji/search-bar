const wrapper = document.querySelector(".wrapper");
const input = wrapper.querySelector("#search-field");
const sugBox = wrapper.querySelector(".suggestions-list");



input.onkeyup = (e) => {
    let userData = e.target.value;
    let arr = [];
    if (userData){
        arr = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        arr = arr.map((data) => {
            return data = "<li>" + data + "</li>";
        })
        wrapper.classList.add("active");
        showSuggestions(arr);
        let compList = sugBox.querySelectorAll("li");
        for (let i = 0; i < compList.length; i++) {
            compList[i].setAttribute("onclick", "clicked(this)");
        };
    } else {
        wrapper.classList.remove("active");
    }
    
}

function showSuggestions(list) {
    let listData;
    if(!list.length) {
        userTypedVal = input.value;
        listData = `<li>${userTypedVal}</li>` ;
    }else {
        listData =list.join("");
    }
    sugBox.innerHTML = listData;
}