[![License Badge](https://img.shields.io/badge/license-MIT-success?style=plastic)](./LICENSE)

# M3-Password-Generator

## Description

When visiting this website, if you click on the generate password button a randomized password will be printed. I created this application in order to practice basic Javascript. 
While building this project I learned to:

- Assign values to variables
- Create a while loop that checks whether an input is valid
- Combine multiple strings together based on user input
- Program a random character generator

The original User Story and Acceptance Criteria were as follows:

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation

To run the application navigate to: [mateo-wallace.github.io/M3-Password-Generator/](https://mateo-wallace.github.io/M3-Password-Generator/).

## Usage

1. Click on the `Generate Password` button on the center of the screen. This will pop up an alert window.
2. Follow the instructions listed on screen to add your inputs.
3. After all questions have been answered the display in the center of the screen will populate with a randomly generated password.
4. Copy the password and use it as you see fit. Below is an example of what a generated password should look like.

![example of what navigating to the website should look like](./assets/images/deployed.png)

## Tests

Try typing invalid inputs:
- Password length under 8 or over 128 characters
- Selecting cancel on all character types

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

## Acknowledgments

Foolish Developer (2022, June 2). Random Password Generator using Javascript. DEV Community 👩‍💻👨‍💻. Retrieved October 1, 2022, from https://dev.to/code_mystery/random-password-generator-using-javascript-6a 
