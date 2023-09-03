
function handleLoginBtn(){

    // MARK: - For dynamic purposes
    // const location = `${window.location.origin}/`;

    const location = `${window.location.origin}/ite301`;

    $("#loginBtn").on("click", (event) => {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();        

        $.ajax({
            url: `${location}/API/login.php`,
            method: "POST",
            data: {
                username: username, 
                password: password
            },
            success: (data)  =>{
                // MARK: - For dynamic purposes
                if(data == 'success') {
                    // return window.location.href = `${location}/views/blank.php`;
                    alert("Successful");
                } else {
                    alert("Your username or password entered is incorrect. Please try again!");
                }
            },
            error: (err) => {
                alert("Unable to connect, please try again.");
            }
        })
    });
}

$(document).ready(function() {
    handleLoginBtn();
});