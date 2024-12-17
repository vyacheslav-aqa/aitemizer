# AITemizer
## Test project
## Stack:
* Node.js
* Cypress

## Working with repo
1. Install GIT
2. Install Node.js
3. Authorize GitHub access in your IDE
4. Clone repo using terminal 'git clone https://github.com/vyacheslav-aqa/aitemizer.git'
5. Run 'npm install'
6. Create cypress.env.json file for secrets in the root directory. Fill this file in the following way:

{
    "userName": "Enter_the_user_name_here",
    "password": "Enter_the_user_password_here"
}

## Run tests
1. Go to package.json
2. Run "cy:open:aitemizer" script to run necessary spec
3. Run "cy:run:aitemizer" script to run all specs
4. Run "cy:run:smoke" script t  o run smoke tests