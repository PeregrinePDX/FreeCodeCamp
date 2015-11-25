/*jslint browser: true, devel: true, sloppy: true*/
/*global $ */


function displayUserData(userData, userName) {
    var html;
    console.log(userData);
    if (userData.stream === null) {
        html = '<div class="row"><div class="col-xs-6"><span class="avatar"></span><span class="userName"><a href="http://twitch.tv/' + userName + '">' + userName + '</a></span><span class="userStatus"></span></div></div>';
        $("#all").append(html);
    }
}

function getUserInfo(userName, index, array) {
    var url, json;
    url = "https://api.twitch.tv/kraken/streams/" + userName;
    $.ajax(url, {
        accepts: 'application/vnd.twitchtv.v3+json',
        data: 'client_id: hcz9uo2aio42t63cme2d3mxdmcama2w',
        dataType: 'jsonp',
        method: 'GET'
    }).done(function (data) {
        displayUserData(data, userName);
    });
}

var users, userStatus, i;


users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "medrybw"];

for (i = 0; i < users.length; i++) {
    userStatus = getUserInfo(users[i]);
}