import axios from "axios";

const getUsers = (user_id) => {
    return new Promise(async (resolve, reject) => { 
        const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

        resolve(data);
    });
};

const getPost = (user_id) => {
    return new Promise(async(resolve, reject)=> {
        const {data} = await axios(
            `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
        );

        resolve(data);
    });
};

export default async () => {
    try{
        const users = await getUsers(1);//get user_id = 1
        const post = await getPost(1);// post user_id = 1

        console.log(users);
        console.log("post: ",post);
    }catch(e){
        console.log(e);
    }
}

