npm install dubapi
var DubAPI = require('dubapi');

new DubAPI({username: 'alexsir', password: 'qwert789'}, function(err, bot) {
    if (err) return console.error(err);

    console.log('Running DubAPI v' + bot.version);

    function connect() {bot.connect('friendship-is-magic');}

    bot.on('connected', function(name) {
        console.log('Connected to ' + name);
    });

    bot.on('disconnected', function(name) {
        console.log('Disconnected from ' + name);

        setTimeout(connect, 15000);
    });

    bot.on('error', function(err) {
        console.error(err);
    });

    bot.on(bot.events.chatMessage, function(data) {
        console.log(data.user.username + ': ' + data.message);
    });

    connect();
});
