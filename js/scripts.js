// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };


function Ticket(movieName, time, senior, firstRun) {
  this.movieName = movieName;
  this.time = time;
  this.senior = senior;
  this.firstRun = firstRun;
}

Ticket.prototype.price = function(){
  var price = 10;
  if (this.senior === true) {
    price += -2;
  }
  if (this.firstRun === true) {
    price += 3;
  }
  this.time = this.time.replace(/:/g,"");
  this.time = parseInt(this.time);
  if (this.time < 1200){
    price += -2;
  } else if (this.time > 1159 && this.time < 1700){
    price += -1;
  } else {
    price +=2;
  }
  return price;
}

function isFirstRun (ticket) {
  var firstRunMovies = ["Star Wars", "The Revenant", "The Hateful Eight","Kung Fu Panda 3"];
  var ret = false;
  firstRunMovies.forEach(function(movie){
    if(movie.toString()===ticket.movieName.toString()){
      ret = true
    }
  });
  return ret;
}


$(document).ready(function() {
  $('#time').timepicker({
    'minTime': '8:00am',
    'maxTime': '12:00am',
    'timeFormat': "H:i",
    'step': 60
  });

  $("#newAddress").click(function(){
    $("#addresses").append("<div class='contactAddress'><div class='form-group'><label for='new-street-address'>Street Address</label><input type='text' class='form-control' id='new-street-address'></div><div class='form-group'><label for='new-city'>City</label><input type='text' class='form-control' id='new-city'></div><div class='form-group'><label for='new-state'>State</label><input type='text' class='form-control' id='new-state'></div>");
    $(".contactAddress").last().hide().fadeIn(500);
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".contactAddress").each(function(){
      var inputtedStreetAddress = $(this).find("input#new-street-address").val();
      var inputtedCity = $(this).find("input#new-state").val();
      var inputtedState = $(this).find("input#new-city").val();
      var newAddress = new Address(inputtedStreetAddress, inputtedCity, inputtedState);
      newContact.address.push(newAddress);
      console.log(newAddress);
    });
    globals.liIds++ // increment the id
    $("ul#contacts").append("<li><span class='contact' id='hover"+globals.liIds+"'>" + newContact.fullName() + "</span></li>");

    $("#hover"+globals.liIds).hover( function(){
      console.log("test");
      $(this).append($("<span> ***</span>"));
    }, function (){
      $(this).find("span:last").remove();
    });

    clearInput();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.address.forEach(function(address){
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    $('.contactAddress').not($(".contactAddress")[0]).remove();
  });
});


function clearInput() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-address").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}
