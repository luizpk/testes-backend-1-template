import{pratica3} from "../src/pratica3"

describe("pratica3", ()=>{

    test("deve receber dois numeros e quardar a soma e a multipilicação entre eles", ()=>{

        const result = pratica3(3,9)
        expect (result.soma).toBe(12)
        expect (result.mult).toBe(27)


    })

   

})