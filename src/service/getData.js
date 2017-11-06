// import fetch from '../utils/fetch';
import fetch from '../utils/axios';

/**
 * 账号密码登录
 */
export const accountLogin = (email, password) => fetch('/loginController/login', { email, password }, 'POST');