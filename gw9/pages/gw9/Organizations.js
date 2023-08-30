import { Selector} from "testcafe";
import {BasePage} from "./BasePage";

export class Organizations extends BasePage{
        pageTitle = Selector('span').withAttribute('id','OrganizationSearchPopup:OrganizationSearchPopupScreen:ttlBar').withText('Organizations');
        organizationName = Selector('input').withAttribute('id','OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:GlobalContactNameInputSet:Name-inputEl');
        searchBtn = Selector('a').withAttribute('id','OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search');
        recordOne = Selector('a').withAttribute('id','OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchResultsLV:0:_Select');
}