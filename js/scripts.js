$(document).ready(function() {
  $("#receipt-form").submit(function() {
    event.preventDefault();
    let name1 = $("#name1").val();
    let address1 = $("#address1").val();
    let city1 = $("#city1").val();
    let state1 = $("#state1").val();
    let zipcode1 = $("#zipcode1").val();

    $(".receipt").show();
    $("#receipt-name").text(name1);
    $("#receipt-address").text(address1);
    $("#receipt-city").text(city1);
    $("#receipt-state").text(state1);
    $("#receipt-zipcode").text(zipcode1);
  });
});