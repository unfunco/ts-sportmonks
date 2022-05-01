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

import { RestClient } from 'typed-rest-client'
import { AuthenticationHandler } from './handlers/authenticationhandler'
import { Endpoint } from './soccer/v2/types'

export interface ClientOptions {
  apiToken: string
  userAgent?: string
}

export abstract class SportmonksClient {
  protected readonly rc: RestClient

  protected abstract baseUrl(): string

  constructor(protected readonly options: ClientOptions) {
    this.rc = new RestClient(options.userAgent, this.baseUrl(), [
      new AuthenticationHandler(this.options.apiToken),
    ])
  }

  get = async <T>(endpoint: Endpoint): Promise<T> => {
    const response = await this.rc.get<{ data: T }>(endpoint)
    return response.result.data
  }
}
