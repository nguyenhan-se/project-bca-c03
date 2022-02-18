import { CaptchaResultModel } from './model/captchaModel';
import { GetUserInfoResultModel, LoginParams, LoginResultModel } from './model/userModel';
import { ErrorMessageMode } from '/#/axios';
import { authHttp, defHttp } from '/@/utils/http/axios';

enum Api {
  Login = '/signin',
  Captcha = '/get-captcha',
  Logout = '/logout',
  GetUserInfo = '/validate-jose',
  GetPermCode = '/getPermCode',
}

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return authHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function captchaApi(mode: ErrorMessageMode = 'modal') {
  return authHttp.get<CaptchaResultModel>(
    {
      url: Api.Captcha,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function getUserInfo() {
  return authHttp.get<GetUserInfoResultModel>(
    { url: Api.GetUserInfo },
    { errorMessageMode: 'none' },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
