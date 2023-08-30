import { Selector} from "testcafe";
import {BasePage} from "./BasePage";

export class CreateAccount extends BasePage{
        pageTitle = Selector('span').withAttribute('id','CreateAccount:CreateAccountScreen:ttlBar').withText('Create account');
        companyName = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:CreateAccountContactInputSet:GlobalContactNameInputSet:Name-inputEl');
        address1 = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl');
        city = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:City-inputEl');
        stateDropDown = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:State-inputEl');
        zipcode = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:PostalCode-inputEl');
        addressTypeDropDown = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:AddressType-inputEl');
        selectOrganization = Selector('div').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:Producer:SelectOrganization');
        producerCodeDropDown = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:ProducerCode-inputEl');
        organization = Selector('input').withAttribute('id','CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:Producer-inputEl');
        updateBtn = Selector('span').withAttribute('id','CreateAccount:CreateAccountScreen:Update-btnInnerEl');
}