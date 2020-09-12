const SERVICES_SCREEN = {
  SEARCH_TEXT: 'Search...',
};

const HOME_SCREEN = {
  HEADER_TITLE: 'Hoje',
  HEADER_SUBTITLE: 'Olá, Léon Walras',
  CARD_EVENT_START_WORK: 'Começo do Trabalho',
  CARD_EVENT_START_LUNCH: 'Começo do Almoço',
  CARD_EVENT_END_LUNCH: 'Fim do Almoço',
  CARD_EVENT_END_WORK: 'Fim do Trabalho',
  ICON_TIMELINE_FOLD_DOWN: 'chevron-double-down',
  ICON_TIMELINE_FOLD_UP: 'chevron-double-up',
};

const LOGIN_ERROR = {
  EMAIL_ERROR: 'Não encontramos esse email!',
  PASSWORD_ERROR: 'Asenha está incorreta!',
  USER_DISABLED_ERROR: 'A sua conta está desativada!',
  GENERIC_ERROR: 'Erro Genérico!',
};

const SIGN_UP_ERROR = {
  EMAIL_EXISTS: 'Esse email já está em uso!',
  OPERATION_NOT_ALLOWED: 'Esse projeto não permite mais inscrições!',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'Erro Genérico. Tente novamente mais tarde!',
  GENERIC_ERROR: 'Erro Genérico!',
};

const HOME_SCREEN_MODAL = {
  CREATE_BUTTON: 'Criar',
  UPDATE_BUTTON: 'Atualizar',
  EDIT_BUTTON: 'Atualizar',
};

const LOGIN_SCREEN = {
  LOGIN_BUTTON: 'Entrar',
  SIGN_UP_BUTTON: 'Inscrever-se',
  LOGIN_TEXT_PLACEHOLDER: 'E-mail...',
  PASSWORD_TEXT_PLACEHOLDER: 'Senha...',
  FACEBOOK_LOGIN: 'Entre com o Facebook',
  GOOGLE_LOGIN: 'Entre com o Google',
};

const SIGN_UP_SCREEN = {
  SIGN_UP_BUTTON: 'Cadastrar',
  SIGN_UP_HEADER: 'Sign up',
  SIGN_UP_LOGIN: 'E-mail...',
  SIGN_UP_NAME: 'Nome...',
  SIGN_UP_PASSWORD: 'Senha...',
  SIGN_UP_PASSWORD_2: 'Confirme a senha...',
};

const USER_DATA = {
  TOKEN_ID: 'userData',
  TOKEN_LOGIN: 'useLogin',
};

const HORIZONTAL_CALENDAR = {
  DAY_0: 'D',
  DAY_1: 'S',
  DAY_2: 'T',
  DAY_3: 'Q',
  DAY_4: 'Q',
  DAY_5: 'S',
  DAY_6: 'S',

  DAY_LONG_0: 'Domingo',
  DAY_LONG_1: 'Segunda',
  DAY_LONG_2: 'Terça',
  DAY_LONG_3: 'Quarta',
  DAY_LONG_4: 'Quinta',
  DAY_LONG_5: 'Sexta',
  DAY_LONG_6: 'Sábado',

  MONTH_0: 'January',
  MONTH_1: 'February',
  MONTH_2: 'March',
  MONTH_3: 'April',
  MONTH_4: 'May',
  MONTH_5: 'June',
  MONTH_6: 'July',
  MONTH_7: 'August',
  MONTH_8: 'September',
  MONTH_9: 'October',
  MONTH_10: 'November',
  MONTH_11: 'December',
};

const ICON_NAMES = {
  START_WORK: 'briefcase',
  START_LUNCH: 'food',
  END_LUNCH: 'food-off',
  END_WORK: 'briefcase-remove',
  CARD_EVENT_EDIT: 'square-edit-outline',
  TIMELINE_FOLD_DOWN: 'chevron-down',
  TIMELINE_FOLD_UP: 'chevron-up',
};

const ACTIONS = {
  ADD_EVENT: 'ADD_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  SET_EVENTS: 'SET_EVENTS',
};

const EVENT_STATE = {
  START_WORK: 'start_work',
  END_WORK: 'end_work',
  START_LUNCH: 'start_lunch',
  END_LUNCH: 'end_lunch',
};

export {
  HOME_SCREEN,
  HORIZONTAL_CALENDAR,
  LOGIN_SCREEN,
  ICON_NAMES,
  HOME_SCREEN_MODAL,
  ACTIONS,
  EVENT_STATE,
  SERVICES_SCREEN,
  SIGN_UP_SCREEN,
  LOGIN_ERROR,
  SIGN_UP_ERROR,
  USER_DATA,
};
