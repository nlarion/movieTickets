// Example spec. Uncomment if you want to see it run in spec-runner.html! Then uncomment the function in scripts.js
// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });

describe('Ticket', function(){
  it("creates new ticket with given properties", function(){
  var newTicket = new Ticket("Star Wars","12:00",true, true);
  expect(newTicket.movieName).to.equal("Star Wars");
  expect(newTicket.time).to.equal("12:00");
  expect(newTicket.senior).to.equal(true);
  expect(newTicket.firstRun).to.equal(true);
  });
});
describe('Price', function(){
  it("calculates price based on property values", function(){
  var newPrice = new Ticket("Star Wars","12:00",true, true);
  expect(newPrice.price()).to.equal(10);
  });
});
