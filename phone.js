const allPhones = () => {
    const searchField = document.getElementById("search-box");
    const searchValue = searchField.value;  
   
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (phones) => {
    const searchResult = document.getElementById("search-result");
    
    for (const phone of phones){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
      </div>`;
      searchResult.appendChild(div);
    }

};