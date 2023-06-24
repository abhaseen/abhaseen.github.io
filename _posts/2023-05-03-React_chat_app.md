---
layout: "post"
title: "React Chat App"
date: "2023-05-03"
tags: ["React", "socket.io", "node.js"]
---

A React chat app demo with Express.js Socket.io server.

Any user can log in with a name and room number. The room will display a general message using the socket broadcast feature to notify the rest of the room of users joining or leaving. Messages from users will be broadcast to all in the room.

The UI will identify your chat bubble as 'you', another user by their username and the server messages as 'ChatBot'.

<img style="width: 375px; margin: 0 auto;" src="/assets/images/posts/Chat-App-Demo.png" />

# React App Highlights

- Written in TypeScript
- MaterialUI for basic styles
- React-router-dom for navigation
- Socket.io-client for socket communication with server

# Express.js Server for Socket.io Highlights

- Express.js framework for quick setup
- Socket.io server library
- Cors middleware for accepting external connection

# Learning Experience

This project taught me the basics of web socket connection between a client and server. It was also a good opportunity to try out and learn about the Material UI styling and component library.

# Source Code

The source code for this project can be found on my Github: [Source Code](https://github.com/abhaseen/react-chat-demo)
