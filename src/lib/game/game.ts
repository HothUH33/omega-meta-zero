import { D } from "../decimal";
import { getLayerOrdinal } from "../layers/layers";
import { deepMerge } from "./save-load";

export class Game {
    points = new D(0);
    time = 540;

    getCurrentLayer(): D {
        return getLayerOrdinal(this.points);
    }

    toJSON() {
        return {
            $version: 1,
            time: this.time,
        };
    }

    loadFromObject(obj: object): void {
        deepMerge(this, obj);
    }
}