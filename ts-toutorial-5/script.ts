let userId : string | number | boolean;

userId = 101;
userId = "101";
userId = true;

function userInfo(userId  : string | number | boolean){
  console.log(userId);

}

userInfo("101");
userInfo(101);