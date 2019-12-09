import axios from 'axios';

axios.defaults.baseURL = "http://192.168.1.150:5000/api";

const fakeGroupId = "5dede9653d98db0f27ce0617";

class MeetupApi {
    constructor(){
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups (){
        const { data } = await axios.get(this.path);

        return data.meetups;
    }
}

export default MeetupApi;


// export const fetchMeetups = () => (
//     fetch('http://192.168.1.150:5000/api/meetups')
//         .then(res => res.json())
//         .catch(err => console.log(err))
// );