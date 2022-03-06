# Group-21 CMPE 272

## Team Members
- SaiLahari Seethamraju                   (016037112)
- Sai Manasa Yadlapalli                   (015999659)
- Mounica Reddy kandi                     (016021902)
- Satya Venkata Chandra Tej Ventrapragada (016085251)

## Kafka Assignment 

- Java application to produce and consume from the Kafka topic using the kafka-clients directory in thie repo.

#### Prerequisites
  - Docker, docker-compose, Kafka must be installed.
  - Launch Zookeeper on port: 2181, Kafka on port: 9092

#### Step 1: Run Producer
  - Producer writes 10 sample key: value pairs (key0: value0),  (key1: value1), ...(key9: value9) to Kafka topic - sample-topic <br>
   `javac SampleProducer.java`

#### Step 2: Run Consumer
  - Consumer retrives the key: value pairs written by the Producer.<br>
   `javac SampleConsumer.java`
   
 
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


### Project 2: Quiz Game
#### Abstract:
This project is a Quiz Game with questions and answers fetched from an API. The user will be able to choose between four categories and three difficulty levels. There are a few questions per game with multiple and/or true or false answers. User will be able to see the highest score and the name typed in the game display HUD.

#### Approach:
This game is designed for users of all age groups build using HTML, CSS, and JavaScript.


### Project 3: Calorie Journal
#### Abstract:
We'll build a full-stack calorie tracker application that users can use to keep track of users food habits and are able to track their entire calorie count by utilizing the features of the MERN stack.

#### Approach
This project is developed using MERN stack technology. Dependencies: dotenv, cors, mongoose, express, nodemon, body-parser


