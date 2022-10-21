export abstract class Platform{
    name:string;
    
    constructor(name:string){
        this.name=name        
    }

    abstract  checkUsernameExists(username:string):Promise<IUsernameCheck | undefined>
}

export interface IUsernameCheck{
    exists:boolean;
    platform :string
}