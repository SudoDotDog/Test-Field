import Axios from 'axios';
import cred from './cred';

((async () => {
    try {
        const result = await Axios({
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
        })
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {
        console.log(err.response.header, err.response.data);
    }
})());
