import { FacebookAuthService } from "../services/facebook-auth.service";
import { ClientConfig } from "../client.config";
import { Router } from "@angular/router";
import { FacebookAuthInjector } from "../services/facebook-auth-injector.service";
import { LocalStorageService } from "ngx-store";

export function FacebookAuthFactory(config: ClientConfig, router: Router, storage: LocalStorageService): FacebookAuthService {
  return FacebookAuthInjector.getInstance(config, router, storage);
}
