import { Selector } from "testcafe";

export class FindNzPostCode{
    pgTitle = Selector('h1').withAttribute('class','page-header-title').withText('Find NZ Post');
    searchBox = Selector('input').withAttribute('placeholder','Search by suburb or postcode');
    cardTitle = Selector('span').withAttribute('class','postshop-card-title').withText('NZ Post Shop Johnsonville');
    dummyCardTitle = Selector('span').withAttribute('class','postshop-card-title').withText('NZ Post Centre Dummy Park');
    errWhen404 = Selector('h1').withText("Looks like something's gone wrong.");
}