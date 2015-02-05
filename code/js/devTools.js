;(function() {
  // here we use SHARED message handlers, so all the contexts support the same
  // commands. but this is NOT typical messaging system usage, since you usually
  // want each context to handle different commands. for this you don't need
  // handlers factory as used below. simply create individual `handlers` object
  // for each context and pass it to msg.init() call. in case you don't need the
  // context to support any commands, but want the context to cooperate with the
  // rest of the extension via messaging system (you want to know when new
  // instance of given context is created / destroyed, or you want to be able to
  // issue command requests from this context), you may simply omit the
  // `hadnlers` parameter for good when invoking msg.init()
    function log() { console.log.apply(console, arguments); }
    function callback(res) { log('<<<<< callback invoked, return value = ' + JSON.stringify(res)); }
  var handlers = require('./modules/handlers').create('dt');
  var msg = require('./modules/msg').init('dt');
    msg.bg('echo', "DEV TOOLS WORKS", callback);
    /* global chrome */
    chrome.devtools.panels.create(
        'Instrument Code',
        null, // No icon path
        '../html/PreprocessorPanel.html',
        null // no callback needed
    );
})();
