// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.license};

          ## Description
          ${data.description};

          ## Table of Contents;
          * [License](#license)
          * [Installation](#installation)
          * [Usage](#usage)
          * [Contributing](#contributing)
          * [Tests](#tests)
          * [Questions](#questions);

          ## License
          ${data.inputlic};

          ## Installation
          ${data.installation};
          
          ## Usage
          ${data.usage};

          ## Contributing
          ${data.contributing};

          ## Tests
          ${data.tests};

          ## Questions;
          github.com/${input.username};
          ${data.email};
          ${data.questions};

`;
}

module.exports = generateMarkdown;
