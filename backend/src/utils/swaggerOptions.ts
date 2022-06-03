import dotenv from 'dotenv';
dotenv.config();

export const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Lion-Mane Dogs Breeds Project",
            version: "1.0.0",
            description: "API Server to provide the information about the dogs breeds and their different sub-breeds"
        },
        servers: [
            {
                url: process.env.API_SERVER+"/lionmane/dogs-breeds/v1"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}