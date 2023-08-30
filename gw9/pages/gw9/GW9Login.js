import { Selector } from "testcafe";

export class GW9Login {
    username = Selector('input').withAttribute('componentid','Login:LoginScreen:LoginDV:username');
    password = Selector('input').withAttribute('componentid','Login:LoginScreen:LoginDV:password');
    loginBtn = Selector('a').withAttribute('componentid','Login:LoginScreen:LoginDV:submit');
}