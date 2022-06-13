export const DEFAULT_AVATAR_URL = '/extra_img/profiles/default.png';

export const FIRST_LAST_NAME_REGEX = /^[A-Za-z- ]*(([,.] |['-])[A-Za-z][a-z]*)*(\.?)$/gm;

export const EMAIL_ADDRESS_REGEX =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

export const PHONE_NUMBER_REGEX = /^\(\d{3}\) \d{3}-\d{4}$/;