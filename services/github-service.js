const request = require('request-promise');

let getUser = (username, pageNumber, pageLength) => {
  
    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = profileUrl.concat(`/repos?page=${pageNumber}&per_page=${pageLength}`);
    
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

     return repos;
    //  return Promise.all([profileInfo, repos]);
}

module.exports.getUser = getUser;