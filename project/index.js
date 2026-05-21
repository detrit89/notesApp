import { runCommand } from './commands.js'

const command = process.argv[2]
const argument = process.argv[3]

runCommand(command, argument)