## Examensarbetet - Joel M - Deadline: 25 Januari

Detta projekt kommer jag att med Node.js bygga en färdig webbshop. Tanken är att utomstående ska kunna antingen använda den som den är eller bygga vidare/modifiera webbshopen som önskas. 

Jag kommer i senare skede skriva användardokumentation för hur man startar upp webshoppen och hur man använder den. 


# How to setup project

1. Download repository

2. Make sure you have Node.js installed https://nodejs.org/en/ and get https://www.mongodb.com 

3. Open another tab in your terminal and run mongodb.

4. Drag the cloned folder to your terminal, make sure you have the npm package "nodemon" and then run nodemon in the terminal.

5. localhost should now be running on port 3000.

6. To upload products onto database you run "node product-list.js" in the terminal from inside the "transfer" folder.

###How to deploy site

1. Visit https://devcenter.heroku.com/articles/getting-started-with-nodejs and follow the guide from there
also read this article https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment

2. Create an account at mLab - https://mlab.com

# Todos

- [X] Starta upp projekt med express generator och använd hbs som template
- [X] Bygga på index
- [X] Setup connection mongoDB create products and list from db to index
- [X] Konto registrering
- [X] Validering
- [X] Release 1
- [ ] Release 2
- [ ] Release 3
- [ ] Dokumentation för hur man installerar och använder projektet
- [ ] executive summary
- [ ] Sammanställa examensrapport

Se även fler To-Dos genom att gå in under fliken "Issues" i projektet. 

Demo: https://ancient-badlands-72955.herokuapp.com
