import { app } from '@azure/functions';
import { primaFunction } from './functions/primaFunction';


app.setup 
({
    enableHttpStream: true,
});
app.http('primaFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: primaFunction
});
