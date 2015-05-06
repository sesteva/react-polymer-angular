Install
    
    npm install
    
Build & Run

    grunt serve

Test

    grunt test

Problem

    Grunt watch error - Waiting…Fatal error: watch ENOSPC

Fix

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
