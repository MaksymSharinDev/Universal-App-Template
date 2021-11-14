import {check, sanitize} from "express-validator";



export const removeFieldsSanitizer = (remove: Array<string>) =>
    check("*").customSanitizer(
        (value, { req, location, path }) => {
        if (remove.find((v) => v === path)) {
            delete req.body[path];
            return;
        }
        return value;
    });