
function display(){
    var old = document.getElementById('age').value;
    if (isNaN(old) == false && old > 0){
      if (old < 18){
        alert('Vous êtes mineur');
      } else{
        alert('Vous êtes majeur');
      };
    } else {
      alert('Rentrer un âge valide');
    };
  };
