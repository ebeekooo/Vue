const apikey = "R7mkIxy3wzEkzWFP4zkIYgm0EO5jhvWx";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
  .then((resp) => resp.json())
  .then((body) => {
    console.log(body.data.images.downsizedStill);
  })
  .catch((err) => console.info(err));
