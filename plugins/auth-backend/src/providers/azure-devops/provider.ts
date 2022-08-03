import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { OAuthHandlers, OAuthResponse, OAuthStartRequest } from "../../lib/oauth";
import { RedirectInfo } from "../types";
import { AzureDevopsProviderOptions } from "./type";
import * as oauth2orize from "oauth2orize"
export const Azure = "Azure";

export class AzureDevopsAuthProvider implements OAuthHandlers {
    constructor(private options: AzureDevopsProviderOptions){}
    private setup() {
      let server = oauth2orize.createServer();
      server.grant()
    }
    start(req: OAuthStartRequest): Promise<RedirectInfo> {
      console.log(this.options.accessTokenUrl)
      throw new Error("Method not implemented.");
    }
    handler(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<{ response: OAuthResponse; refreshToken?: string | undefined; }> {
        throw new Error("Method not implemented.");
    }
}
