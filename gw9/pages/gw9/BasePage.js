import { Selector} from "testcafe";

export class BasePage{
    message = Selector('div').withAttribute('class','message');
}