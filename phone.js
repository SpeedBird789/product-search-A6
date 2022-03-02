const allPhones = () => {
    const searchField = document.getElementById("search-box");
    const searchValue = searchField.value;  
   
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => showPhoneDetails(data.data.slice(0,20)));
};

const showPhoneDetails = (phones) => {
    const searchResult = document.getElementById("search-result");
    for (const phone of phones){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card w-75 ms-5">
            <img src="${phone.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
            <h3 class="card-title">${phone.phone_name}</h5>
            <h4 class="card-text">${phone.brand}</h4>
            <button onclick="loadPhoneDetail('${phone.slug}')" id="explore-btn" class="bg-success text-white font-weight-bold rounded"> Details </button>
            </div>
      </div>`;
      searchResult.appendChild(div);
    }

}

const loadPhoneDetail = (phoneId) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(response => response.json())
    .then(data=>setDetails(data.data));
}

const setDetails = (info) => {
    console.log(info);
}
