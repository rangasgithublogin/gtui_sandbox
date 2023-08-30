import {GW9Login} from "../pages/gw9/Gw9login.js";
import {GW9MyActivities} from "../pages/gw9/GW9MyActivities.js";
import {GW9TopMenu} from "../pages/gw9/GW9TopMenu.js";
import {GW9SideMenu} from "../pages/gw9/GW9SideMenu.js";
import {EnterAccountInformation} from "../pages/gw9/EnterAccountInformation.js";
import {CreateAccount} from "../pages/gw9/CreateAccount.js";
import {Organizations} from "../pages/gw9/Organizations.js";
import {GW9AccountFileSummary} from "../pages/gw9/GW9AccountFileSummary.js";
import { t } from "testcafe";

const login = new GW9Login();
const myact = new GW9MyActivities();
const topMenu = new GW9TopMenu();
const sideMenu = new GW9SideMenu();
const enterAccountInformation = new EnterAccountInformation();
const createAccount = new CreateAccount();
const organizations = new Organizations();
const accountFileSummary = new GW9AccountFileSummary();

export class gw9_scenarios{
    constructor() {}

    async login(){
        await t.typeText(login.username, "su");
        await t.typeText(login.password, "gw");
        await t.click(login.loginBtn);
    }

    async verifyMyAct(){
        await t.expect(myact.headerLable.visible).ok();
    }

    async openNewContact(){
        await t
            .click(topMenu.contactTab)
            .hover(topMenu.newContactMenuItem)
            .click(topMenu.newCompanyMenuItem)
    }

    async openNewAccount(){
        await t
            .click(sideMenu.desktopActionsMenu)
            .click(sideMenu.newAccount);
        await t.expect(enterAccountInformation.pageTitle.visible).ok();
    }
    #accName = "test" + new Date().getMilliseconds();
    async searchAccountInfo(){
        await t.typeText(enterAccountInformation.companyName, this.#accName);
        await t.click(enterAccountInformation.searchBtn);
        await t.expect(enterAccountInformation.message.withText('The search returned zero results.').visible).ok();
        await t.click(enterAccountInformation.createAccountBtn);
        await t.click(enterAccountInformation.createAccountBtnCompanyMenu);
        await t.expect(createAccount.pageTitle.visible).ok();
    }

    async inputNewAccountInfo(){
        await t.typeText(createAccount.address1, "1 test road");
        await t.typeText(createAccount.city, "test city");
        await t.typeText(createAccount.stateDropDown, "Nebraska").pressKey('tab');
        await t.expect(createAccount.stateDropDown.withAttribute('value','Nebraska').visible).ok();
        await t.typeText(createAccount.zipcode, "68001");
        await t.typeText(createAccount.addressTypeDropDown, "Business");
        await t.click(createAccount.selectOrganization);
        await t.expect(organizations.pageTitle.visible).ok();
        await t.typeText(organizations.organizationName, "A");
        await t.click(organizations.searchBtn);
        await t.click(organizations.recordOne);
        await t.expect(createAccount.pageTitle.visible).ok();
        await t.expect(createAccount.organization.withAttribute('value','Armstrong and Company').visible).ok();
        await t
            .typeText(createAccount.producerCodeDropDown, '100-002541 Armstrong (Premier)').pressKey('tab');
        await t.click(createAccount.updateBtn);
        await t.expect(accountFileSummary.pageTitle.visible).ok();
        await t.expect(accountFileSummary.accountName.withText(this.#accName).visible).ok();
        await t.expect(accountFileSummary.addressType.withText('Business').visible).ok();
        console.log(`New Account ${this.#accName} is created!!`)
    }

}