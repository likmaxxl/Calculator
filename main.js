var display = document.getElementsByClassName('display')[0];

//C brisanje ekrana
function ccc() {
  display.value = "";
}


//brojevi odnosno cifre
function numbers(n) {
  if (display.value.length == 8) {
    return false;
  }
  display.value += n.value;
}


//jednako (evl je funkcija za matematicke operacije)
function pt() {
  display.value = eval(display.value);

}

//brisanje jednog broja
function del() {
  var prev = display.value;
  display.value = prev.substr(0, prev.length - 1);
}
