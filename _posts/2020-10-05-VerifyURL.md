---
layout: "post"
title: "VerifyURL - A Website Checker"
date: "2020-10-05"
tags: ["Python", "App Development", "Bash", "Beautiful Soup"]
---

For my open source course, our first assignment that we had to work on and build upon for our semester was a tool that checks the return code from a website or list of websites.

# Showcase of the Project

This is a script that will run a list or a single URL and will tell you the return code.

![Default Help](/assets/images/posts/DefaultHelp_VerifyURL.png)

![Read File](/assets/images/posts/ReadFile_VerifyURL.png)

As we can see, several things are implemented here:

- Color for different request code ranges
- Error handling for Connections that are refused
- If a connection takes longer than 5s to connect, it will be timed out - because no one wants to wait forever.

For a full list of details and other functionality check out the [Github Repo](https://github.com/abhaseen/Verify-URL)

# Skills Used and Things I Learned

## Learning Experience

Working on this project was interesting as it combined my knowledge of UNIX and Python. It created a nice script which serves as a useful tool for checking the return codes of websites. It was fun and enjoyable as I learned how to make colors and got to work with one of my friends on it. Additionally, I got to learn how to use Beautiful Soup as well as colorama which is a cross-platform color coding which allows the terminal to have the same colors whether on a Linux or Windows machine.

## Skills Used

- Python
- Bash
- Beautiful Soup
- Colorama

# Source Code

The source code for this project can be found on [my Github](https://github.com/abhaseen/Verify-URL).
