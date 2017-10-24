function controle(form) {
  var old = document.form.age.value;
  if(old >= 18) {
    alert('Vous êtes majeur');
  }
  else {
    alert('Vous êtes mineur');
  }
};
