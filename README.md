

## Requirements

- Bower
- Nodejs
- NPM
- Install mongoDb and add it to your PATH

## Start
Clone the following repo: https://github.com/sesteva/react-polymer-angular
Please create a new branch. Use your name and lastname as Branch Name.

## Your task
You will notice the project contains the same app implemented in 3 different JS frameworks.
Your goal is to implement the following Feature. You can choose to do it in one or multiple frameworks.

### Feature – Comment-TimeLapse
We are going to build component that displays how long ago was the comment posted.

### Acceptance criteria
- “As a User,Given the list of comments includes at least 1 comment, When the list is displayed, Then I want to see how long ago has the comment been posted. For example: 1 minute ago”
- “As a User, Given the comment was posted less than 59 seconds ago, When the comment is displayed in the list, Then I want to see “1 minute ago”
- “As a User, Given the comment was posted more than 59 seconds ago but less than 59 minutes ago, When the comment is displayed in the list, Then I want to see “39 minutes ago”
 - “As a User, Given the comment was posted more than 59 minutes ago, When the comment is displayed in the list, Then I want to see “1 hour ago”
- “As a User, Given the comment was posted more than 59 minutes ago but less than 23 minutes and 59 mins ago, When the comment is displayed in the list, Then I want to see “4 hours ago”
- “As a User, Given the comment was posted more than 23 hours and 59 mins ago, When the comment is displayed in the list, Then I want to see “1 day ago”
- “As a User, Given the comment was posted more than 2 days  ago, When the comment is displayed in the list, Then I want to see “4 days ago”

### Requirements
You should have: 
- Nodejs
- NPM

### Comments DB
The folder fakeservice contains a small application that represent s your backend.
    Cd fakeservice
    Npm install
    dpd comments/app.dpd
    
#### Edit Database Model
    Open http://localhost:2403/dashboard/comments/properties/
    
#### Edit Data
    Open http://localhost:2403/dashboard/comments/data/

### Before you made your changes
Please make sure to push your branch to github



# Install Dependencies

    cd fakeservice
    npm install

# Running App

Now choose the folder by framework's name and just follow the corresponding README file instructions located in each folder.
