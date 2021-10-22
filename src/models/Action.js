import { Task } from "./Task";

export class Action{
    constructor(type,payload=new Task()){
        this.type=type
        this.payload=payload
    }
}