import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    // console.log(token);
    if (token) {
        try {
            const decoded = jwt.verify(token, 'se72jkpq.');
            // console.log('userId = ' + 1);
            req.userId = decoded._id;
            next();
        } catch (err) {
            return res.status(403).json({
                message: 'no access',
            })
        }
    } else {
        return res.status(403).json({
            message: 'no access',
        })
    }
    // console.log(token);
    // next();
    // res.send(token);
}