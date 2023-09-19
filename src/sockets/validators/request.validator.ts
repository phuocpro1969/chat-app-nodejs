import Joi from "joi";

import { HANDLER_EVENTS } from "~constants";

import { SCHEMA_VALIDATE_BODY } from "./body.validator";

const allActions = [...Object.values(HANDLER_EVENTS)];

/**
 *
 * Custom function to dynamic validate socket request
 *
 * @param {String} action Socket handler logRequestInfo key
 * @returns Joi schema validation
 */
export const schemaSocketRequest = (action) =>
	Joi.object({
		action: Joi.string().valid(...allActions),
		body: SCHEMA_VALIDATE_BODY[action] || Joi.any()
	});
