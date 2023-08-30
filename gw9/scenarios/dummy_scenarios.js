import {MySummary} from "../pages/desktop/MySummary.js";
import { t } from "testcafe";

const mySummary = new MySummary();

export class dummy_scenarios {
    constructor() {}

    async verifyMySummary() {
        const isAvailable = await mySummary.myActivitiesListViewTileMyActivitiesListViewTile_LV.isAvailable();
        await t.expect(isAvailable).eql(true);
    }
}