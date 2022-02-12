function showemail(){
	$("#copypaste").slideToggle("slow");
}
function checkemail(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.getElementById("exampleInputEmail1")
   if(reg.test(address) == false) {
      alert('Введите корректный e-mail');
      return false;
   }
}
function showpictures(){
	$("#pic1").fadeIn(2000);
	$("#pic2").fadeIn(2000);
}
function copy_email(){
   var email = document.getElementById('textforread');
   var text_but = document.getElementById('btn-text');
   email.select();
   document.execCommand("Copy");
}
function open_popup2(){
   $('.popup2').addClass('active');
}
function close_popup2() {
   $(".popup2").removeClass('active');
}
