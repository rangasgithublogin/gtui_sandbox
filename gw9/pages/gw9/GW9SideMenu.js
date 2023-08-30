import { Selector} from "testcafe";

export class GW9SideMenu{
        desktopActionsMenu = Selector('span').withAttribute('id','Desktop:DesktopMenuActions-btnWrap');
        newAccount = Selector('a').withAttribute('id','Desktop:DesktopMenuActions:DesktopMenuActions_Create:DesktopMenuActions_NewAccount-itemEl');
}