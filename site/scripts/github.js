let githubApp = window.githubApp || {};
document.getElementById('txt-user-search').addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        githubApp.getUser();
    }
})

githubApp.getUser = function(){
    let username = document.getElementById('txt-user-search').value;
    if(!username)
        return alert('please fill a username');

        console.log(username);
        document.getElementsByClassName('loader')[0].classList.remove('hidden');
        fetch(`/github/${username}`).then(res => res.json()).then((result) => {
            console.log(result);
            document.getElementsByClassName('result')[0].style.cssText = 'display: block;';
            document.getElementsByClassName('loader')[0].classList.add('hidden');
            document.getElementsByClassName('error')[0].style.cssText = 'display: none;';
            
            drawUserInfo(result[0]);
            drawRepos(result[1]);
            
    } ).catch((e) => {
            document.getElementsByClassName('result')[0].style.cssText = 'display: none;';
            document.getElementsByClassName('error')[0].style.cssText = 'display: block;';
        console.log('Error happened ' + e)
    });
}

var drawUserInfo = (user) => {
    document.getElementById('img-user').setAttribute('src', user.avatar_url);
    document.getElementById('user-handle').textContent = '@'+ user.login;
    document.getElementById('username').textContent = user.name;
    document.getElementById('user-info').textContent = user.bio || 'No details found';
    document.getElementById('user-url').setAttribute('href', user.html_url);
}

var drawRepos = (repos) => {
    let liArray = '';
    let counter = 0;
    let template = document.getElementById('repos-template').value;
    repos.forEach( (element) => {
       liArray += template.replace('{{repo-name}}', element.name ).replace('{{repo-url}}', element.html_url)
                                .replace('{{star-count}}', element.stargazers_count).replace('{{fork-count}}', element.forks_count)
                                .replace('{{extra-class}}', 'repo'+ counter);
       counter++; 
       if(counter==2)
        counter =0;

       console.log(element);
       
    }, this);
    document.getElementById('repos-ul').innerHTML =liArray;
}

