const allPhones = () => {
    // Obtaining searchbox value
    const searchField = document.getElementById("search-box");
    const searchValue = searchField.value;  

    // Error Handling 
    if (searchField.value<0){
        alert('kindly enter a valid request');
    }
   
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => showPhoneDetails(data.data.slice(0,20)));
    
};

// Looping through all the phones and showing image, name, brand name
const showPhoneDetails = (phones) => {

    const searchResult = document.getElementById("search-result");

    phones.forEach(phone => {
        const div = document.createElement('div');
        
        div.classList.add('col');
        div.innerHTML = `
        <div class="card w-75">
            <img src="${phone.image}" class="card-img-top w-50 ms-5 mt-3" alt="...">
            <div class="card-body">
            <h3 class="card-title ms-5">${phone.phone_name}</h5>
            <h4 class="card-text ms-5">${phone.brand}</h4>
            <button onclick="loadPhoneDetail('${phone.slug}')" id="explore-btn" class="ms-5 bg-success text-white font-weight-bold rounded"> Details </button>
            </div>
        </div>
      `;
      searchResult.appendChild(div);
    });

}

// Individual device details
const loadPhoneDetail = (phoneId) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(response => response.json())
    .then(data=>setDetails(data.data));
     window.scrollTo(0,0);
}

// Adding additional details upon clicking the button
const setDetails = (info) => {
    document.getElementById("details-container").innerHTML = `
    <div class="mb-5">

  <img src="${info.image}" alt="">

  <h4 class="mt-3">${info.releaseDate ? info.releaseDate : 'No release date found!'}</h4>
  <h3> Main Features: </h3>
  <h5><span>Storage: </span>${info.mainFeatures.storage}</h4>
  <h5><span>Chipset: </span>${info.mainFeatures.chipSet}</h4>
  <h5><span>Memory: </span>${info.mainFeatures.memory}</h4>
  <h5><span>Display: </span>${info.mainFeatures.displaySize}</h4>
  <h5><span>Sensors: </span>${info.mainFeatures.sensors}</h4>
  
  <h3>Others:</h3>
  <h5><span>WLAN: </span>${info.others.WLAN ? info.others.WLAN : 'No data found....'}</h4>
  <h5><span>Bluetooth: </span>${info.others.Bluetooth ? info.others.Bluetooth : 'No data found....'}</h4>
  <h5><span>GPS: </span>${info.others.GPS ? info.others.GPS : 'No data found....'}</h4>
  <h5><span>NFC: </span>${info.others.NFC ? info.others.NFC : 'No data found....'}</h4>
  <h5><span>Radio: </span>${info.others.Radio ? info.others.Radio : 'No data found....'}</h4>
  <h5><span>USB: </span>${info.others.USB ? info.others.USB : 'No data found....'}</h4>
  </div>
    `;
   
}
