# real-time-calculator
A challenge as part of a job application. The last 10 calculations done via the site across users are displayed with last displayed first.
Updated in real-time. 

The project is primarily in Django and uses swampdragon for real-time updates of the calculations across users which uses a tornado instance to keep a web socket open for the real-time updates.
 
To see it working,

Pull code.

Install redis and start the server.
```
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
sudo cp src/redis-server /usr/local/bin/
sudo cp src/redis-cli /usr/local/bin/
```

Make sure ```/usr/local/bin``` is in your ```PATH``` environment variable and start redis by typing ```redis-server```

Reference -> http://redis.io/topics/quickstart
------------------------


Now start a virtualenv in python3 mode, activate it and install the packages in requirements.txt file in the code base.
```
virtualenv -p /usr/bin/python3.* venv
source /path/to/venv/bin/activate
pip install -r /path/to/code/base/requirements.txt
```
--------------------------

Start Django and Swampdragon servers
```
python manage.py /path/to/code/base/manage.py runserver
python /path/to/code/base/server.py
```

Please see the site active at localserver:8000 and see real-time updates happening across tabs/ brwosers.
