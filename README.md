# jblast-startup

# copy ggblast to systemd

```

sudo cp jbconnect.service /etc/systemd/system
sudo cp galaxy.service /etc/systemd/system
sudo cp notify-email@.service /etc/systemd/system

sudo systemctl daemon-reload

sudo apt-get install redis-server

sudo systemctl start galaxy
sudo systemctl start notify-email@
sudo systemctl start jbconnect

To setup (jblastdemo):


Boot setup:
```
sudo systemctl enable redis-server.service
sudo systemctl enable galaxy
sudo systemctl enable notify-email@
sudo systemctl enable jbconnect
```

