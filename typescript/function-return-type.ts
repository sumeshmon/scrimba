type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

function fetchUserDetails( username: string): User {
    const user = users.find( item => item.username === username)

    if (!user){
        throw new TypeError(`User with username ${username} not found`)
    }
    return user
}

console.log(fetchUserDetails('john_doe'));
