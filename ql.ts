import Axios from 'axios';
import cred from './cred';

// Axios({
//     url: 'https://api.github.com/graphql',
//     method: 'post',
//     headers: {
//         Authorization: `bearer ${cred}`,
//         'Content-Type': 'application/json',
//     },
//     data: {
//         query: `query {
//             repository(owner:"sudodotdog", name:"test-field") {
//             pullRequests(last: 10) {
//               edges {
//                 node {
//                   number
//                   mergeable
//                 }
//               }
//             }
//           }
//         }`
//     }
// }).then((result) => {
//     console.log(JSON.stringify(result.data, null, 2));
// }).catch((err) => {
//     console.log(err);
// })

Axios({
    url: 'https://api.github.com/repos/sudodotdog/test-field/pulls',
    method: 'post',
    headers: {
        Accept: 'application/vnd.github.symmetra-preview+json',
        Authorization: `bearer ${cred}`,
    },
    data: {
        title: "Amazing new feature",
        body: "Please pull this in!",
        head: "master",
        base: "master",
    }
}).then((result) => {
    console.log(JSON.stringify(result.data, null, 2));
}).catch((err) => {
    console.log(err.response.headers, err.response.data);
})
