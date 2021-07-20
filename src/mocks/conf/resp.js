import { createResponseComposition, context } from "msw";

const resp = (status = 0, payload = {}, delay = 'real') => {
  const respTransformers = [];

  if (status) respTransformers.push(context.status(status));
  if (payload) respTransformers.push(context.json(payload));
  if (delay) respTransformers.push(context.delay(delay));

  return createResponseComposition(null, respTransformers)();
};

export default resp;
