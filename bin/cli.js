#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs-extra');
const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const appName = process.argv[2];
if (!appName) {
  console.log(chalk.red('Please specify the app name.'));
  throw new Error('APP_NAME_MISSING');
}

const appDirectory = fs.realpathSync(process.cwd());
const templateName = yargs.argv['template'];
const language = yargs.argv['language'];
let templatePath = 'templateReact';

if (templateName === 'apollo-client') {
  templatePath = 'templateReactApolloClient';
}

if (language === 'angular') {
  templatePath = 'templateAngular';
}

const source = path.resolve(__dirname, `../templates/${templatePath}`);
const destination = path.resolve(appDirectory, appName);

console.log(
  chalk.green(
    `Cloning the ${chalk.magenta('Custom Tempalte')} with name ${chalk.cyan(
      appName
    )} \n`
  )
);

fs.copy(source, destination)
  .then(() => {
    console.log(
      chalk.green(
        `Template cloned! ${chalk.magenta(
          'installing app dependencies! \n'
        )}Sorry, npm is not fast like ${chalk.cyan('Anand Dev :)')} \n`
      )
    );

    const installDepsCommand = `cd ${appName} && npm install`;
    const installedDeps = runCommand(installDepsCommand);

    if (!installedDeps) {
      process.exit(-1);
    }

    console.log(chalk.green(`Congratulations! You are ready.`));
    console.log(`cd ${chalk.cyan(appName)} && run ${chalk.cyan('npm start')} `);
  })
  .catch((err) => {
    console.log(chalk.red('An error occurred while copying the folder.'));
    throw new Error(err);
  });

// yargs.command({
//   command: 'add',
//   describe: 'Add a new data ',
//   handler: function () {
//     console.log('Adding a new data successfully!');
//   },
// });
