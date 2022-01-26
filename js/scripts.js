$(document).ready(function() {
  // Hide & Show User Input Logic
  $(".clickable-info").click(function() {
    $("#user-info-showing").toggle();
    $("clickable").removeClass();
    $("#user-info-hidden").show();
  });

  // User Input Logic
  $("#formInfo").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const address1Input = $("input#address1").val();
    const phone1Input = $("input#phone1").val(); 
    $(".person1").text(person1Input);
    $(".address1").text(address1Input);
    $(".phone1").text(phone1Input);
  });
});