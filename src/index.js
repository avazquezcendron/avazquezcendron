#!/usr/bin/env node

console.log("runing");

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:agustiki@hotmail.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye! Have a great day :) Thanks for your interest.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("              Agustín Vázquez Cendron"),
  handle: chalk.white("@avazquezcendron"),
  work: `${chalk.white("Full Stack Software Engineer at")} ${chalk
    .hex("#2b82b2")
    .bold("Charles Taylor InsureTech")}`,
  location: chalk.cyan("Patagonia Argentina ⛰"),
  blog: chalk.gray("https://blog.aonikenk.dev"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ElAngelGris_05"),
  instagram: chalk.gray("https://www.instagram.com/") + chalk.yellow("agusvazquezcend_"),
  github: chalk.gray("https://github.com/") + chalk.green("avazquezcendron"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("agustinvazquezcendron"),
  resume: chalk.gray("https://resume.aonikenk.dev"),
  npx: chalk.red("npx") + " " + chalk.white("avazquezcendron"),

  labelWork: chalk.white.bold("             Work:"),
  labelLocation: chalk.white.bold("      Where am I?:"),
  labelBlog: chalk.white.bold("             Blog:"),
  labelTwitter: chalk.white.bold("          Twitter:"),
  labelInstagram: chalk.white.bold("         Istagram:"),
  labelGitHub: chalk.white.bold("           GitHub:"),
  labelLinkedIn: chalk.white.bold("         LinkedIn:"),
  labelResume: chalk.white.bold("           Resume:"),
  labelCard: chalk.white.bold("             Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelLocation}  ${data.location}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelResume}  ${data.resume}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm an enthusiast of good practices, design patterns and clean code."
    )}`,
    `${chalk.italic("Always looking to improve myself and learn new tools and technologies.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());