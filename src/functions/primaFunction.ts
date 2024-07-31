import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export const primaFunction = async (request: HttpRequest, context: InvocationContext):
    Promise<HttpResponseInit> => {

    context.log(`Http function processed request for url "${request.url}"`);
    if (request.method === 'GET') {

        const name = request.query.get('name')  || 'world';

        return { body: `Hello, ${name}!` };
    };

const body: any = await request.json();
return {body: 'Hello, ${body.name}!' };
}