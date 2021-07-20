import { createResponseComposition, context } from "msw";

const resp = (status = 0, payload = {}, delay = false) => {
  const respTransformers = [];

  if (status) respTransformers.push(context.status(status));
  if (payload) respTransformers.push(context.json(payload));
  if (delay) respTransformers.push(context.delay("real"));

  return createResponseComposition(null, respTransformers)();
};

export default resp;
