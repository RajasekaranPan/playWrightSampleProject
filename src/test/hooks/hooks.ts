import { Before, After } from "@cucumber/cucumber";

Before(() => {
  console.log("Test started...");
});

After(() => {
  console.log("Test completed!");
});