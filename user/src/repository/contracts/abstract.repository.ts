import { IRepository } from "../../interfaces/repository.interface";
const fs = require('fs');

export abstract class AbstractRepository implements IRepository {

    protected model: any;

    constructor(model: any) {
        this.model = model;
    }

    create(modelObj: object | any ) {
        const fileName = this.model.constructor.name;
        fs.readFile(fileName + '.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                const obj = JSON.parse(data) || [];
                const lastObj = obj[ obj.length - 1 ];
                if ( modelObj.id ) {
                    delete modelObj.id;
                }
                modelObj.id = lastObj ? lastObj.id + 1 : 1;
                obj.push(modelObj);
                const json = JSON.stringify(obj);
                fs.writeFile( fileName + '.json', json, 'utf8'); 
            }
        });
    }
    fetch() {
        const fileName = this.model.constructor.name;
        fs.readFile(fileName + '.json', 'utf8', function readFileCallback( err, data ) {
            if (err){
                console.log(err);
            } else {
                return JSON.parse(data) || [];
            }
        });
    }
    find(searchParam: number | object): any {
        const fileName = this.model.constructor.name;
        fs.readFile(fileName + '.json', 'utf8', function readFileCallback( err, data ) {
            if (err){
                console.log(err);
            } else {
                const obj = JSON.parse(data) || [];
                if (typeof searchParam === "object") {
                    
                }
            }
        });
    }
    edit(data: object, searchParam: number | object) {
        throw new Error("Method not implemented.");
    }
    delete(searchParam: number | object) {
        throw new Error("Method not implemented.");
    }
    
}