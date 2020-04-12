import axios from 'axios';

class Response{

    static GetRequest(getURL){

        return axios.get(getURL)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return null;
            });
    }

}

export default Response;
