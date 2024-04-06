#Login Form
## Default Login Form
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Forms</title>
</head>
<body>
    <login-form></login-form>
    <script src="https://eranthawelikala.github.io/web-component-templates/html-css-js/forms/reusable-login-form/login-form.min.js" defer></script>
</body>
</html>
```
![image](https://github.com/eranthaWELIKALA/web-component-templates/assets/33684206/6264632d-bb2d-45cc-a0d3-ca453f59a1ec)


## Example for a Customized Login Form
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Forms</title>
</head>
<body>
    <login-form 
        title="My Life" 
        username-label="Email" 
        username-placeholder="Enter your email"
        password-label="Password"
        password-placeholder="Enter your password"
        title-font-color="purple"
        font-color="purple" 
        bg-color="bisque"
        input-font-color="purple"
        input-border-color="purple"
        btn-color="purple"
        btn-font-color="white"
        input-error-msg-color="red"
        login-text="Signin"
        forgot-password-link-color="purple"
        forgot-password-callback="forgotPassword"
        forgot-password-text="Forgot Password?"
        registration-link-color="purple"
        registration-callback="reegister"
        registration-text="Don't have an account? Sign Up"
        logo="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/425900308_2130299897340340_2635919338795070148_n.jpg?stp=c1.3.318.318a_dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-Ze717EJMn8fqvivSoz6JLLuDznjSxOAsu4POeNLE4H8Qlf9TuS0pMqHr3BxPQM4fjXaQrJa8y-7W2Iu2IN_2&_nc_ohc=4fZs0AmOsZUAb4zTJ3v&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfD-br6XROgWHLFnkgQ5SbF4DfGF1pYSAezuUK5b5eJc1w&oe=66173341"
        img-height="200px"
        outer-padding="2.5rem"
        outer-padding-768="1rem"
        header-bottom-margin="2rem"
        fields-bottom-margin="1rem"
        min-width="25%"
        min-width-768="90%"
        onsubmit="submit"
        ></login-form>
    <script src="https://eranthawelikala.github.io/web-component-templates/html-css-js/forms/reusable-login-form/login-form.min.js" defer></script>
    <script>
        function submit(event) {
            console.log("submit: " + JSON.stringify(event))
        }
        function register(event) {
            console.log("register: " + JSON.stringify(event))
        }
        function forgotPassword(event) {
            console.log("forgotPassword: " + JSON.stringify(event))
        }
    </script>
</body>
</html>
```
![image](https://github.com/eranthaWELIKALA/web-component-templates/assets/33684206/f76f64f3-69d1-4135-9fba-11ae8f37cbf4)
