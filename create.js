function start() {
  var elem = document.getElementById('rip');
      elem.parentNode.removeChild(elem);
    yah();
}

function yah() {
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://i.amz.mshcdn.com/URoBdfh6G_-o8lNaH620WvL2YaM=/1200x627/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F21738%2F592857175_640.jpg");
  img.setAttribute("id", "meme");
  document.getElementById("image").appendChild(img);
  buttons();
}

function buttons() {
  var butt = document.createElement("input");
  butt.type = "button";
  butt.className = "opt";
  document.getElementById("buttons").appendChild(butt);
}
