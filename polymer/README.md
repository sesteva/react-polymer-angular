# Install Dependencies

    cd polymer  
    npm install
    bower install

# fakeservice

1- We need to make sure the fakeservice is already running before running the app.
Go go fakeservice folder and follow the README file.

2- Once you are done you can run the fakeService for the app

    cd ../fakeservice/comments/fakeservice
    dpd comments/app.dpd   

Leave these terminal opened.    

3- Build & Run

    cd polymer
    grunt serve

4- Test

    grunt test

5- Troubleshooting

    Grunt watch error - Waiting…Fatal error: watch ENOSPC

Fix

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
