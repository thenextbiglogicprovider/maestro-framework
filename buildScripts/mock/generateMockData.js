/**
 * Json Mock Data API
 */

import jsf from "json-schema-faker";
import {
  schema
} from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";


const json = JSON.stringify(jsf(schema));

/*eslint-disable no-console */
fs.writeFile('./src/api/mockDb.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    return console.log(chalk.green('Mock Data Generated'));
  }
});
