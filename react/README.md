Install Dependencies
    
    npm install
    
Note: make sure the fakeservice is already running before running the app
    
    cd commentsBox/fakeservice
    dpd comments/app.dpd    
    
Build & Run

    grunt serve

Test

    grunt test

Problem

    Grunt watch error - Waiting…Fatal error: watch ENOSPC

Fix

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
