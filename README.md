# LumoGrindz
![License Badge](https://shields.io/badge/license-MIT-yellow)  
Application [Link](https://lumo-grindz.herokuapp.com/)
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
The web application is designed to help users compare job positions and salaries across different industries and locations. The main features of the application include:
<br>
1. Job position search: The application allows users to see which positions are offered at different companies. 
2. Salary comparison: The application provides salary data for each job position, allowing users to compare their own salary to similar job positions at other companies or even the same company. 
3. User reviews: The application allows users to read and write reviews of employers and job positions. Users can share their experiences and insights with others to help them make informed decisions.    
  
Overall, the web application is a useful tool for job seekers and professionals who want to stay up-to-date on job trends, salaries, and benefits in their industry and location.  
  
Screenshot of working application:  
  
![screenshot of working app](https://github.com/ColtonWilson/LumoGrindz/blob/main/public/images/Screenshot%202023-02-15%20180105.png)

## Installation
Libraries used:  
-webkit-scrollbar
-prettier  
-eslint  
-express-handlebars  
-mysql2  
-sequelize  
-dotenv  
-bcrypt  
-express-session  
-connect-session-sequelize  
  
Copy repo code and open Visual studio Code to run. Follow steps below to set up server. 
  
### Server setup steps when seeding database with a JavaScript file:

1. Set login information in .env file
<pre>
DB_NAME='your_mysql_database_name'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password' 
</pre>

2. Login into mysql
<pre>
mysql -u root -p
</pre>

3. Source the schema
<pre>
source db/schema.sql;
</pre>

4. Exit out of mysql terminal
<pre>
quit
</pre>

5. Install node packages
<pre>
npm i
</pre>

6. Seed the database
<pre>
node ./seeds/index.js
</pre>

7. Start Server
<pre>
npm start
</pre>

## Usage
Link to application can be found [Here](https://lumo-grindz.herokuapp.com/)
Login craditionals that can be used:
<pre>
Email: admin@test.com
Password: 123456
</pre>
Or can create your own username and signup by providing a username, email, and password.
## Contributing
Submit bug and feature requests.
<br>
Furture work: 
1. Feature so that all job posts created have to be approved by admin before being posted to application.
2. Combine all job positings under one company umbrella card and when company card is selected it will then show all position cards for that company. 
3. Calculations for salary to break down into hourly
4. Delete and edit job positions
## Tests
No tests
## License
Please see https://mit-license.org/ to get detailed information for this license

## Questions
You can find [Colton](https://github.com/ColtonWilson) on Github
<br>
You can find [Mark](https://github.com/Marcosauras) on Github
<br>
You can find [Carlee](https://github.com/CarleeMarie) on Github
<br>
You can find [KaDaija](https://github.com/Kkadaija25) on Github






