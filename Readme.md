# Project-4-travel-reporter-express-backend and Frontend

This web application was designed to share users trips/adventures with others.

# Instructions
There is a frontend and backend repository listed below.

You will need the following packages loaded on you computer to run the repos.
1. Node.js
2. PostgresSQL 

You will need to follow steps 1,2 & 3 for each GitHub repo you will be working with.

1. Fork and clone this repository.
2. Update config.json development with local database information.
3. Run npm install
4. Run following steps as needed for backend, to create, migrate and install database
- npm install sequelize-cli sequelize pg
    - installs Sequelize
- npx sequelize init -instantiates Sequelize in your app.
    - Creates config,models, migrations, seeders
- npx sequelize model:generate --name NameOfYourModel --attributes column1Name:whatDataType,column2Name:whatDataType,etc.
    - generates model and migrations, don't forget to update defaultValue
- npx sequelize db:migrate
    - runs migrations
- npx sequelize seed:generate --name whatever-name-you-want
    - creates new, empty seed file
- npx sequelize db:seed:all
    - runs all the seed files to populate data in your table(s)
5. Run the following steps as needed for the frontend
- npm install react
- npm install axios
- npm install react-router react-router-dom

### Team Members:
- Todd Templen
- Rich Korneisel

### Technologies Used
- Node.js
- Express
- Sequelize
- MVC
- PGAdmin/PosgreSQL
- Postman
- React
- React Router
- Axios
- JSX
- React Bootstrap
- Heroku for deployment

### Planning - Wire Frames
[Planning folder](Planning)

[Homepage 1](Planning/Homepage.jpg)

[Create Report 2](Planning/Create_trip_report.jpg)

[View Reports 3](Planning/Trip_report.jpg)

## Frontend on Github
[Frontend on Github](https://github.com/richardkorneisel/Project-4-travel-reporter-react-bootstrap-frontend)

## Backend on Github
[Backend on Github](https://github.com/ttemplen/Project-4-travel-reporter-express-backend)


### Deployed App
[Link to Deployed Frontend App on Heroku](https://travel-report-app-frontend.herokuapp.com/)
### API
[Link to Backend API deployed on Heroku](https://travel-report-app-backend.herokuapp.com/api/travels)

### Component Structure
- App
    - Header
        - Nav
    - Homepage 
    - Create_trip
    - Trip_Detail
    - Trip_Gallery
        -Gallery_Card
    - Instructions
        
    ## User Stories
    1. As a user, I want to be able to browse through different trip reports on the internet so I reasearch new places to visit.
    2. As a user, I want to be able to browse through different trip reports on the internet so my friends and family can share their trips with me.
    3. As a user, I want to be able to create a trip report to share with my friends and family so they can share my experience.
    4. As a user, I want to be able to include a picture from my trip in my trip report to share with my friends and family.
    5. As a user, I want to be able to include to document the significant experiences from my trip in my text form to share with my friends and family.
    6. As a user, I would like to be able to show a map of the area I visited on my trip, so people can better understand where I visited.
    7. As a user, I would like to be able to edit my trip report, because I like to do updates as I recall them.
    8. As a user, I would like the option to delete a trip report because sometimes I change my mind about what I want to share.
    9. As a user, I want to be able to use the site easily on my mobile device as well as my computer because many times my mobile device is all I have with me.
    10. As a user I would like to see the most recently added or updated trips so I don't have to scroll through old trips I have already reviewed.

### Future Improvements
- Add user login for greater security
- Add a search function
- Allow for additional photos to be posted
- Fix page refresh issue on trip detail page and edit page


