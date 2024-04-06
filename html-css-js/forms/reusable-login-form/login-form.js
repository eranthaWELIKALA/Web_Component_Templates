class LoginForm extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
        <link rel="stylesheet" href="./login-form.css">
        <div id="loginFormContainer">
          <div id="loginFormHeader" class="font-login">
              <h2 id="formTitle">Login Form</h2>
              <div id="loginFormImage"></div>
          </div>
          <form id="loginForm">
              <div class="form-group">
                  <label for="username" class="font-login" id="usernameLabel">Username: </label>
                  <div class="form-input-group">
                      <input id="username" name="username" class="form-input font-login-input"
                          placeholder="Your Username">
                      <div id="usernameError" class="error-message inactive">No errors</div>
                  </div>
              </div>
  
              <div class="form-group">
                  <label for="password" class="font-login" id="passwordLabel">Password: </label>
                  <div class="form-input-group">
                      <input id="password" name="password" class="form-input font-login-input" type="password"
                          placeholder="Your Password">
                      <div id="passwordError" class="error-message inactive">No errors</div>
                  </div>
              </div>
  
              <input id="loginBtn" name="loginBtn" class="loginBtn" type="submit" value="Login">
          </form>
        </div>
      `;

        shadow.appendChild(template.content.cloneNode(true));
        // this.connectedCallback();    
    }

    connectedCallback() {
        console.log("connectedCallback was called");
        // Set CSS custom properties based on attributes
        const fontColor = this.getAttribute('font-color') || '#ffffff';
        console.log(this.getAttribute('bg-color'));
        const bgColor = this.getAttribute('bg-color') || '#808080';
        const inputFontColor = this.getAttribute('input-font-color') || '#808080';
        const inputBorderColor = this.getAttribute('input-border-color') || '#00ffff';
        const btnColor = this.getAttribute('btn-color') || '#00ffff';
        const btnFontColor = this.getAttribute('btn-font-color') || '#808080';
        const inputErrorMsgColor = this.getAttribute('input-error-msg-color') || '#ff0000';
        const logo = this.getAttribute('logo') || 'url("loginLogo.png")';
        const imgHeight = this.getAttribute('img-height') || '150px';
        const outerPadding = this.getAttribute('outer-padding') || '3rem';
        const outerPadding768 = this.getAttribute('outer-padding-768') || '5rem 1rem 5rem 1rem';
        const headerBottomMargin = this.getAttribute('header-bottom-margin') || '3rem';
        const fieldsBottomMargin = this.getAttribute('fields-bottom-margin') || '2rem';
        const minWidth = this.getAttribute('min-width') || '60%';
        const minWidth768 = this.getAttribute('min-width-768') || '80%';

        this.style.setProperty('--login-form-font-color', fontColor);
        this.style.setProperty('--login-form-bg-color', bgColor);
        this.style.setProperty('--login-form-input-font', inputFontColor);
        this.style.setProperty('--login-form-input-border-color', inputBorderColor);
        this.style.setProperty('--login-form-btn-color', btnColor);
        this.style.setProperty('--login-form-btn-font-color', btnFontColor);
        this.style.setProperty('--login-form-input-error-msg-color', inputErrorMsgColor);
        this.style.setProperty('--login-form-logo', logo);
        this.style.setProperty('--login-form-img-height', imgHeight);
        this.style.setProperty('--login-form-outer-padding', outerPadding);
        this.style.setProperty('--login-form-outer-padding-768', outerPadding768);
        this.style.setProperty('--login-form-header-bottom-margin', headerBottomMargin);
        this.style.setProperty('--login-form-fields-bottom-margin', fieldsBottomMargin);
        this.style.setProperty('--login-form-min-width', minWidth);
        this.style.setProperty('--login-form-min-width-768', minWidth768);

        this.setupTextContents();
        this.setupValidation();
    }


    setupTextContents() {
        // Update placeholders, labels, and form title
        const formTitle = this.shadowRoot.getElementById('formTitle');
        const usernameInput = this.shadowRoot.getElementById('username');
        const passwordInput = this.shadowRoot.getElementById('password');
        const usernameLabel = this.shadowRoot.getElementById('usernameLabel');
        const passwordLabel = this.shadowRoot.getElementById('passwordLabel');

        const formTitleValue = this.getAttribute('title');
        const usernamePlaceholder = this.getAttribute('username-placeholder');
        const passwordPlaceholder = this.getAttribute('password-placeholder');
        const usernameLabelValue = this.getAttribute('username-label');
        const passwordLabelValue = this.getAttribute('password-label');

        if (formTitleValue) {
            formTitle.textContent = formTitleValue;
        } else {
            formTitle.style.display = 'none'; // Hide form title if not specified
        }

        if (usernamePlaceholder) {
            usernameInput.placeholder = usernamePlaceholder;
        }

        if (passwordPlaceholder) {
            passwordInput.placeholder = passwordPlaceholder;
        }

        if (usernameLabelValue) {
            usernameLabel.textContent = usernameLabelValue;
        }

        if (passwordLabelValue) {
            passwordLabel.textContent = passwordLabelValue;
        }
    }

    setupValidation() {
        const form = this.shadowRoot.getElementById('loginForm');
        const usernameInput = this.shadowRoot.getElementById('username');
        const passwordInput = this.shadowRoot.getElementById('password');
        const usernameError = this.shadowRoot.getElementById('usernameError');
        const passwordError = this.shadowRoot.getElementById('passwordError');

        form.addEventListener('submit', function (event) {
            let isValid = true;

            // Reset error messages
            usernameError.textContent = '';
            passwordError.textContent = '';

            // Validate username
            if (usernameInput.value.trim() === '') {
                usernameError.textContent = 'Username is required';
                usernameError.classList.remove("inactive");
                usernameError.classList.add("active");
                isValid = false;
            }
            else {
                usernameError.textContent = 'No errors';
                usernameError.classList.remove("active");
                usernameError.classList.add("inactive");
            }

            // Validate password
            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Password is required';
                passwordError.classList.remove("inactive");
                passwordError.classList.add("active");
                isValid = false;
            }
            else {
                passwordError.textContent = 'No errors';
                passwordError.classList.remove("active");
                passwordError.classList.add("inactive");
            }

            // Prevent form submission if not valid
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('login-form', LoginForm);
