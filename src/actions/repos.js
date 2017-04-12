import offlineData from '../utils/offlineData';


export const load = (url)=> {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status === 200) {
        // let res = JSON.parse(this.responseText)
        resolve(JSON.parse(this.responseText));
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

};


export function setUserName(name){
    return { 
        type:'SET_USERNAME',
        name:name
    }
}

export const fetchDataRepos = (userName) => dispatch =>{
    // console.log('action =>', 'fetchData');
    load(`https://api.github.com/users/${userName}/repos`)
        .then(res => {
            // console.log('res = ', res);
            dispatch({type:'FETCH_DATA_REPOS', data:res});
    });
};
export const fetchDataProfile = (userName) => dispatch =>{
    // console.log('action =>', 'fetchData');
    load(`https://api.github.com/users/${userName}`)
        .then(res => {
            // console.log('res = ', res);
            dispatch({type:'FETCH_DATA_PROFILE', profile:res});
    });
};

export const fetchOfflineData = () => dispatch =>{
    // console.log('action =>', 'fetchData');
            dispatch({type:'FETCH_OFFLINE_DATA', data:offlineData});
};

