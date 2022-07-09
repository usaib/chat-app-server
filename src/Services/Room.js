import crypto from "crypto";
import { rooms } from "../models";
import { user_rooms } from "../models";
import { room_chats } from "../models";
import { users } from "../models";

export const getAllRooms = async (params) => {
	try {
		const data = await users.findAndCountAll({
			where: {
				id: params.memberId
			},
			include: [
				{
					model: rooms
				}
			]
		});
		return {
			success: true,
			data: data
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};
export const getRoomChat = async (params) => {
	try {
		const data = await room_chats.findAndCountAll({
			where: {
				room: params.roomId
			}
		});
		return {
			success: true,
			data: data
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};

export const create = async (params) => {
	let Rooms;
	let data;
	let userRooms;
	try {
		console.log(params);
		if (
			(params.members && params.members.length && params.name, params.createdBy)
		) {
			Rooms = await rooms.create({
				name: params.name,
				createdBy: params.createdBy,
				createdAt: new Date(),
				updatedAt: new Date()
			});
			data = await users.findAndCountAll({
				where: {
					email: params.members
				}
			});
		}
		let ids;
		if (params.members && params.members.length) {
			ids = data.rows.map((obj) => obj.id);
		}
		console.log(ids);

		if (ids && ids.length) {
			ids.forEach(async (id) => {
				userRooms = await user_rooms.create({
					roomId: Rooms.id,
					userId: id
				});
			});
		}
		return {
			success: true,
			data: Rooms.id
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};
export const createRoomChat = async (params) => {
	try {
		const chat = await room_chats.create({
			...params
		});

		return {
			success: true,
			data: chat.id
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
