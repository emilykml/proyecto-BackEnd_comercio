import request from "supertest";
import {app,server} from "../app.js"
import db from "../database/db.js"

describe ("Test CRUD brand",() =>{


//--------TEST GET------- //

    describe ("GET /brand",() =>{
        let response;

        beforeEach(async () => {
            response = await request(app).get('/brand').send() 

        });
        
        test('should return a response with status 200 and type json', async() => { 
            expect(response.status).toBe(200); 
            expect(response.headers['content-type']).toContain('json');
        })
        test('should return all brands', async() => {
            expect(response.body).toBeInstanceOf(Object)
        })

    })
    afterAll(()=>{
        server.close()
        db.close()
    })
})

//-------TEST POST-------//
