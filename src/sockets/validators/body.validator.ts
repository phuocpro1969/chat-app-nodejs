import Joi from "joi";

import { HANDLER_EVENTS } from "~constants";

const schemaUserPrivateChat = Joi.any();

export const SCHEMA_VALIDATE_BODY = {
	[HANDLER_EVENTS.USER_PRIVATE_CHAT]: schemaUserPrivateChat
};
