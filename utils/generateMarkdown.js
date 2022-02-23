// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}



  ## Description

  ${data.description}



## Table of Contents (Optional)


- [Usage](#usage)

${data.usage}


- [License](#license)

${renderLicenseLink(data.license)}


## Installation

${data.installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    
  ![alt](assets/images/screenshot.png)
  

## How to Contribute

${data.contributing}



## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
