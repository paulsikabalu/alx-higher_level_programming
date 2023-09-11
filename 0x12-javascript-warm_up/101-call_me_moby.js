// 101-call_me_moby.js

function callMeMoby(x, theFunction) {
    if (x > 0) {
      theFunction();
      callMeMoby(x - 1, theFunction);
    }
  }
  
  module.exports.callMeMoby = callMeMoby;
  