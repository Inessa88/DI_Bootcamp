// in users:
// 1. create a function
// 2. fetch the users from https://jsonplaceholder.typicode.com/users
// 3. return users json from the function 
// 4. export this function with module.exports




const getUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = awaitres.json()
        // console.log(data);
        return data
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getUsers
};
