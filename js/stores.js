var stores = [
    {
        "id": 0001,
        "name": "Pexfone Gallery",
        "address": "Twin Towers, Panjim",
        "state": "Goa",
        "pin": 403001,
        "phone": "+91 8888253992",
        "map": "https://goo.gl/maps/Ya7yQXk6TLrUpPgF8"
    },
    {
        "id": 0002,
        "name": "Pexfone Multicare Center",
        "address": "Eastern Complex, Margao",
        "state": "Goa",
        "pin": 403601,
        "phone": "+91 8888253993",
        "map": "https://goo.gl/maps/domyopgHkwpUjEpz9"
    },
    {
        "id": 0003,
        "name": "Pexfone Shopee",
        "address": "Apna Bazar, Vasco",
        "state": "Goa",
        "pin": 403601,
        "phone": "+91 8888253994",
        "map": "https://goo.gl/maps/TEE53k8kTH1aRwh5A"
    },
    {
        "id": 0004,
        "name": "Pexfone Care",
        "address": "Sapna Complex, Thane",
        "state": "Maharashtra",
        "pin": 4000601,
        "phone": "+91 8888253995",
        "map": "https://goo.gl/maps/399G9tCtgRGm1JiL6"
    }

];

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
}

function searchButtonClicked() {
    var container = document.querySelector('.stores_container');
    var submit = document.querySelector('.states_btn');
    var input = document.querySelector('.states_input');
    var state = input.value;
    var storesInState = [];
    input.value = titleCase(input.value);
    var innerHTML = '';
    stores.forEach(store => {
        if (store.state.toLowerCase() == state.toLowerCase()) {
            innerHTML += `
                <div class="store">
                    <div class="store_text">
                        <h3 class="store_name">${store.name}</h3>
                        <p class="store_address">${store.address}</p>
                        <p class="store_state">${store.state} - ${store.pin}</p>
                        <a class="store_phone" href="tel:${store.phone}">${store.phone}</a>
                    </div>
                    <a class="store_btn btn" target="_blank" href="${store.map}">Locate</a>
                </div>
            `
        }
    })
    if (innerHTML == '') {
        innerHTML = `<p class="store_sorry">We're sorry. There are no shops nearby.</p>`
    }
    container.innerHTML = innerHTML;
}