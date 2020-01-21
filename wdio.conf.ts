const browsersList = require('./src/config/browsers.ts');
const cliarguments = require('yargs')
    .default('browserName', 'chrome')
    .argv;
const browserName = cliarguments.browserName;

const bstackUserName = 'anand510';
const bstackPassword =  'QHqzxidWEyF5KRkPSepT';
const applitoolsKey= 'QOvCOZ9dbOSV0eRBnxwcJAmCJRzCQoj47hy102w1zJz5I110';

exports.config = {
    user: bstackUserName,
    key: bstackPassword,
    specs: [
        './dist/src/specs/**/*.js'
    ],
    maxInstances: 10,
    APPLITOOLS_API_KEY: applitoolsKey,
    capabilities: browsersList['DEFAULT_BROWSERLIST'][browserName],
    logLevel: 'info',
    baseUrl: 'https://www.softwareadvice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['browserstack'],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000, // For applitools
    },
}
