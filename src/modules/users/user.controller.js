import { readFileSync, writeFileSync } from "fs";
const data = readFileSync("./data.json");
let users = JSON.parse(data)

// *functions
const getAllUser = (req, res) => {
    res.json(users)
    console.log(users);
}

const addUser = (req, res) => {
    req.body.id = users[users.length - 1].id + 1;
    console.log(req.body.id);
    users.push(req.body)
    writeFileSync("./data.json", JSON.stringify(users, null, 2))
    res.end("user added successfully");
}

const updateUser = (req, res) => {
    let user = users.find(element => element.id == req.params.id)
    if (user) {
        user.name = req.body.name
        writeFileSync("./data.json", JSON.stringify(users, null, 2))
        res.json(user);
    } else {
        res.send("user not found");
    }
}

const deleteUser = (req, res) => {
    let deletedUser = users.find(element => element.id == req.params.id);
    if (!deletedUser) {
        res.send("user not found ");
    } else {
        users = users.filter(element => element.id != req.params.id);
        writeFileSync("./data.json", JSON.stringify(users, null, 2))
        res.end("user deleted successfully");
    }
}

const sortUsers = (req, res) => {
    const usersSorted = users.sort((a, b) => a.name.localeCompare(b.name));
    res.json(usersSorted);
}

const searchUser = (req, res) => {
    let searcheduser = users.find(element => element.id == req.params.id);
    if (!searcheduser) {
        res.send("user not found ");
    } else {
        res.json(searcheduser);
    }
}
export { getAllUser, sortUsers, deleteUser, searchUser, updateUser, addUser }