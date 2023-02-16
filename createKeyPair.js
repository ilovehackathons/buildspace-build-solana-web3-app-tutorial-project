// Shoutout to Nader Dabit for helping w/ this!
// https://twitter.com/dabit3

const fs = require("fs");
const anchor = require("@coral-xyz/anchor");

const account = anchor.web3.Keypair.generate();

fs.writeFileSync("./app/src/keypair.json", JSON.stringify(account));
