import * as express from "express";
import * as bodyParser from "body-parser";
import { validate, validationError } from "./middleware/validation";
import { ZendeskTicket } from "./model/zendesk";

// Controllers (route handlers)
import * as appController from "./controllers/app";
import * as jiraController from "./controllers/jira";

const app = express();

// settings
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('output'));
var port = process.env.PORT || 4001;

// Primary app routes.
app.get('/', appController.hello);
app.post('/create-jira', validate(ZendeskTicket), jiraController.create);
app.post('/update-jira', jiraController.update);
app.use(validationError);
app.listen(port, appController.start);
