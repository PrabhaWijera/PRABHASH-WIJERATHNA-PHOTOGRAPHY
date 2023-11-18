$(document).ready(function (){
   $("#SendBtn").click(function (event){
       event.preventDefault();
       CustomerRegister();
   });



   function CustomerRegister(){
       const ID='001';
       const Email=$('#email').val();
       const Name=$('#name').val();
       const Subject=$('#subject').val();
       const Message=$('#message').val();

       const data={
           id:ID,
           email:Email,
           name:Name,
           subject:Subject,
           textMessage:Message
       }

       $.ajax({
           url:'http://localhost:8081/api/v1/c1/User/saveUsers',
           method:'POST',
           contentType:'application/json',
           data:JSON.stringify(data),
           success:function (response){
               console.log(data);
               if (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === 500 || response.statusCode === 500 || response.statusCode === 0) {
                   swal("Save successful");
                   localStorage.setItem("userAuthToken", JSON.stringify(response.data));

               }
           },
           error:function (xhr, textStatus, errorThrown){
               swal("Error: " + xhr.responseText);
           }
       });
   }












});