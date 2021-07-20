import { setupServer } from "msw/node";
import { loadHandlers } from "./conf/load";
import { handlers } from "./handlers";

export const server = setupServer(...loadHandlers(handlers));
