"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { dummy_scenarios } from "../../scenarios/dummy_scenarios.js";
import { gw9_scenarios } from "../../scenarios/gw9_scenarios.js";
import { onApp } from "../../../pageregistry/onApp";
import { t } from "testcafe";

let onPCApp = new onApp("PC");
let mySummary = new dummy_scenarios();
let gw9 = new gw9_scenarios();

Given(/^My Summary is displayed$/, async function() {
  await mySummary.verifyMySummary();

});

Given(/^I login to GW9$/, async function() {
  await onPCApp.navigateToApp();
  await gw9.login();
});

Then(/^the default landing page of GW9 is displayed$/, async function(){
    await gw9.verifyMyAct();
});

Given(/^I create a new contact in GW9$/, async function() {
    await gw9.openNewContact();
});

Given(/^I create a new account in GW9$/, async function() {
    await gw9.openNewAccount();
    await gw9.searchAccountInfo();
    await gw9.inputNewAccountInfo();
});