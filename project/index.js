import { runCommand } from './commands.js'

const command = process.argv[2]
const argument = process.argv[3]
const title = process.argv[4]

runCommand(command, argument, title)