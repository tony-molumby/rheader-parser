
var headParser= function(header){
  var uAgent = header['user-agent'];  //after last space until end of string
  var xForward = header['x-forwarded-for']; //from the start until the first comma
  var language = header['accept-language']; //from the start util the first comma
  var uaPattern = /\w+\/\w+\.\w+$/ig;
  var oPattern = /[-\w+\.]+(?=,)/ig;
  
  var header_obj = {
    ipaddress: xForward.match(oPattern)[0],
    language: language.match(oPattern)[0],
    software: uAgent.match(uaPattern)[0]
  }
  
  return header_obj;
}

module.exports = headParser;