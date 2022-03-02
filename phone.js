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
            <img src="${phone.image}" class="card-img-top w-50 ms-5 mt-3" alt="...">
            <div class="card-body">
            <h3 class="card-title ms-5">${phone.phone_name}</h5>
            <h4 class="card-text ms-5">${phone.brand}</h4>
            <button onclick="loadPhoneDetail('${phone.slug}')" id="explore-btn" class="ms-5 bg-success text-white font-weight-bold rounded"> Details </button>
            </div>
      </div>`;
      searchResult.appendChild(div);
    }

}

const loadPhoneDetail = (phoneId) =>{
    console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(response => response.json())
    .then(data=>setDetails(data.data));
}

const setDetails = (info) => {
    document.getElementById("details-container").innerHTML = `
    <div class="mb-5">
  <img src="${info.image}" alt="">
  <h4 class="mt-2">${info.releaseDate}</h4>
  <h3> Main Features: </h3>
  <h5><span>Storage: </span>${info.mainFeatures.storage}</h4>
  <h5><span>Chipset: </span>${info.mainFeatures.chipSet}</h4>
  <h5><span>Memory: </span>${info.mainFeatures.memory}</h4>
  <h5><span>Display: </span>${info.mainFeatures.displaySize}</h4>
  <h5><span>Sensors: </span>${info.mainFeatures.sensors}</h4>
  <h3>Others:</h3>
  <h5><span>WLAN: </span>${info.others.WLAN}</h4>
  <h5><span>Bluetooth: </span>${info.others.Bluetooth}</h4>
  <h5><span>GPS: </span>${info.others.GPS}</h4>
  <h5><span>NFC: </span>${info.others.NFC}</h4>
  <h5><span>Radio: </span>${info.others.Radio}</h4>
  <h5><span>USB: </span>${info.others.USB}</h4>
</div>
    `;
   
}
