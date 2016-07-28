# WEBDRIVERIO starter
A starter kit for your e2e tests with webdriver.io and selenium-standalone

## Setup information
In order to run tests you will need to set up your local machine with selenium and webdriver

INSTALL SELENIUM
--------------
```
(sudo) npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start
```
Selenium standalone require [java sdk](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) to be installed on your local machine

~~DRIVER CHROME~~ (not sure if needed, it gives some error at the moment)
--------------
```
sudo selenium-standalone install --drivers.chrome.version=2.15 --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com​
```
INSTALL WEBDRIVER AND MOCHA
--------------
```
(sudo) npm install -g webdriverio
(sudo) npm install -g wdio-mocha-framework
(sudo) npm install -g mocha​
```

CREATE WEBDRIVER CONFIG FILE
--------------
If you clone this repo you don't need to make the next step, since folder with simple configuration is already there.
Those are the steps you need to make to have a configuration similar to this one.

```
mkdir test-folder
wdio config
```

- Where do you want to execute your tests? `On my local machine`
- Which framework do you want to use? `mocha`
- Shall I install the framework adapter for you? `Yes`
- Where are your test specs located? `empty` `/**/*.js`
- Which reporter do you want to use? `empty`
- Do you want to add a service to your test setup? `empty`
- Level of logging verbosity: `silent`
- In which directory should screenshots gets saved if a command fails? `./errorShots/`
- What is the base url? `http://localhost`

RUN TEST
--------------
`wdio wdio.conf.js`


USE CUSTOM VARIABLES
--------------
`USER=daniele wdio wdio.conf.js`

WEBDRIVERIO APIS AND GUIDE
--------------
- [Guide](http://webdriver.io/guide.html)
- [Api](http://webdriver.io/api.html)
