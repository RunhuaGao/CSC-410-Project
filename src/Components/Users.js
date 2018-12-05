class User {
    constructor(firstname,lastname,email,address,gender,group,age){
        this.lastName = lastname;
        this.age = age;
        this.firstName = firstname;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.group = group;
        this.fullname = this.firstName+this.lastName;
    }
}
export default User;