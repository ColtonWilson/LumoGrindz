# Tech-Blog-with-Model-View-Controller-MVC-

##Create packageJson file
<pre>
npm init
</pre>

##Server setup steps when seeding database with a JavaScript file:

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

6. Install dotenv
<pre>
npm i dotenv
</pre>

7. Install Prettier
<pre>
npm install
npm install prettier eslint-config-prettier --save-dev
</pre>

a. To use prettier

<pre>
npx prettier --write example.js
</pre>

b. For additional prettier rules create a `.prettierrc.json` to root directory
<br> See file for example rule

c. For prettier ignore additional file with a `.prettierignore` in root directory
<br> See file for example rule

d. Inform ESLint that we are using Prettier
<br>Open the `.eslintrc.json` file and add the following property to the config object:

```json
"extends": ["prettier"]
```

## Hints

- Double-check that Prettier formatted your code the way you intended. Sometimes Prettier makes incorrect assumptions, particularly with HTML documents.

- More information on how to set up Prettier can be found in the [Prettier install guide](https://prettier.io/docs/en/install.html).

- The [Prettier documentation on options](https://prettier.io/docs/en/options.html) explains other configurations that you can add to the `.prettierrc.json` file.

8. Install Lint
<pre>
npm install eslint
</pre>

9. Install Handlebars
<pre>
npm install express-handlebars
</pre>

10. Install Mysql
<pre>
npm install --save mysql2
</pre>

11. Install Sequelize
<pre>
npm install --save sequelize
</pre>

12. Install dotenv
<pre>
npm install dotenv --save
</pre>

13. Install bcrypt
<pre>
npm install bcrypt
</pre>

13.5 Install Express
<pre>
npm install express
</pre>

14. Install Express-session
<pre>
npm install express-session
</pre>

15. Install Connect Session Store using Sequelize
<pre>
npm install connect-session-sequelize
</pre>

16. Seed the database
<pre>
node ./seeds/index.js
</pre>

17. Start Server
<pre>
npm start
</pre>
