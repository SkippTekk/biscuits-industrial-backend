# biscuits-industrial-backend
Website project for Eve Online.

Temp website will be located at [My website](https://skipptekk.com) Once i feel it's ready to be "open" to the public.

To see the project on your own machine, 
1) git clone https://github.com/SkippTekk/biscuits-industrial-vue.git
2) cd biscuits-industrial-vue
3) npm install
4) npm start

and it will be in [localhost](http://localhost:8081) port 8081

Modules used so far

This will be updated at a later time once fully functional works.
```npm i --save```

All the Packages that im planning to use


[mysql2](https://www.npmjs.com/package/mysql2)
``npm i mysql2 --save``

[dotenv](https://www.npmjs.com/package/dotenv)
``npm i dotenv --save``

[express](https://www.npmjs.com/package/express)
``npm i mysql2 --save``

[nodemon](https://www.npmjs.com/package/mysql2)
``npm i nodemon --save``

Creating a user in the database

CREATE USER 'username here'@'localhost' IDENTIFIED BY 'password goes here';
CREATE database eveproject;
GRANT ALL PRIVILEGES ON eveproject.* TO 'username here'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
