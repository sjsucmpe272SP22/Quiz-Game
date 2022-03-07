## Group-21 CMPE 272

## Team Members
- SaiLahari Seethamraju                   (016037112)
- Sai Manasa Yadlapalli                   (015999659)
- Mounica Reddy kandi                     (016021902)
- Satya Venkata Chandra Tej Ventrapragada (016085251)
 
# Project Ideas:

### Project 1: Automated Image Captioning
#### Abstract:
This project is about designing & implementing a web application to generate captions or alt-text for Images. The development of the image description system is essential in accommodating visually/hearing impaired people. Recently, automatic generation of captions has drawn increasing attention and become one of the most important topics in computer vision and NLP. This project involves the creation of a functional, deployable web application that automatically generates descriptions or “captions” for uploaded images. It consists of two parts, the web application that hosts and interfaces with the captioning mechanism and the computational engine that actually handles the image description generation.

#### Approach:
- The web application provides an interactive user interface backed by a lightweight Python server such as Flask
- The application takes in images via the UI and sends them to a REST end point
- The back end has a prediction service that takes request and returns back the generated captions which are then displayed on the UI

#### Technologies used:
- HTML, ReactBootstrap (CSS), ReactJS, Python, Flask, Cloud Hosting (AWS/GCP), Docker, ML Library such as Tensorflow or Pytorch 


### Project 2
#### Project Name: Quiz Game

#### Abstract:
This project is a Quiz Game with questions and answers fetched from an API. The user will be able to choose between four categories and three difficulty levels. There are 10 questions per game with multiple and/or true or false answers. User will be able to see the highest Score and the name he typed in the game display HUD.

#### Approach:
This game is designed for users of all age groups.

1. When game start username, High Score, categories and difficulty are not displayed. 
2. Selecting game difficulty and categories by dropdown menu.
3. Not using next question buttons, it is more practically to jump to the next question after selecting an answer.

#### Technologies used: Html, CSS, and JavaScript.


## Project 3: Calorie Journal

#### Abstract:
We will build a full-stack calorie tracker application that users can use to keep track of average number of calories the consumed overtime. 
Multiple users can use the same website and compare their food habits and calorie consumption to other users.

#### Approach
1. When the Application starts
2. Users can acess a website to add username, food name and calories consumed
3. Application stores this data in a database
4. Provides visualization to see trends of calories consumed by user, by time(day, month, year)

#### Technologies Used:
- Mongo Db, ExpressJS, React JS, Node JS and react-chartjs-2 to visualize  data.



