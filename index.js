fetch('jsons/news.json')
    .then((response) => response.json())
    .then((data) => {

        let news = document.getElementById("news");
        let newsHTMl = "";

        for (i = 0; i < data['heading'].length; i += 1) {
            let paper = `<div class="col col s12 m4">
                <div class="card">
                    <div class="card-image">
                        <img data-src="${data["image"][i]}" class="asyncImage">
                        
                    </div>
                    <div class="card-content">
                        <b>${data["heading"][i]}</<b>
                    </div>
                </div>
            </div>`
            newsHTMl += paper;


        }
        news.innerHTML = newsHTMl;


    })



// Page is loaded
const objects = document.getElementsByClassName('asyncImage');
Array.from(objects).map((item) => {
    // Start loading image

    const img = new Image();
    console.log(img);
    img.src = item.dataset.src;
    console.log(img.src);
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ?
            item.src = item.dataset.src :
            item.style.backgroundImage = `url(${item.dataset.src})`;
    };
});


