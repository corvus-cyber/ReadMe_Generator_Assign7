// function to generate markdown for README
function generateMarkdown(data) {
  const licenseEdit = data.license.replace(" ", "%20");
  return `# ${data.title}
#  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseEdit}-informational?style=for-the-badge&logo=appveyor.svg)

******Need to create a way to omit sections should the user not input their info into said section

## Description
${data.description}

## Table of Contents:
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions);

## License
This project is currently under the protection of the ${data.license} license. 
All usage of this project must follow in accordance with this license.

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.guidelines}

## Tests
${data.tests}

## Questions:
* Github Username: [${data.username}](https://github.com/${data.username})
* ${data.email}
${data.questions}

`;
} 

module.exports = generateMarkdown;