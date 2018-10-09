import Axios from 'axios';
import cred from '../cred';

((async () => {
    try {
        const result = await Axios({
            url: 'https://api.github.com/repos/sudodotdog/test-field/forks',
            method: 'post',
            headers: {
                Authorization: `bearer ${cred}`,
            },
            data: {
            }
        })
        console.log(result);
    } catch (err) {
        console.log(err.response.header, err.response.data);
    }
})());
