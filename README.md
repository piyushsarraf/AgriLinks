# AgriLinks
An express JS API web-service which captures user contributed reports and returns an aggregate report in response.

## Installation
Clone the repository and Install the dependencies by `npm install` and start the Express Server with `npm start`

### MongoDB Atlas Connect 
Create a MongoDB DataBase in cloud and then follow the procedures and try to connect to DataBase.

### Checks by Posting and Getting data from the DataBase
Create a Post request on http://localhost:5000/reports from Postman with Sample Data and Hit Send, you will be greated with status and reportID.
![1](https://user-images.githubusercontent.com/47020544/117032011-c45d3900-ad1e-11eb-80ef-99bd8179b3e9.png)
Now, again use the same marketID and cmdtyID with different username and different priceUnit, price and Hit send, again you will be greated with status and same report ID
![2](https://user-images.githubusercontent.com/47020544/117032375-0f774c00-ad1f-11eb-8133-01c7efc99a3c.png)

Create a Get request to http://localhost:5000/reports with query ***reportID = above report ID*** and Hit send, You will get all the neccesary details with different usernames and marketID etc. Please find attached the ScreenShot.
![3](https://user-images.githubusercontent.com/47020544/117032737-59f8c880-ad1f-11eb-9616-90f812ece9b1.png)
