import jwt from "jsonwebtoken";

const authentication = (req,res,next) =>{
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: 'Token missing' });
        }
        try {
                const user = jwt.verify(token,process.env.AUTH_KEY)
                req.user = user
                req.token = token;
                next()
        } catch (error) {
                return res.status(404).json({error:error})
        }
}

export default authentication