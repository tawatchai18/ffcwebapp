
import { Base64 } from 'js-base64';

const API = 'https://ffcmaekawtom.herokuapp.com/v1'
// const API = 'https://ffc-api-test.herokuapp.com/v1'

export function PostData(type, userData, id) {
  return new Promise((resolve, reject) => {
    let url = API + `/org/${id}/authorize`
    fetch(url, {
      method: 'post',
      body: JSON.stringify(userData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Base64.encode(userData.username + ':' + userData.password),
      })
    }).then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject('Username or password is incorrect');
      });

  });
}


export function SignupData(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(API + '/org', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  });
}

export function Data() {
  return new Promise((resolve, reject) => {
    fetch(API + '/org', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}
//show user หน้า users
export function CreatData(id) {
  return new Promise((resolve, reject) => {
    // fetch( API + `/org/5c875ec69522b200046a40fb/user`, {
    fetch(API + `/org/${id}/user`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer rJwQX3q0hhkIJvMnTssfMN4e3i0xEtkmON8G7G35w0AFDyGZ4OGpoEb5h7v9fKJE',      
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
// เรียก user ทั้งหมดดู
export function GetUser(id, userData) {
  return new Promise((resolve, reject) => {
    fetch(API + `/org/${id}/user`, {
      method: 'GET',
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": " Bearer rJwQX3q0hhkIJvMnTssfMN4e3i0xEtkmON8G7G35w0AFDyGZ4OGpoEb5h7v9fKJE",
      }),
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
//สมัคร user ใหม่
export function CreatUser(id, userData) {
  console.log(id,'opopopop');
  return new Promise((resolve, reject) => {
    // fetch(API + `/org/5c93568a8b7b100004ef921d/user`, {
    fetch(API + `/org/${id}/user`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer PkyHLDX6Y3A3kvtcUBo9W",
      }),
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// export function CreatUser(id, userData) {
//   var access_token = 'WXMUTd3F8Qz0kQhLx8q5Y';
//   // var requestHeaders = {
//   //   'Authorization': 'Bearer ' + token,
//   //   'Content-Type': 'application/json',
//   // };
//   return new Promise((resolve, reject) => {
//     fetch(API + `/org/5c93568a8b7b100004ef921d/user`, {
//       method: 'POST',
//       body: JSON.stringify(userData),
//       // headers: requestHeaders,
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': access_token,
//       }),
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }