export function logger(req, res, next) {
    console.log('i am the logger');
    next();
}
