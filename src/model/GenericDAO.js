import fs from "fs";
import { __dirname } from "../utils.js";
export class GenericDAO {

    constructor(path) {
        this.filePath = `${__dirname}/data/${path}`;

        if (!fs.existsSync(this.filePath)) {
            fs.mkdir(__dirname + "/data", () => {
                fs.writeFileSync(`${__dirname}/data/${path}`, JSON.stringify([]), { encoding: "utf-8" });
                this.filePath = `${__dirname}/data/${path}`
            })
        }
    }
}