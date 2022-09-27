const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const express = require('express');


inquirer.prompt([
        //first player input
    { 
        type: 'input',
        message: 'First name',
        name: 'name1',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'First names position',
        name: 'position1',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'ID number',
        name: 'firstID',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'Email',
        name: 'email1',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'Office Number',
        name: 'officeNum1',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    }
    ,   //second player input
    {
        type: 'input',
        message: 'Second name',
        name: 'name2',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'Second names position',
        name: 'position2',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'ID number',
        name: 'secondID',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'Email',
        name: 'email2',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },{
        type: 'input',
        message: 'Office Number',
        name: 'officeNum2',
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    }
    ,
])
.then((data) => {fs.writeFile('MyTeam.html', writeToFile(data), (err) => err ? console.log(err) : console.log(data))});

function writeToFile(fileName, data) {
    
    fs.open(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log("successful");
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        preventDefault(fileName, data);
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}






