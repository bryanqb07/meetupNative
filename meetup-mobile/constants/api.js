export const fetchMeetups = () => (
    fetch('http://192.168.150.106:5000/api/meetups')
        .then(res => res.json())
        .catch(err => console.log(err))
);