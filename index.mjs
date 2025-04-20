import { log } from "./log.mjs";
export const handler = async (event) => {
    // TODO implement
    log('Mensagem enviado via função no indexs.js, event: ' + JSON.stringify(event))

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
};
