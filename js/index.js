const wrapper = document.querySelector(".wrapper");
const input = wrapper.querySelector("#search-field");
const sugBox = wrapper.querySelector(".suggestions-list");



input.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArr = [];
    if (userData){
        emptyArr = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArr = emptyArr.map((data) => {
            return data = "<li>" + data + "</li>";
        })
        console.log(emptyArr)
    }
}

function showSuggestions(list) {
    let listData;
    if(!list.length)
}