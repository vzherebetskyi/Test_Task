// lines stands for number of lines in the table
export const LINES = 5;

// columns stands for number eof columns in the table
export const COLUMNS = 5;

// const regex for strings
export const NUMB_REGEX = /^[0-9]{1,}([,.][0-9]{1,})?$/;

// const regex for urls
export const URL_REGEX = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

// const regex for money funds
export const FUNDS_REGEX = /^(UAH|USD|EUR|GBP)\s?[0-9]{1,}([.][0-9]{1,2})?$/;

// const regex for the sum formula
export const SUM_REGEX = /^\=(SUM)\([0-9]{1,}\,[0-9]{1,}\;[0-9]{1,}\,[0-9]{1,}(\;[0-9]{1,}\,[0-9]{1,})*?\)$/;

// const regex for the average formula
export const AVE_REGEX = /^\=(AVERAGE)\([0-9]{1,}\,[0-9]{1,}\;[0-9]{1,}\,[0-9]{1,}(\;[0-9]{1,}\,[0-9]{1,})*?\)$/;

// const regex for the concatenation
export const CONCAT_REGEX = /^\=(CONCAT)\([0-9]{1,}\,[0-9]{1,}\;[0-9]{1,}\,[0-9]{1,}(\;[0-9]{1,}\,[0-9]{1,})*?\)$/;

// const regex for the hyperlink validation
export const HYPER_REGEX = /^\=(HYPERLINK)\(.{0,}\)$/;
