import { Selector} from "testcafe";

export class GW9TopMenu{
        contactTab = Selector('a').withAttribute('id','TabBar:ContactTab');
        newContactMenuItem = Selector('span').withAttribute('id','TabBar:ContactTab:NewContact-itemEl');
        newCompanyMenuItem = Selector('span').withAttribute('id','TabBar:ContactTab:NewContact:NewCompany-textEl');
}