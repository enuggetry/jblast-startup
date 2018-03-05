# jblast-startup

### install files
```
git clone http://github.com/enuggetry/jblast-startup
cd jblast-startup
sudo npm install -g
```

This will install `jblast.service` into `/lib/systemd/system`.

### install service`
```
sudo systemctl daemon-reload (reload the scripts)
sudo systemctl enable jblast (start upon boot)
sudo systemctl start jblast (start)
sudo systemctl stop jblast (stop)
sudo systemctl reboot (reboot system)
```

