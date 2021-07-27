$(document).ready(function(){
  $("#design").click(function(){
    $("#designp").show();
    $("#design").hide();
  });
  $("#designp").click(function(){
    $("#design").show();
    $("#designp").hide();
  });
  $("#devicon").click(function(){
    $("#dev").show();
    $("#devicon").hide();
  });
  $("#dev").click(function(){
    $("#devicon").show();
    $("#dev").hide();
  });
  $("#production").click(function(){
    $("#productp").show();
    $("#production").hide();
  });
  $("#productp").click(function(){
    $("#production").show();
    $("#productp").hide();
  });
  
});

function validation() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("msg").value;

    if(name=="") {
        alert("Please enter your name");
    } else if (email=="") {
        alert("Please enter a valid email");
    }
    else if(message==""){
        alert("Please enter a message");
    }
    else {
        alert(name + ", we are reviewing your message and we will get back to you ASAP!");
    }
  }

