// craete an object user 
const user ={
    username:"saman",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    
    }
}
    user.welcomeMessage()