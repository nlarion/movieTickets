// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };
var globals = {liIds:0};

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

function isFirstRun (movieName) {
  var firstRunMovies = ["Star Wars", "The Revenant", "The Hateful Eight","Kung Fu Panda 3"];
  var ret = false;
  firstRunMovies.forEach(function(movie){
    if(movie===movieName){
      ret = true
    }
  });
  return ret;
}

$(document).ready(function() {
  var movies = ["Star Wars", "The Revenant", "The Hateful Eight","Kung Fu Panda 3", "The Martian", "Steve Jobs", "Chi-Raq", "Creed", "The Hunger"];

  movies.forEach(function(movie){
    $(".movie-names").append("<option value='"+movie+"'>" + movie + "</option>");
  });



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

  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("select#movie-names").val();
    var testIsFirstRun = isFirstRun(inputtedMovieName);
    var inputtedTime = $("input#time").val();
    var inputtedSenior = $("input#senior").prop("checked");
    var newTicket = new Ticket(inputtedMovieName, inputtedTime, inputtedSenior, testIsFirstRun);
    console.log(newTicket);

    // $("#hover"+globals.liIds).hover( function(){
    //   console.log("test");
    //   $(this).append($("<span> ***</span>"));
    // }, function (){
    //   $(this).find("span:last").remove();
    // });

    clearInput();

      $("ul#addresses").text("");

     });
    $('.contactAddress').not($(".contactAddress")[0]).remove();
  });


function clearInput() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-address").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}
