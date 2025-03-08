import { Given, When, Then } from "@cucumber/cucumber";

Given("I enter valid credentials", function () {
  console.log("Entering valid credentials...");
});

When("I click login", function () {
  console.log("Clicking login button...");
});

Then("I should see the dashboard", function () {
  console.log("Dashboard is displayed.");
});