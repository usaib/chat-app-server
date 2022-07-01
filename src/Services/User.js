import crypto from "crypto";
import { users } from "../models";

export const getAllUsers = async (params) => {
	try {
		const data = await users.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
			offset: params.offset || 1,
			limit: params.limit || 10
		});
		return {
			success: true,
			data: data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const getProfile = async (params) => {
	console.log(params, "me");
	try {
		const data = await users.findAll({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const create = async (params) => {
	try {
		const reqPass = crypto
			.createHash("md5")
			.update(params.password)
			.digest("hex");
		params.password = reqPass;
		const Users = await users.create({
			...params,
			isVerified: false,
			verifyToken: uniqueId()
		});

		return {
			success: true,
			data: Users.id
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const remove = async (params) => {
	try {
		const data = await users.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const update = async (params) => {
	try {
		const data = await users.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
