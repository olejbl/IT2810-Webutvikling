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
We are using Jest and Cypress for testing our app.

##Components
ListView is by far our biggest component, not counting App, of course. In ListView we handle the logic for displaying the data set that is fetched in App. This includes, for example, pagination.
In ListView we are displaying the component "HoverPopout", which contains the components "MoviePopoutContent" and "MovieItem". HoverPopout is mostly a container that handles logic for whether the info box should be displayed or not.
MoviePopoutContent is the info box that is displayed when you hover over a MovieItem, which is the items you see in the app.

In addition to this we also made a Navbar (Really just a header, as there is no navigation going on there) which includes a SearchBar. The SearchBar can be used to search for specific movies.

##Redux
The Redux boilerplate code has been made, but not utilised.

##Backend
We chose to implement a REST API with Express, and used MongoDB as our database. We populated our database with a bunch of movies, and aimed to make an imdb-ish (With emphasis on ish) app. We chose REST because we knew a bit more about it than GraphQL, and wanted to not make the work too much for us. Mongoose was used to connect the API to the database.

##Search
The SearchBar component can be used to find movies with titles that contain what the user has searched for. These movies are displayed in the ListView, and the functionality for searching is implemented in App.js.

##Pagination
Pagination is handled in ListView.js. We chose to do it like this, as ListView already had all the movies as props, making it simpler to slice the array there. This was done with inspiration from https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs

##Styling
We used the component "Styled-components". This allowed us to declare container components as variables.

