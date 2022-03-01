const allPhones = () => {
    const searchValue = document.getElementById("search-box").value; 
   
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (phones) => {
    for (const phone of phones){
    const parent = document.getElementById("phone-container");

    const div = document.createElement('div');

    div.classList.add("row");
    div.innerHTML = `
    <div class="col-md-4">
        <div class="card border p-5">
            <div class="pro-pic">
              <img class="w-50" src="${phone.image}" alt="">
            </div>
            <h2>Name: ${phone.phone_name} </h2>
            <h3>Brand: ${phone.brand} </h3>
            <div class="allbutton">
              <button class="btn btn-success">Explore</button>
            </div>
          </div>
    </div>
</div>`; 


//     div.innerHTML = `<div class="card border p-5">
//     <div class="pro-pic">
//       <img class="w-50" src="${phone.image}" alt="">
//     </div>
//     <h2>Name: ${phone.phone_name} </h2>
//     <h3>Brand: ${phone.brand} </h3>
//     <div class="allbutton">
//       <button class="btn btn-success">Explore</button>
//     </div>
//   </div>`;
    
  parent.appendChild(div);
  console.log(phone);
    }
};