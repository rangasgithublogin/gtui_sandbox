import {FindNzPostCode} from "../pages/FindNzPostCode.js";
import { t } from "testcafe";
import { RequestMock } from 'testcafe';
import data200 from './get_post_shop_location_200_response.json';

const landingPage = new FindNzPostCode();

export class FindNzPostCodeScenarios{
    constructor() {}

    async navigateToLandingPage(){
        await t.navigateTo('https://www.nzpost.co.nz/tools/find-nz-post');
        await t.expect(landingPage.pgTitle.visible).ok();
    }

    async inputAddress(givenAddress){
        await t.typeText(landingPage.searchBox, givenAddress.toString()).pressKey('enter');
    }

    async verifyResult(){
        await t.expect(landingPage.cardTitle.visible).ok();
    }

    async stubResponseAndTriggerApiCall(statusCode, address){
        let mock = null;
        let code = parseInt(statusCode);
        if (code === 404){
            mock = RequestMock()
                .onRequestTo(/\/v2\/locations/)
                .respond(null, statusCode);
        }
        else if (code === 200){
            console.log(data200);
            mock = RequestMock()
                .onRequestTo(/\/v2\/locations/)
                .respond(data200, statusCode, {
                'Access-Control-Allow-Origin':'https://www.nzpost.co.nz',
                'Access-Control-Allow-Headers':'content-type',
                'Access-Control-Allow-Credentials':'true',
                'Access-Control-Allow-Methods':'OPTIONS,HEAD,GET,PUT,POST,DELETE,PATCH',
                'Vary':'Access-Control-Request-Headers',
                'Vary':'Access-Control-Request-Method'
                });
        }
        await t.addRequestHooks(mock);
        await t.typeText(landingPage.searchBox, address.toString()).pressKey('enter');
    }

    async verifyResultByStatusCode(statusCode){
        if (parseInt(statusCode) === 404){
            await t.expect(landingPage.errWhen404.visible).ok();
        }
        else if (parseInt(statusCode) === 200){
            await t.expect(landingPage.dummyCardTitle.visible).ok();
        }
    }
}