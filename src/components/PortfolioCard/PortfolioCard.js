import React from 'react';
import '../../styles/PortfolioCard.css'
// import Pic from '../../utils/images/Pic.jpg'
import Card from 'react-bootstrap/Card'


function PortfolioCard() {
    return (
        <Card.Body className="card-body">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/TasksForLaughs" target="_blank"><img src="Images/LaughyTasky.png"
                                title="Laughy Tasky Repo" class="card-img-top" alt="Project One Task App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://jpino7.github.io/TasksForLaughs/" target="_blank">Laughy Tasky</a> */}
                            <p class="card-text">This project was to bring motivation to a busy individual by creating a task
                            application to allow the user to save tasks throughout the day and when completing tasks have the choice
                                between a Chuck Norris joke or an Inspirational quote.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/Weather-Dashboard" target="_blank"><img src="Images/WeatherorNot.png"
                                    title="Weather or Not Repo" class="card-img-top" alt="Weather or Not App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://jpino7.github.io/Weather-Dashboard/" target="_blank">Weather or Not!</a> */}
                            <p class="card-text">This project was to create a Weather Dashboard application to allow the user to search
                                    weather in multiple cities</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/Code-Quiz" target="_blank"><img src="Images/CodeQuiz.png"
                                        title="Code Quiz Repo" class="card-img-top" alt="Code Quiz App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://jpino7.github.io/Code-Quiz/" target="_blank">Code Quiz</a> */}
                            <p class="card-text">This project was to create an application as a timed code quiz with multiple-choice
                                    questions.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/TeamGenerator" target="_blank"><img src="Images/TeamGenerator.png"
                                            title="Team Generator Repo" class="card-img-top" alt="Team Generator App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://github.com/jpino7/TeamGenerator/tree/master/output">Team Generator
                                                 Command Line Application</a> */}
                            <p class="card-text">This project was to build a software engineering team generator command line
                                    application.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/READMEgenerator" target="_blank"><img src="Images/Demo.gif.gif"
                                title="READMEGenerator Repo" class="card-img-top" alt="README Generator App" /></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://github.com/jpino7/READMEgenerator/blob/master/README.md"
                                        target="_blank">README
                                        Generator Command Line Application</a> */}
                            <p class="card-text">This project was to build a command line application that dynamically generates a
                                        README.md from a user's input. The app is invoked with the command: node index.js</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/jpino7/Burger" target="_blank"><img src="Images/Eat Da Burger UI.png"
                                    title="Eat Da Burger! Repo" class="card-img-top" alt="Eat Da Burger App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://shielded-inlet-96490.herokuapp.com/" target="_blank">Eat Da Burger!</a> */}
                            <p class="card-text">A burger logging application using MySQL, Node, Express, Handlebars, and ORM. This
                            application follows the MVC design pattern. The app uses Node and MySQL to query and route data and
                                            Handlebars to generate the HTML.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <a href="https://github.com/lvarnum/Lead-Astray" target="_blank"><img src="Images/LeadAstray.png"
                                        title="Lead Astray Repo" class="card-img-top" alt="Lead Astray App"></a> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="https://frozen-crag-01668.herokuapp.com/" target="_blank">Lead Astray</a> */}
                            <p class="card-text">A pet finding application using MySQL2, Sequelize, Express, Handlebars, Passport, and
                                                Amazon S3.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        {/* <iframe src="https://giphy.com/embed/LnERKvSzDWHIcA0oMv" width="200" height="200" frameBorder="0"
                                            class="giphy-comingsoon"></iframe> */}
                        <div class="card-body">
                            {/* <a class="card-title" href="#">Future Project</a> */}
                            <p class="card-text">A work in progress, stay tuned!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card.Body >
    )
};


export default PortfolioCard;