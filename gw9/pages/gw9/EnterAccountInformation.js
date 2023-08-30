import { Selector} from "testcafe";
import {BasePage} from "./BasePage";

export class EnterAccountInformation extends BasePage{
        pageTitle = Selector('span').withAttribute('id','NewAccount:NewAccountScreen:ttlBar').withText('Enter Account Information');
        companyName = Selector('input').withAttribute('id','NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalContactNameInputSet:Name-inputEl');
        searchBtn = Selector('a').withAttribute('id','NewAccount:NewAccountScreen:NewAccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search');
        createAccountBtn = Selector('span').withAttribute('id','NewAccount:NewAccountScreen:NewAccountButton-btnInnerEl').withText('Create New Account');
        createAccountBtnCompanyMenu = Selector('a').withAttribute('id','NewAccount:NewAccountScreen:NewAccountButton:NewAccount_Company-itemEl').withText('Company');
}