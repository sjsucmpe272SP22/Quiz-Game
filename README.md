## Group-21 CMPE 272

## Team Members
- SaiLahari Seethamraju                   (016037112)
- Sai Manasa Yadlapalli                   (015999659)
- Mounica Reddy kandi                     (016021902)
- Satya V                                 (016085251)


## Deployed Application
https://quiz-game-cmpe-272.vercel.app/


## Project Title: Quiz Game 

#### Abstract:
This project is a Full stack Quiz Game. Data fetch is performed from open source Context API-Trivia. Player can choose number of questions to start a game. Questions are multiple choice. Highest Score will be displayed on Leader Board.

#### Approach:
1. To start a game Player is required to register and choose the number of questions on game
2. Game begins on clicking start a new game on the navigation bar.
3. Inside User Interface, Question gets jump to the next after selecting an answer.
4. Leader Board gets updated dynamically based on high score.



### Problem Satement
Quiz Game is created by using technologies like React, React Hooks, NextJS, and Context open sourceAPI Trivia (opentdb.com). 


### Use Case-business Value
Main purpose of the current project is to implement a responsive quiz game.

#### Technologies used

- [React JS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Next/Auth](https://next-auth.js.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [JWT Authentication](https://jwt.io/)
- [Semantic UI](https://react.semantic-ui.com/)
- [React Query](https://react-query.tanstack.com/)

### Key features
*1. Responsive design using `@artsy/fresnel` & Semantic UI.*

*2. Registration and Sign in of game players.*

*3. Leader board to display top ten high scores.*

*4. Game.*

*5. Account:*
- Statistics;
- Option to choose Gender;
- Can choose number of Questions;

*6. About.*


## Getting Started
Create a .env file and add the following variables

`MONGODB_URI` <br/>
`MONGODB_DB`  <br/>
`JWT_SECRET`  <br/>

### To install dependencies
`npm install`

### To run the application.
1) Build the application `npm run build` <br/>
2) Run `npm run start`

Open [http://localhost:3000](http://localhost:3000) on your browser to view the application.
