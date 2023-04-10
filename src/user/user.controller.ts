import { Controller, Get } from "@nestjs/common/decorators";

@Controller("/user")
export class UserController{

@Get()
findAllUsers(): string[] {
    return ["Mohamed","Sawah"]
}

}