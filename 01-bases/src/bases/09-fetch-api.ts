import type { GIF } from "../interfaces/gif-response";

const apiKey = "R7mkIxy3wzEkzWFP4zkIYgm0EO5jhvWx";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GIF) => {
    console.log(body.data.images.downsized_medium.url);
  })
  .catch((err) => console.info(err));
