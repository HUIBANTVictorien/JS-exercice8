function display() {
  var old = document.getElementById('age').value;
  if(old >= 18) {
    alert('Vous êtes majeur');
  }
  else {
    alert('Vous êtes mineur');
  }
};
