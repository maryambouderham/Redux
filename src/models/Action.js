import { Task } from "./Task";

export class Action{
    constructor(type="",payload={}){
        this.type=type
        this.payload=payload
    }
}