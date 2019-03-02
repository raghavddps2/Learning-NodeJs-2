//So, as we learnt routing, it becomes cumbersome when we have many pages in our applications. So, to reduce the effort we can have
//a package called as express, whhich makes the same thing very very simpler as comapred tpo what we were thinking about.

/*

    So, to just add a new package what we can do is basically, use something called as the command 
        npm install express.
    
    This will set up express here. We just installed express and it will install other hellpful modules as well.

    So, to remove express basically what we have to do is just foollow the command called as:
        npm uninstall express.

    Now we are gonna talk about the package.json file. The package.Json file 
    We can always install any number of packages, but it is always a good idea, to keep track as to which packages areinstalled
    and on which packages your application depends upon.

    Package.json will keep track of the packagees we install.
    So, we will try this by installing express again.

    You will have to save the dependency so, we basically use what is called as the:
        npm install express --save,
        //Now automatically or magically a dependency will come, which is basicaly express here, in the package.json file.
        //Now if you do npm unistall express, the dependecy will go.
        To install all inn dependency on a single click we use npm install.



        //Next, we have an interesting package called as nodemon, so what nodemon does basically is that whenever we change
        any file during the development of our application, we actually have no need to chnage anything, 
        The server is automatically restrated, so this basically reduces the load for restarting the server again and again.

        Now to start this you will not use node (app name), instead you will use nodemon (appname).js
        npm install -g nodemon;

        So, nodemon will be a much better way of working while using nodeJs.


*/