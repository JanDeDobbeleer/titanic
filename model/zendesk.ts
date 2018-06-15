import { IsNotEmpty } from "class-validator";

export class ZendeskTicket {
    @IsNotEmpty()
    id: string= '';
    @IsNotEmpty()
    summary: string = '';
    @IsNotEmpty()
    description: string = '';
    @IsNotEmpty()
    from: string = '';
    @IsNotEmpty()
    assignee: string = '';
    @IsNotEmpty()
    url: string = '';
};
