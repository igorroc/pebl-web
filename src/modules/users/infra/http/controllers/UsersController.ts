import { Request, Response } from "express"
import { container } from "tsyringe"

import CreateUserService from "@modules/users/services/CreateUserService"
import { getCustomRepository } from "typeorm"
import UserRepository from "../../typeorm/repositories/UserRepository"

export default class UsersController {
	public async create(
		request: Request,
		response: Response
	): Promise<Response> {
		try {
			const {
				email,
				name,
				password,
				age,
				gender,
				scholarity,
				workField,
				headWorkField,
				maritalStatus,
			} = request.body

			const createUser = container.resolve(CreateUserService)

			const user = await createUser.execute({
				email,
				password,
				name,
				age,
				gender,
				scholarity,
				workField,
				headWorkField,
				maritalStatus,
			})

			delete user.password

			return response.json(user)
		} catch (err) {
			return response.status(400).json({ error: err })
		}
	}

	public async index(
		request: Request,
		response: Response
	): Promise<Response> {
		console.log("user id", request.user.id)
		const usersRepository = getCustomRepository(UserRepository)

		const users = await usersRepository.find()

		return response.json(users)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		try {
			const user = request.body;
			const { id } = request.params;
			const updateuser = container.resolve(CreateUserService);
	  
			const userDb = await updateuser.update(id, user);
	  
			return response.json(userDb);
		  } catch (err) {
			return response.status(400).json({ error: err });
		  }
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;
			const deleteUSer = container.resolve(CreateUserService);

			const userDb = await deleteUSer.delete(id);

			return response.json(userDb);
		} catch (err) {
			return response.status(400).json({ error: err });
		}
	}


	public async findById(request: Request, response: Response): Promise<Response> {
		try {
			const id = request.user.id;
			console.log(id);
			const createuser = container.resolve(CreateUserService);
	  
			const userDb = await createuser.findById(id);
	  
			return response.json(userDb);
		  } catch (err) {
			return response.status(400).json({ error: err });
		  }
	}
}
