module.exports = function(request) {
    var ip = request.get("x-forwarded-for")
    var lang = request.get("Accept-Language").split(',')[0];
    var os = request.get("user-agent").split(') ')[0].split(' (')[1];
    
    var result = {
        ip: ip,
        language: lang,
        os: os
    }
    return result;
}