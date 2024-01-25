// function to generate markdown for README
function generateMarkdown(data, githubInfo) { 
  return `
  # **${data.title}**

  ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#Licence)
  - [Contributors](#Contributors)
  - [Instructions](#Instructions)
  - [Repository Link](#Repository)
  - [Github Info](#Github)
  - [Badges](#Badges)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} on GitHub.

  ## Repository

  - [Project Repo](${data.repo})

  ## Github

  -(${githubInfo.githubImage})
  - ${githubInfo.name}
  - [Github Profile](${githubInfo.profile})
  - <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;