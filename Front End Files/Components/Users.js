class User {
    constructor(firstname,lastname,email,address,gender,group,age,password){
        this.lastName = lastname;
        this.age = age;
        this.firstName = firstname;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.group = group;
        this.fullname = this.firstName+" "+this.lastName;
        this.password = password;
    }
}
export default User;