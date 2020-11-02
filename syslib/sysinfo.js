const os = require('os')
const MBinB = 1048576
require('../randomUtil')

// Simple version, bug link, and release notes output
exports.version = function() {
  let response = `I am BeatBattleBot v**${process.env.npm_package_version}**!\n\n`
  response += `**Release notes**\n${process.env.npm_package_releasenotes}\n\n`
  response += `**Bug or feature request? Drop it here!**\n${process.env.npm_package_bugs_url}\n`
  return response
}

exports.feedback = function() {
  return `got feedback, ideas, or bugs? Awesome! Let me know on github at ${process.env.npm_package_bugs_url}`
}

exports.serverstats = function() {
  if (randIntMinOne(50) == 50) {
    return choice([`I have no memory of this place`, `get me out of here!`, `life's good, the kids are well. How are you?`, `there has been an anomaly`])
  } else {
    let load = os.loadavg().map((val) => val.toPrecision(2))
    let free = Math.round(os.freemem() / MBinB)
    let max = Math.round(os.totalmem() / MBinB)
    let uptime = Math.round(os.uptime() / 3600.0)
    let desire = choice(['raise', 'smoothie', 'piece of cake', 'new synth plugin', 'massage', 'day off', 'new manager', 'new xlr cable', 'hammer and some balloons'])
    return `I've been awake for ${uptime} hours, my workload looks like ${load}, I've got ${free} MB free of ${max}, and I really want a ${desire} - thanks for asking.`
  }
}
