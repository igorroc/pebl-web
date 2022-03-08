import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService'; 

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        response.clearCookie("token");
        const {email, password}  = request.body;

        const authenticateUser = container.resolve(AuthenticateUserService); 
        const { user, token }  = await authenticateUser.execute({
            email,  
            password,
        });
        delete user.password;

        // response.cookie("token", token, {
        //     expires: new Date(Date.now() + 2 * 3600000),
        //     httpOnly:true,
        //     sameSite:'none',
        //     secure:true,
        //     path: "/",
        // })

        response.setHeader("Set-Cookie", [`token2=${token}`]);
        console.log(response.getHeaders())

        return response.json({ user, token });  
    } 
}