function email(){
    var sub = document.getElementById("sub").value
    var yemail = document.getElementById("Yemail").value
    var remail = document.getElementById("Remail").value
    var bdy = document.getElementById("body").value

    Email.send({
        Host: "smtp.gmail.com",
        Username : "deep.singh@binmile.com",
	    Password : "deepsingh9",
        To: remail, 
		From: yemail, 
		Subject: sub, 
		Body: bdy,
        Attachments:[
            {
                name: "Logo.png",
                path: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png"
            }
        ] 
    })
    .then(message => alert("mail sent successfully"));
}