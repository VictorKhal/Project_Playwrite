const CREDENTIALS = {
    validCredentials: {
        login: "victorworld2305@gmail.com",
        password: "9bH8pw!w6EHSC55"
    },
    wrongCredentials: {
        login: 'LoginEmail',
        password: 'Password'
    },
    notRegisteredCredentials: {
        login: 'emailemail@gm.com',
        password: 'password'
    },
};
const SEARCHTERM = "телевизор";
const NOSEARCH = "<script></scpript>";


const NOT_REGISTERED_CREDENTIAL = 'Проверьте электронную почту или \nзарегистрируйтесь';
const INVALID_CREDENTIAL_EMAIL = 'Неправильный формат электронной почты';
const INVALID_CREDENTIAL_PHONE = 'Укажите стандартный код оператора';
const INVALID_PHONE = '111111111';
const PROMO_CODE = 'MOROZ';
const AUTH_GET_PARAMETER = 'https://www.21vek.by/order/?step=auth';




const SUCCESS_MESSAGE_PASSWORD_RESET = 'Письмо отправлено';
const REGISTER_TITLE = 'Регистрация';


const MIN_PRICE = '5';
const MAX_PRICE = '2000';
const EMPTY_CART_MESSAGE = 'Корзина пуста';
const TAB_REVIEWS_NAME = 'Отзывы';

export {
    CREDENTIALS,
    SEARCHTERM,
    NOT_REGISTERED_CREDENTIAL,
    INVALID_CREDENTIAL_EMAIL,
    INVALID_CREDENTIAL_PHONE,
    INVALID_PHONE,
    PROMO_CODE,
    NOSEARCH,

    MIN_PRICE,
    MAX_PRICE,
    REGISTER_TITLE,
    SUCCESS_MESSAGE_PASSWORD_RESET,
    EMPTY_CART_MESSAGE,
    AUTH_GET_PARAMETER,
    TAB_REVIEWS_NAME,
}