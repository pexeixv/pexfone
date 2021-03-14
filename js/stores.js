var stores = [
    {
        "id": 0001,
        "name": "Pexfone Gallery",
        "address": "Twin Towers, Panjim",
        "state": "Goa",
        "pin": 403001,
        "phone": "918888253992",
        "map": "https://goo.gl/maps/Ya7yQXk6TLrUpPgF8"
    },
    {
        "id": 0002,
        "name": "Pexfone Multicare Center",
        "address": "Eastern Complex, Margao",
        "state": "Goa",
        "pin": 403601,
        "phone": "918888253993",
        "map": "https://goo.gl/maps/domyopgHkwpUjEpz9"
    },
    {
        "id": 0003,
        "name": "Pexfone Shopee",
        "address": "Apna Bazar, Vasco",
        "state": "Goa",
        "pin": 403601,
        "phone": "918888253994",
        "map": "https://goo.gl/maps/TEE53k8kTH1aRwh5A"
    },
    {
        "id": 0004,
        "name": "Pexfone Care",
        "address": "Sapna Complex, Thane",
        "state": "Maharashtra",
        "pin": 4000601,
        "phone": "918888253995",
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
    container.querySelectorAll('.store').forEach(store => {
        store.remove();
    })
    if (container.querySelector('.store_sorry')) {
        container.querySelector('.store_sorry').remove();
    }
    input.value = titleCase(input.value);
    stores.forEach(store => {
        if (store.state.toLowerCase() == state.toLowerCase()) {
            var template = document.querySelector('.store_template');
            var content = template.content.cloneNode(true);
            content.querySelector('.store_name').innerText = store.name;
            content.querySelector('.store_address').innerText = store.address;
            content.querySelector('.store_state').innerText = `${store.state} - ${store.pin}`;
            content.querySelector('.store_phone').innerText = store.phone;
            content.querySelector('.store_phone').href = `tel:${store.phone}`;
            content.querySelector('.store_btn').href = store.map;
            container.append(content)
        }
    })
    if (!container.querySelector('.store')) {
        var sorry = document.querySelector('.store_sorrytemplate').content.cloneNode(true);
        container.append(sorry);

    }
}


