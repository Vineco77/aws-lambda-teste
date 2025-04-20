import { log } from "./log.mjs";
export const handler = async (event) => {
    // TODO implement
    log('handler no index.mjs event: ' + JSON.stringify(event))

    return {
        statusCode: 200,
        body: `<html><body>Dadps da requisicao ${JSON.stringify(event)}</body></html>`,
        headers: {
            "content-type": "text/html"
        }
    };
};
