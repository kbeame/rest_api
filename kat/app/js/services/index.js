module.exports = function(app) {
  require('./total_error_handle.js')(app);
  require('./kb_resource.js')(app);
  require('./war_prediction.js')(app);
};
