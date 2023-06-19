class Config {
    static dbUser = 'userName';
    static dbPassword = 'secret';
    static apiToken = 'abcd';
    static {
        console.log('inislaized');
    }
}

console.log(Config.apiToken);




// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // static compareByAge(user1, user2) {
//     //     return user1.age - user2.age;
//     // }
// }


// const user1 = new User('Rakesh', 40);
// const user2 = new User('Ayush', 20);
// const user3 = new User('Vsu', 19);


// // const array = [user1, user2, user3];


// // array.sort(User.compareByAge);
// console.log(array);