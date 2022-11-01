//export const apiURL = 'someaws.us-east-2.compute.amazonaws.com:3100/api';
export const apiURL = 'http://localhost:3100/api';

/*
    User related URLS  
*/
export const UsersURL = `${apiURL}/users`;
export const userRegisrationURL = `${UsersURL}/register`; 
export const loginURL = `${UsersURL}/authenticate`;
export const scoresURL = `${UsersURL}/scores`;

/*
    other URLS  
*/
