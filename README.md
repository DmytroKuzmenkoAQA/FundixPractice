# FundixPractice

This project contains automated end-to-end (E2E) tests for the Fundix web application using Cypress.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup](#setup)
- [Running Tests Locally](#running-tests-locally)
- [Continuous Integration](#continuous-integration)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

## Project Overview
This repository is designed to:
- Test the main user flows of the Fundix web platform
- Ensure the chat widget, FAQ, and other key sections work as expected
- Provide a reliable CI/CD pipeline for automated testing

## Setup
1. **Clone the repository:**
	```sh
	git clone https://github.com/DmytroKuzmenkoAQA/FundixPractice.git
	cd FundixPractice
	```
2. **Install dependencies:**
	```sh
	npm ci
	```

## Running Tests Locally
To run all Cypress tests in headless mode:
```sh
npx cypress run --browser chrome
```

To open the Cypress interactive runner:
```sh
npx cypress open
```

## Continuous Integration
- GitHub Actions is used for CI/CD.
- On every push or pull request to `main` or `master`, Cypress tests are run automatically.
- See `.github/workflows/cypress-e2e.yml` for details.

## Project Structure
```
FundixPractice/
├── cypress/
│   ├── e2e/                # Cypress test specs and page objects
│   ├── fixtures/           # Test data (JSON)
│   └── support/            # Custom commands and support files
├── .github/workflows/      # GitHub Actions workflows
├── package.json            # Project configuration and scripts
├── .gitignore              # Ignored files and folders
└── README.md               # Project documentation
```

## Best Practices
- Do not commit `node_modules` (it's in `.gitignore`).
- Keep test selectors stable (prefer `data-testid` attributes).
- Use page objects for maintainable test code.
- Review CI results on the GitHub Actions tab after each push/PR.

## Contributing
1. Fork the repository and create your branch from `main`.
2. Make your changes and add tests as needed.
3. Open a pull request for review.

---

For any questions or issues, please open an issue in this repository.
# FundixPractice
