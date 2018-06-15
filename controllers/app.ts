"use strict";

import { Response, Request } from "express";

export let hello = (req: Request, res: Response) => {
    res.send('hello world from Zendesk-Jira tools!');
};

export let start = (req: Request, res: Response) => {
    console.log(`App started`);
};
