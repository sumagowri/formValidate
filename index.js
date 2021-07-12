const form = document.querySelector('#form');

form.addEventListener("submit",e => validate(e));


var validate = async (e)=> {
  var uname = document.querySelector('#name').value;
  var uage = document.querySelector('#age').value;
  var uemail = document.querySelector('#email').value;
  var uphno = document.querySelector('#phone').value;

  if(uname == null || uname == ""){
    alert('Enter name');
    e.preventDefault();
  }
  else if(uage == null || uage ==""){
    alert('Enter age');
    e.preventDefault();
  }
  else if(Number(uage) < 0 || Number(uage) >110){
    alert('Enter a valid age');
    e.preventDefault();
  }
  else if(uemail == null || uemail ==""){
    alert('Enter email');
    e.preventDefault();
  }
  else if(uphno == null || uphno ==""){
    alert('Enter phone number');
    e.preventDefault();
  }
  else if(uphno.length !==10){
    alert('Phone number should be 10 digits only');
    e.preventDefault();
  }
     
}
  