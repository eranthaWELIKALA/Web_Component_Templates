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
    }

    connectedCallback() {
        const titleFontColor = this.getAttribute('title-font-color') || '#ffffff';
        const fontColor = this.getAttribute('font-color') || '#ffffff';
        const bgColor = this.getAttribute('bg-color') || '#808080';
        const inputFontColor = this.getAttribute('input-font-color') || '#808080';
        const inputBorderColor = this.getAttribute('input-border-color') || '#00ffff';
        const btnColor = this.getAttribute('btn-color') || '#00ffff';
        const btnFontColor = this.getAttribute('btn-font-color') || '#808080';
        const inputErrorMsgColor = this.getAttribute('input-error-msg-color') || '#ff0000';
        const logo = this.getAttribute('logo') || 'loginLogo.png';
        const imgHeight = this.getAttribute('img-height') || '150px';
        const outerPadding = this.getAttribute('outer-padding') || '3rem';
        const outerPadding768 = this.getAttribute('outer-padding-768') || '5rem 1rem 5rem 1rem';
        const headerBottomMargin = this.getAttribute('header-bottom-margin') || '3rem';
        const fieldsBottomMargin = this.getAttribute('fields-bottom-margin') || '2rem';
        const minWidth = this.getAttribute('min-width') || '60%';
        const minWidth768 = this.getAttribute('min-width-768') || '80%';

        this.style.setProperty('--login-form-title-font-color', titleFontColor);
        this.style.setProperty('--login-form-font-color', fontColor);
        this.style.setProperty('--login-form-bg-color', bgColor);
        this.style.setProperty('--login-form-input-font', inputFontColor);
        this.style.setProperty('--login-form-input-border-color', inputBorderColor);
        this.style.setProperty('--login-form-btn-color', btnColor);
        this.style.setProperty('--login-form-btn-font-color', btnFontColor);
        this.style.setProperty('--login-form-input-error-msg-color', inputErrorMsgColor);
        this.style.setProperty('--login-form-logo', `url(${logo})`);
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
            formTitle.style.display = 'none';
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

        const formAction = this.getAttribute('form-action');
        const formMethod = this.getAttribute('form-method');
        const onSubmit = this.getAttribute('onsubmit');

        if (formAction) {
            form.setAttribute('action', formAction);
        }

        if (formMethod) {
            form.setAttribute('method', formMethod);
        }

        const loginForm = this;

        form.addEventListener('submit', function (event) {
            let isValid = true;

            usernameError.textContent = '';
            passwordError.textContent = '';

            if (usernameInput.value.trim() === '') {
                const usernameLabelValue = loginForm.getAttribute('username-label');
                if (usernameLabelValue) {
                    usernameError.textContent = `${usernameLabelValue} is required`;
                }
                else {
                    usernameError.textContent = 'Username is required';
                }
                usernameError.classList.remove("inactive");
                usernameError.classList.add("active");
                isValid = false;
            }
            else {
                usernameError.textContent = 'No errors';
                usernameError.classList.remove("active");
                usernameError.classList.add("inactive");
            }

            if (passwordInput.value.trim() === '') {
                const passwordLabelValue = loginForm.getAttribute('password-label');
                if (passwordLabelValue) {
                    passwordError.textContent = `${passwordLabelValue} is required`;
                }
                else {
                    passwordError.textContent = 'Password is required';
                }
                passwordError.classList.remove("inactive");
                passwordError.classList.add("active");
                isValid = false;
            }
            else {
                passwordError.textContent = 'No errors';
                passwordError.classList.remove("active");
                passwordError.classList.add("inactive");
            }

            if (!isValid) {
                event.preventDefault();
            }
            else {
                if (onSubmit && typeof window[onSubmit] === 'function') {
                    event.preventDefault();
                    const usernameLabel = this.getAttribute('username-label') || 'username';
                    const passwordLabel = this.getAttribute('password-label') || 'password';
                    event[usernameLabel] = usernameInput.value;
                    event[passwordLabel] = passwordInput.value;
                    window[onSubmit].call(this, event);
                }
            }
        });
    }
}

customElements.define('login-form', LoginForm);
