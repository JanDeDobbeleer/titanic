"use strict";

import { Response, Request } from "express";
import { Jira } from "../tools/jira";
import { ZendeskTicket } from "../model/zendesk";

export let create = (req: Request, res: Response) => {
    res.status(200).end();
    let jira = new Jira();
    jira.create(req.body);
};

export let update = (req: Request, res: Response) => {
    res.status(501).end();
};
