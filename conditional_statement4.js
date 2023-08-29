//Given stored username and password and input username and password, Print if the user can login or not.
var cred_username="rohit@gmail.com";
var cred_password="rohit";

let username="roohit@gmail.com";
let password="rohit";

if(cred_username==username)
{
  if(cred_password==password)
  {
    console.log("you can login");
  }else
  {
    console.log("Your password is incorrect");
  }
}else
{
  console.log("Your username is incorrect");
}