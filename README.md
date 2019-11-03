# Data Intensive Computing
<p align="center">
    <img src="http://www.parmaco.se/wp-content/uploads/sites/4/2017/09/KTH-logo.png" width="180" alt="KTH"/>
</p>

## Description
Repository of the project developed for the "Data Intensive Computing" course, part of the Master of Science in Distributed Systems and Data Mining for Big Data at KTH Royal Institute of Technology.

This course aims at providing students with the knowledge and skills needed to understand, design and develop complex pipelines to process Big Data. Relevant frameworks like Spark, Flink and Kafka are all introduced and studied during the course, with an heavy focus on hands-on implementation.

This repository refers to the 2019 edition of the course. The implementation consists in a Big Data system to retrieve live-streaming tweets from featured hashtags on Twitter, process them and extract the keywords that represent each hashtag. Finally, all data is presented using a Word Cloud visualization in a Web Application deployed on Heroku.

## Website
[Trend Analyser](https://dic-kth2019.herokuapp.com)

The Kafka Consumer and Producer are available under /Spark. Kafka broker is deployed on a Google Cloud instance, now powered off.

The project has been developed with the following technologies:
- Big Data: Spark, Spark Streaming, Kafka
- Backend: Node.js
- Database: PostgreSQL
- Frontend: HTML5, CSS3, jQuery, Bootstrap

## Group
| First name | Last Name | Email address   |
| ---------- | --------- | --------------- |
| Vittorio | Denti | denti@kth.se |
| Francesco | Lorenzo  | fvlo@kth.se |
