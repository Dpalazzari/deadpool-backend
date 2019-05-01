### Deadpool

This is the back end API for the DEADPOOL app for MCU

### Requirements

Install postgres, and create deadpool database:

```
createdb deadpool
▶ psql deadpool
psql (11.2)
Type "help" for help.

deadpool=#
```

Install consul (I typically do this through homebrew) and set up your consul cluster like so: https://developer.marvel.com/account 

<img width="451" alt="Screen Shot 2019-04-30 at 9 02 37 PM" src="https://user-images.githubusercontent.com/19585280/57004388-e4841b80-6b8b-11e9-8cb2-8700d9475b7f.png">

<img width="362" alt="Screen Shot 2019-04-30 at 9 07 40 PM" src="https://user-images.githubusercontent.com/19585280/57004398-01b8ea00-6b8c-11e9-9a06-04e30bec2c10.png">

<img width="545" alt="Screen Shot 2019-04-30 at 9 08 09 PM" src="https://user-images.githubusercontent.com/19585280/57004411-139a8d00-6b8c-11e9-8459-d745c4a78926.png">

Marvel API keys can be found [here]( https://developer.marvel.com/account).

Once database is created, and consul cluster is created, install dependecies ```npm run reinsall``` and run the migrations:

```
$ npx sequelize db:migrate
```

Check your deadpool database and make sure the tables are present:
<img width="450" alt="Screen Shot 2019-04-30 at 9 11 28 PM" src="https://user-images.githubusercontent.com/19585280/57004486-899ef400-6b8c-11e9-9abf-4da504620770.png">

Finally, run the seed files:
```
$ npx sequelize db:seed:all
```

The database should have populated characters table:
<img width="805" alt="Screen Shot 2019-04-30 at 9 13 10 PM" src="https://user-images.githubusercontent.com/19585280/57004514-ca970880-6b8c-11e9-880e-bcdddd5536e2.png">

