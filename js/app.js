const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data)

}
const displayPhones = phones => {
    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.textContent = '';
    // slice 
    phones = phones.slice(0, 12);
    // worning
    const noPhone = document.getElementById("worning")
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }
    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement("div")
        phoneDiv.classList.add("col")
        phoneDiv.innerHTML = `
                   <div class="card p-5 text-center">
                   <div>  <img src="${phone.image} " class="card-img-top w-75" alt="..."></div>
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
    // stop spinner 
    spinner(false)

}

// button event handler 
document.getElementById("btnSearch").addEventListener("click", function () {
    // start loder 
    spinner(true)
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;
    loadPhones(searchText)
    searchField.value = '';
})
// spinner function 
const spinner = isLoading => {
    const loderSection = document.getElementById("loading");
    if (isLoading === true) {
        loderSection.classList.remove("d-none");
    }
    else {
        loderSection.classList.add("d-none");
    }
}
// loadPhones()