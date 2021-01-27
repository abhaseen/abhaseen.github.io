---
layout: "post"
title: "Angular Project - Word Dictionary"
date: "2020-11-23"
tags: ["Angular", "Web Development"]
---

For a school assignment, our task was to create a website in Angular. This website consisting of both a front-end and back-end would be a dictionary of words with associated translations.

# Showcase of the Website

When you first land on the page, you will see a list of all the words that are in the database. You will be able to create a new term, or view the details of an already existing term.

Home page:

![Home Page](/assets/images/posts/AngularProject_HomePage.png)

When clicking on the details, we are then able to see who the different definitions, who is the author, date of creation and revision, how many likes does the term have and what are its translations. Additionally, we also have the option to add another definition.

Details page:

![DetailsPage](/assets/images/posts/Details_AngularProject.png)

The layout and functionality of the translations is identical to what is seen above.

We can add new definitions, this will take us to a form page. Likewise, from the home page we can also create a bran new term. These are how the forms look:

Creating a New Term:

![Create New Term](/assets/images/posts/CreateNewTerm_AngularProject.png)

Creating a New Definition:

![Create New Definition](/assets/images/posts/AddDefinition_AngularProject.png)

Lastly, we have an About Page that shows what the website is about and who it's by. The site also has a fully working search bar at the top right which allows you to search for the terms registered in the database.

About Page and Search functionality:

![About and Search](/assets/images/posts/AboutSearch_AngularProject.png)

# Skills Used and Things I Learned

## Learning Experience

This project was novel to me as I had to use Angular. The most difficult part of this project for me was setting up the like buttons to update the values both on the front-end and the back-end simultaneously. Learning Angular was interesting, as up until this project, I had only used React. I find Angular takes a more modular approach to web development. At times, the many different files (typescript files, css and HTML for each component) was hard to keep track of. But the more I worked on this project, the easier it became to pick up what was necessary.

## Skills Used

- Angular
- NodeJS
- Express
- Heroku

# Source Code

The source code for this project can be found on my Github:

- [Back-end](https://github.com/abhaseen/Angular-Word-Dictionary-Server)
- [Front-end](https://github.com/abhaseen/Angular-Word-Dictionary-Client)
