export abstract class Platform{
    name:string;
    
    constructor(name:string){
        this.name=name        
    }

    abstract  checkUsernameExists(username:string):Promise<IUsernameCheck>
}

export interface IUsernameCheck{
    exists:boolean;
    platform :string
}