const log4js = require('log4js');

log4js.configure({
    appenders: {
        miLoggerConsole: {type: 'console'},
        miLoggerFileInfo: {type: 'file', filename: 'logs/server.log'},
        miLoggerFileError: {type: 'file', filename: 'error.log'}
    },
    categories: {
        default: {appenders: ['miLoggerConsole'], level: 'trace'},
        server: {appenders: ['miLoggerConsole','miLoggerFileInfo'], level: 'trace'},
        utils: {appenders: ['miLoggerConsole'], level: 'trace'},
        dataBase: {appenders: ['miLoggerConsole'], level: 'trace'},
        controllers: {appenders: ['miLoggerConsole'], level: 'trace'},
        passport: {appenders: ['miLoggerConsole'], level: 'trace'},
        config: {appenders: ['miLoggerConsole'], level: 'trace'}
    }
})

module.exports = log4js;