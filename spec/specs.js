// Example spec. Uncomment if you want to see it run in spec-runner.html! Then uncomment the function in scripts.js
// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });

describe('Contact', function(){
  it("creates new contact with given properties", function(){
  var testContact = new Contact("James","Beard");
  expect(testContact.firstName).to.equal("James");
  expect(testContact.lastName).to.equal("Beard");
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Martha","Stewart");
    expect(testContact.fullName()).to.equal("Martha Stewart");
  });
});
describe('Address', function(){
  it("creates new address with given properties", function(){
  var testAddress = new Address("123 St","Portland","Oregon");
  expect(testAddress.street).to.equal("123 St");
  expect(testAddress.city).to.equal("Portland");
  expect(testAddress.state).to.equal("Oregon");
  });
  // it("adds fullAddress method to all addresses", function(){
  //   var testAddress = new Address("123 Main St, Portland, Oregon");
  //   expect(testAddress.fullAddress()).to.equal("123 Main St, Portland, Oregon");
  // });
});
