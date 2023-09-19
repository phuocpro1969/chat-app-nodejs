import { HANDLER_EVENTS } from "~constants";

import { personalChat } from "./personal-chat.function";

export const LIST_FUNCTIONS = {
	[HANDLER_EVENTS.USER_PRIVATE_CHAT]: personalChat
};
