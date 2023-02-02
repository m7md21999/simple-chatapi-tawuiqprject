# simple-chatapi-tawuiqprject


## Description

A very simple api chat Application for managing a chat room messages. Every chat room takes multiple messages from different users.



## Technologies and tools Used

- Typescript
- Express js
- Prisma
- Mysql
- Github
- Postman
- Zod


---
## Guidelines
You should create a user first to be able to send messages.
Then, create a new group. Once the group and user are created you can send a message to the group.

## Models

![image](https://user-images.githubusercontent.com/61372625/216359173-820ab2bd-f0be-4914-80da-292cf5582fa7.png)


## Endpoints
Users:
- Post - /api/adduser :: to create a new user
- Put - /api/updateuser/:id :: to update a user
- Delete - /api/deleteuser/:id :: to delete a user
- Get - /api/allusers/ to get all added users in db
- Get - /api/getusermsgs/:id :: to get all created msgs by a specific user By ID


Groups:
- Post - /api/creategroup :: to create a new group
- Put - /api/updategroup/:id :: to update a group
- Delete - /api/deletegroup/:id :: to delete a group
- Get - /api/allgroups :: to get all created groups
- Get - /api/getgroupmessages/:id :: to get all messges for a specific group By ID

Messages:
- Post - /api/sendmessage :: to send a message to a specific by a specific User 
- Delete - /api/deletemessage/:id :: to delete a specific message
- Put - /api/updatemessage/:id :: to update a specific message

## Simple postman collocation:
https://documenter.getpostman.com/view/10718197/2s935mqivo
![image](https://user-images.githubusercontent.com/61372625/216360095-3f7e4a8a-95a7-4214-96b8-13c0b8f7381c.png)



to start the server: npm start dev
