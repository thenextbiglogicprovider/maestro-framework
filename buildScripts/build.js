/*eslint-disable no-console*/

import webpack from "webpack";
import webpackConfig from "../Webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

console.log(chalk.blue('Generating production grade minified bundle files. This will take a moment.....'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const statsJson = stats.toJson();

  if (statsJson.hasErros) {
    console.log(chalk.res('Webpack generated the following errors'));
    return statsJson.errors.map(
      error => {
        console.log(chalk.red(error));
      });
  }

  if (statsJson.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings'));
    return statsJson.warnings.map(
      warning => {
        console.log(chalk.yellow(warning));
      });
  }

  console.log(`Webpack Stats:${stats}`);

  console.log(chalk.green('Webpack minification completed successfully. The files are written to /dist.'));
  return 1;
});
