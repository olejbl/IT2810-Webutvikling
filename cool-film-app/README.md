#COOL FILM APP
Cool Film App is a React app that lets you see information about a few movies; both ratings, titles, posters, you name it! To set up the project, simply follow the instructions in this README.

##Setting up
To set up this project you will need node.js, which you can get from https://nodejs.org/. Once you have that, you clone the project using this command:
```
    git clone git@gitlab.stud.idi.ntnu.no:IT2810-H19/teams/team-50/prosjekt3.git
```

After this you have to navigate into the cool-film-app folder and run ```npm install```

Once this is done, you may run the app. To start the server you have to navigate into the API folder and run ```npm start```. After that, you may start the app with another console by running ```npm start``` in the cool-film-app folder.

##Testing
We haven't  implemented testing yet lmao

##Redux
Redux er satt opp, men ikke i bruk

##Backend
Vi har valgt å implementere et REST API med Express, og har MongoDB som database. Dette bestemte vi oss for fordi vi har mest kjennskap til REST, og ville spare oss for unødvendig arbeid med tanke på at prosjektet allerede er ganske stort. Mongoose har blitt brukt for å koble sammen databasen og API-et, siden vi fant ut at det var ganske greit å bruke.

We chose to implement a REST API with Express, and used MongoDB as our database. We populated our database with a bunch of movies, and aimed to make an imdb-ish (With emphasis on ish) app. We chose REST because we knew a bit more about it than GraphQL, and wanted to not make the work too much for us. Mongoose was used to connect the API to the database.
##Søk
Her må vi nesten spørre Henrik om hvordan den funker

##Paginering
