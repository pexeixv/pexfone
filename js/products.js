let phones = [
    {
        "id": 0001,
        "brand": "PexFone",
        "model": "CustardApple",
        "image": "img/phone/ca/caFront.png",
        "href": "products/custardapple.html"
    },
    {
        "id": 0002,
        "brand": "PexFone",
        "model": "CustardApple+",
        "image": "img/phone/cap/capFront.png",
        "href": "products/custardapple+.html"
    },
    {
        "id": 0003,
        "brand": "PexFone",
        "model": "PineApple",
        "image": "img/phone/pa/paFront.png",
        "href": "products/pineapple.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    },
    {
        "id": 0004,
        "brand": "PexFone",
        "model": "PineApple+",
        "image": "img/phone/pap/papFront.png",
        "href": "products/pineapple+.html"
    }
]

productTemplate = document.querySelector('.product_template');
container = document.querySelector('.productMain');

phones.forEach(phone => {
    productContent = productTemplate.content.cloneNode(true);
    productContent.querySelector('h3').innerText = phone.brand;
    productContent.querySelector('h4').innerText = phone.model;
    productContent.querySelector('a.btn').href = phone.href;
    productContent.querySelector('img').src = phone.image;
    container.append(productContent);
})

document.querySelectorAll('.productCard').forEach(card => {
    card.addEventListener('click', () => {
        href = card.querySelector('.btn').href;
        location.href = href;
    })
})


