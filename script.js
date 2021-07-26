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

$(document).ready(function () {
  $("#submit").submit(function (event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    if (name !== "" && email !== "" && message !== "") {
      alert(`${name}, we have received your message and we will get back to you ASAP!.`);
    } else {
      alert(
        `Please enter your name and valid email address and write a message for us.`
      );
    }
  });
});

