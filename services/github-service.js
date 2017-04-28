const request = require('request-promise');

let getUser = (username, callback) => {
    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = profileUrl.concat('/repos');
    console.log('getting data');
    
   let profileInfo = request({
                url: profileUrl, 
                json: true, 
                headers: {
                'User-Agent': 'github-App'
            },
     });

     let repos = request({
                url: reposUrl, 
                json: true, 
                headers: {
                'User-Agent': 'github-App'
            },
     });

     return Promise.all([profileInfo, repos]);
}

module.exports.getUser = getUser;