(function() {
  const config = {
    apiKey: "AIzaSyBJJ71sX6dNbhhjwna3_YNElBW4I56C9yo",
    authDomain: "devfestne2016.firebaseapp.com",
    databaseURL: "https://devfestne2016.firebaseio.com",
    storageBucket: "devfestne2016.appspot.com",
  };
  firebase.initializeApp(config);

  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnGoogleSignin = document.getElementById('btnGoogleSignin');
  const btnTwitterSignin = document.getElementById('btnTwitterSignin');

  btnLogin.addEventListener('click', e => {
    const email = inputEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    return false;
  });

  btnSignUp.addEventListener('click', e => {
    const email = inputEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  btnGoogleSignin.addEventListener('click', e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then(function(result) {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user);

    }).catch(function(error) {
      console.log(error);
    });
  });

  btnTwitterSignin.addEventListener('click', e => {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const secret = result.credential.secret;
      const user = result.user;
    }).catch(function(error) {
      console.log(error);
    });
  });

  btnGithubSignin.addEventListener('click', e => {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user:email');

    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    }).catch(function(error) {
      console.log(error);
    });
  });

  btnFacebookSignin.addEventListener('click', e => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    }).catch(function(error) {
      console.log(error);
    });
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });
}());