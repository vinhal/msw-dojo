import { setupWorker } from "msw";
import { loadHandlers } from "./conf/load";
import { handlers } from "./handlers";

export const worker = setupWorker(...loadHandlers(handlers));
