const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');
const log = console.log;

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler() {
    log(chalk.blue('adding note'));
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
    log(chalk.red.bold('removing note'));
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing your notes',
  handler() {
    log(chalk.green('All notes go here...'));
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    log(chalk.yellow('showing a specific note now'));
  },
});

log(yargs.argv);
