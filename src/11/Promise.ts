import axios from "axios";

axios.get("https://www.google.com")
    .then(response => response.data)
    .then(data => console.log(data))

const getVacanciesCountFromGoogle = () => {
/*    const pr = axios.get("https://www.google.com")
    const pr2 = pr.then(res => res.data)
    return pr2;*/

    return axios.get("https://www.google.com")
        .then(res => res.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogle().then(count => console.log(count))