# jblast-startup

To setup (jblastdemo):
```
sudo apt-get install redis-server
sudo systemctl start redis-server.service
sudo systemctl start /home/ericiam/jblast-startup/galaxy.service
sudo systemctl start /home/ericiam/jblast-startup/notify-email@.service
sudo systemctl start /home/ericiam/jblast-startup/jbconnect.service
```

Boot setup:
```
sudo systemctl enable redis-server.service
sudo systemctl enable /home/ericiam/jblast-startup/galaxy.service
sudo systemctl enable /home/ericiam/jblast-startup/notify-email@.service
sudo systemctl enable /home/ericiam/jblast-startup/jbconnect.service
```


