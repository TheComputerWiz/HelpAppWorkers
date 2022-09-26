import LocalizedStrings from "react-native-localization"

const StringsOfLanguages = new LocalizedStrings({
    en: {
        login_signup : "Login or SignUp",
        remember_me:"Remember me",
        email_phone:"Email or phone",
        password:"Password",
        current_appointments:"Current Appointments",
        sign_in:"SIGN ME IN",
        forgot_password:"Forgot your password? Tap to get it!",
        no_account:"Don't have an account?",
    },
    fr: {
        login_signup : "Identifiez-vous ou inscrivez-vous",
        remember_me:"Souviens-toi de moi",
        email_phone:"Email ou téléphone",
        password:"Mot de passe",
        current_appointments:"Nominations en cours",
        sign_in:"INSCRIVEZ-MOI",
        forgot_password:"Mot de passe oublié? Appuyez pour l'obtenir !",
        no_account:"Vous n'avez pas de compte ?",
    },
    ar:{
        login_signup :"تسجيل الدخول أو الاشتراك",
        remember_me:"تذكرنى",
        email_phone:"بريد الكتروني او هاتف",
        password:"كلمة المرور",
        current_appointments:"المواعيد الحالية",
        sign_in:"سجل دخولي",
        forgot_password:"نسيت رقمك السري؟ انقر للحصول عليه!",
        no_account:"ليس لديك حساب؟",
    },

});

export default StringsOfLanguages;