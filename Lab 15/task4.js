function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];

            resolve(users);
        }, 100);
    });
}

async function showUsers() {
    let users = await getUsers();

    users.forEach(user => {
        console.log(user.name);
    });
}

showUsers();
