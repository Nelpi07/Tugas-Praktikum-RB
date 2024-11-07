document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const form = document.getElementById('registrationForm');
  
    // Validasi Username
    usernameInput.addEventListener('keyup', () => {
      const usernameFeedback = document.getElementById('usernameFeedback');
      const username = usernameInput.value;
      if (/^[a-zA-Z0-9]{5,20}$/.test(username)) {
        usernameFeedback.textContent = "Username valid.";
        usernameFeedback.style.color = "green";
      } else {
        usernameFeedback.textContent = "Username harus 5-20 karakter alfanumerik.";
        usernameFeedback.style.color = "red";
      }
    });
  
    // Validasi Email
    emailInput.addEventListener('change', () => {
      const emailFeedback = document.getElementById('emailFeedback');
      const email = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailPattern.test(email)) {
        emailFeedback.textContent = "Email valid.";
        emailFeedback.style.color = "green";
      } else {
        emailFeedback.textContent = "Format email tidak valid.";
        emailFeedback.style.color = "red";
      }
    });
  
    // Validasi Password Kuat
    passwordInput.addEventListener('keyup', () => {
      const passwordFeedback = document.getElementById('passwordFeedback');
      const password = passwordInput.value;
      if (/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(password)) {
        passwordFeedback.textContent = "Password kuat.";
        passwordFeedback.style.color = "green";
      } else {
        passwordFeedback.textContent = "Password minimal 8 karakter, termasuk angka dan huruf.";
        passwordFeedback.style.color = "red";
      }
    });
  
    // Konfirmasi Password
    confirmPasswordInput.addEventListener('input', () => {
      const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');
      const confirmPassword = confirmPasswordInput.value;
      if (confirmPassword === passwordInput.value) {
        confirmPasswordFeedback.textContent = "Password cocok.";
        confirmPasswordFeedback.style.color = "green";
      } else {
        confirmPasswordFeedback.textContent = "Password tidak cocok.";
        confirmPasswordFeedback.style.color = "red";
      }
    });
  
    // Validasi Saat Submit
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Mencegah submit form sebelum validasi selesai
  
      if (
        /^[a-zA-Z0-9]{5,20}$/.test(usernameInput.value) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInput.value) &&
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(passwordInput.value) &&
        confirmPasswordInput.value === passwordInput.value
      ) {
        alert("Pendaftaran Berhasil!");
      } else {
        alert("Silakan periksa kembali form Anda.");
      }
    });
  });
  