import jwt from 'jsonwebtoken';

//User like post
// Click the like button => auth middleware (next) => like controller..
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // token from google auth is > 500
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test')

            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;