https://gist.githubusercontent.com/coryhouse/29bd1029b623beb4c7f79b748dcba844/raw/78dd4073db3fa233f9877fe129741596db814154/package.json

with nsp you can check id exist any vulnerability in your npm modules use: nsp check

->Show work in progress
    -localtunnel, ngrok, surge, now

-localtunnel
    -npm install localtunnel -g
    -Start your app
    -lt --port 3000  /* --subdomain evides */

Run multiple scripts
    "start": "npm-run-all --parallel security-check open:src",
    "open:src": "node buildScripts/srcServer.js",
    "security-check": "nsp check",

npm start -s /*eliminate noice*/



we can use ---> debugger to pause and check the application

 git reset ///revert git add .


Unit Testing Decisions
1- framework (mocha)
2- assertion Library (chai)
3- Helpers Libraries (jsdom)
4- Where to run test (node)
5- Where to place test (alongside)
6- When to run test (upon save)


Continuos Integration: 
    Why?
        Forgot to commit new file
        Forgot to update package.js
        Commit doesn'run cross-platform
        Node version conflicts
        Bad merge
        Didn't run test 
    
    What Does a CI server Do?
        Run Automated build
        Run your test 
        Check code coverage
        Automate deployment

