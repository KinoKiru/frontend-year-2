async function logger() {
    let feed = document.getElementById("feed-card");
    try {
        var response = await axios.get("https://api.thedogapi.com/v1/images/search");
        response = response.data[0];
        console.log(response);


        let card_title = "<h1 class='card-title'>" + response.breeds[0].name + "</h1>";
        let card_text = "<p class='card-text text-nowrap'>" + response.breeds[0].temperament  + "<p/>";
        var card_img = "<img src=" + '"' + response.url + '"' + "class='card-img-top img-fluid card-img-size'" + "/>";

        let img = card_img + "<br>" + card_title + card_text
        feed.innerHTML = img;
    } catch (e) {
       feed.innerHTML = card_img + "<br>" + "<h1>No info Found</h1>"
    }
}

