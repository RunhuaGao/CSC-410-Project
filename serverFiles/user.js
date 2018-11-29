class User {
    constructor(firstname,lastname,age,gender,group,address,email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.group = group;
        this.address = address;
        this.email = email;
    }

    getJson(){
        var result = {};
        result["firstname"] = this.firstname;
        result["lastname"] = this.lastname;
        result["group"] = this.group;
        result["email"] = this.email;
        result["address"] = this.address;
        result["gender"] = this.gender;
        result["age"] = this.age;
        return result;
    }

    static createUser(jsoninfo){
        var firstname = jsoninfo.firstname;
        var lastname = jsoninfo.lastname;
        var age = jsoninfo.age;
        var group = jsoninfo.group;
        var email = jsoninfo.email;
        var address = jsoninfo.address;
        var gender = jsoninfo.gender;
        return new User(firstname,lastname,age,gender,group,address,email);
    }
}
module.exports = User;