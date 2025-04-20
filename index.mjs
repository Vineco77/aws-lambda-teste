import { log } from "./log.mjs";
export const handler = async (event) => {
    // TODO implement
    log('handler no index.mjs event: ' + JSON.stringify(event))

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
};
