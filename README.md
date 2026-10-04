## CSCE 41333: Exam 1: Practical

### Instructions

Create a **simple Web API for the Courses table** in the **exam1** database using **NodeJS/Express/MySQL2**.  Your API should implement the following endpoints. All of the endpoints should return *JSON formatted data*, and the POST method should use *JSON formatted objects* too.  Your application does not require authentication.  Implement each endpoint and test using your browser or Bruno.


### REST API Endpoints

| HTTP Method | Endpoint | Description | Payload Body (JSON) |
| ----------- | -------- | ----------- | ------------------- |
| GET | /api/courses | Retrieve all courses | None |
| GET | /api/courses/:id | Retrieve single course | None |
| POST | /api/courses | Create new order | JSON Data | 

#### Create MySQL Database
```
sudo mysql < exam1.sql
```
