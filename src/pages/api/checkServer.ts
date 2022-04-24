import axios from 'axios';


export default function () {
    setInterval(() => {
        axios({
            url: process.env.NEXT_PUBLIC_BACKEND_URL,
            method: 'GET',
        });
    }, 1680000);
}