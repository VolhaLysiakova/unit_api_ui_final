import superagent, { Response } from "superagent"

let response: Response;
const baseUrl = 'https://reqres.in/api';

function randomInteger(min: number, max: number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
const id = randomInteger(1, 12)

describe ('API tests', () => {
    describe ('GET tests', () =>  {
        test ('GET list of users', async () => {
            try {
                response = await superagent.get(`${baseUrl}/users?per_page=12`)
            } catch (error: any) {
                throw new Error (error.message);   
            }
            expect(response.status).toBe(200)            
            expect(response.body.data.length).toBe(12)
        })

        test ('GET user with definite id', async () => {
            try {
                response = await superagent.get(`${baseUrl}/users/${id}`)
            } catch (error: any) {
                throw new Error (error.message);
            }
            expect(response.status).toBe(200)
            expect(response.body.data.id).toBe(id)
        })

        test ('GET user with id that does not exist', async () => {
            try {
                response = await superagent.get(`${baseUrl}/users/43425`)
            } catch (error: any) {
                expect(error.status).toBe(404)
            }
        })
    })

    describe ('POST tests', () => {
        test ('Should create new user with valid data', async () => {
            try {
                response = await superagent.post(`${baseUrl}/users`)
                .set('Content-type', 'application/json; charset=UTF-8')
                .send({name: 'Ilon Mask', job: 'Tesla'})
            } catch (error: any) {
                throw new Error (error.message); 
            }
            expect(response.status).toBe(201)            
            expect(response.body.name).toBe('Ilon Mask')
        })
    
        test ('Should register new user', async () => {
            try {
                response = await superagent.post(`${baseUrl}/register`)
                .set('Content-type', 'application/json; charset=UTF-8')
                .send({email: 'eve.holt@reqres.in', password: 'pistol'})
            } catch (error: any) {
                throw new Error (error.message);
            }
            expect(response.status).toBe(200)      
        })

        test ('Should not register new user without password', async () => {
            try {
                response = await superagent.post(`${baseUrl}/register`)
                .set('Content-type', 'application/json; charset=UTF-8')
                .send({email: 'eve.holt@reqres.in'})
            } catch (error: any) {
                expect(error.status).toBe(400)
            }      
        })
    })

    describe ('PUT tests', () => {
        test ('Should update a user with definite id', async () => {
            try {
                response = await superagent.put(`${baseUrl}/users/${id}`)
                .set('Content-type', 'application/json; charset=UTF-8')
                .send({name: 'morpheus', job: 'zion resident'})
            } catch (error: any) {
                throw new Error (error.message);
            }
            expect(response.status).toBe(200)
            expect(response.body.name).toEqual('morpheus')
            expect(response.body.job).toEqual('zion resident')
            expect(response.body.updatedAt).toBeDefined()
        })
    })

    describe ('PATCH tests', () => {
        test ('Should update a user with definite id', async () => {
            try {
                response = await superagent.put(`${baseUrl}/users/${id}`)
                .set('Content-type', 'application/json; charset=UTF-8')
                .send({name: 'blabla', job: 'millioner'})
            } catch (error: any) {
                throw new Error (error.message);
            }
            expect(response.status).toBe(200)
            expect(response.body.name).toEqual('blabla')
            expect(response.body.job).toEqual('millioner')
            expect(response.body.updatedAt).toBeDefined()
        })
    })

    describe ('DELETE tests', () => {
        test ('Should delete a user', async () => {
            try {
                response = await superagent.delete(`${baseUrl}/users/1`)
            } catch (error: any) {
                throw new Error (error.message);
            }
            expect(response.status).toBe(204)
            expect(response.body).toEqual({})
        })
    }) 
})