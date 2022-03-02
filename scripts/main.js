function read_display_Quote(){

    db.collection("something").doc("monday")                                                     
      .onSnapshot(function(mondayDoc){                                                              
           console.log(mondayDoc.data());                        
           document.getElementById("quote-goes-here").innerHTML = mondayDoc.data().quote;        
      })
}
read_display_Quote()       

function insertName(){
    firebase.auth().onAuthStatChanged(user =>{
         if(user){
              console.log(user.uid);
              currentUser = db.collection("users").doc(user.uid);
              currentUser.get().then(userDoc=>{
                   var user_Name= userDoc.data().name;
                   console.log(user_Name);
                   $("#name-goes-here").text(user_Name);
              })
         }
    })

}
insertName();
