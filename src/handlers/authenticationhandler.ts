// Copyright © 2022 Daniel Morris
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at:
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  IHttpClientResponse,
  IRequestHandler,
} from 'typed-rest-client/Interfaces'

import { RequestOptions } from 'https'

export class AuthenticationHandler implements IRequestHandler {
  public constructor(private readonly apiToken: string) {
  }

  prepareRequest(options: RequestOptions): void {
    options.path += `?api_token=${encodeURIComponent(this.apiToken)}`
  }

  canHandleAuthentication = (): boolean => false

  handleAuthentication = (): Promise<IHttpClientResponse> => null
}
