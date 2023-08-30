import { Selector} from "testcafe";
import {BasePage} from "./BasePage";

export class GW9AccountFileSummary extends BasePage{
        pageTitle = Selector('span').withAttribute('id','AccountFile_Summary:AccountFile_SummaryScreen:ttlBar').withText('Account File Summary');
        accountName = Selector('div').withAttribute('id','AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:Name-inputEl');
        addressType = Selector('div').withAttribute('id','AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:AddressShortInputSet:AddressType-inputEl');
}