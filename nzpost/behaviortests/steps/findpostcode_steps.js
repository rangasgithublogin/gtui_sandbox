"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import {FindNzPostCodeScenarios} from "../../scenarios/FindNzPostCodeScenarios.js";


let app = new FindNzPostCodeScenarios();
let resp = null;
Given(/^I am on the NZ Post Code finder landing page$/, async function() {
    await app.navigateToLandingPage();
});

/*
    * Any step parameter table or not needs 't' to be passed as first parameter
    * Then, the test data from the feature file as the second parameter
    * In this example it's address; no matter if the feature file has a data table or just a string this step code is good enough
*/
When(/^I enter the address (.*)$/, async function(t, address) {
    await app.inputAddress(address[0]);
});

Then(/^verify the result$/, async function() {
    await app.verifyResult();
});

Given(/^stub the post shop locator api response with (.*) for address (.*)$/, async function(t, stepArguments) {
    await app.stubResponseAndTriggerApiCall(parseInt(stepArguments[0]), stepArguments[1]);
});

Then(/^verify the result for status code (.*)$/, async function(t, stepArguments) {
    await app.verifyResultByStatusCode(parseInt(stepArguments[0]));
});