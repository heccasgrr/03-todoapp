export class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(text: string){
        
        this.id = Math.random();

        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;

    }
}
