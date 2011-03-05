var handlersList = [];

handlersList.push( require('mernik_monitor/handlers/mernik'      )  );
handlersList.push( require('mernik_monitor/handlers/google'      )  );
handlersList.push( require('mernik_monitor/handlers/akavita'     )  );
handlersList.push( require('mernik_monitor/handlers/zerokz'      )  );
handlersList.push( require('mernik_monitor/handlers/liveinternet')  );
handlersList.push( require('mernik_monitor/handlers/mailru'      )  );
handlersList.push( require('mernik_monitor/handlers/rambler'     )  );
handlersList.push( require('mernik_monitor/handlers/hotlog'      )  );
handlersList.push( require('mernik_monitor/handlers/spylog'      )  );
handlersList.push( require('mernik_monitor/handlers/gemius'      )  );
handlersList.push( require('mernik_monitor/handlers/allby'       )  );

exports.list = handlersList;
