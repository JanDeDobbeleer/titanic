import * as jiraApi from "jira-client";
import { Storage } from "../tools/storage";
import { ZendeskTicket } from "../model/zendesk";
export class Jira {
  constructor() {
    // we need the database here
  }

  create(ticket: ZendeskTicket) {
    // check if we know this one already, if we do: update
  }

  update(ticket: ZendeskTicket) {
    // check if we have this fellow, if we don't: create
  }
}
