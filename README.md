
### Dependencies
- Must have node and npm installed. Visit https://nodejs.org/ for installation.

### Add your browserstack and applitools keys in wdio.config.ts file before running

```
const bstackUserName = '';
const bstackPassword =  '';
const applitoolsKey= '';

```

### Setup
For reference on webdriverio, check out [Webdriverio Tutorial](http://webdriver.io/). 

1. Install packages 
```
npm install
```

#### Parameters/Arguments to be passed to the test; All arguments are optional except spec/suite

`--browserName (default: chrome)`
 
#### Running a Single Spec 

Browserstack: 
```
npm run test -- --browserName chrome
```
