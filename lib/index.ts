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
import {
  IHttpClientResponse,
  IRequestHandler,
} from 'typed-rest-client/Interfaces'
import { RequestOptions } from 'https'

import { SoccerEndpoints } from './soccer/v2'

type Endpoints = SoccerEndpoints

export interface ClientOptions {
  apiToken: string
  userAgent?: string
}

type EndpointParameter<TEndpoint extends string> =
  TEndpoint extends `${infer Head}/{${infer Param}}` ? [id: number] : []

export class AuthenticationHandler implements IRequestHandler {
  public constructor(private readonly apiToken: string) {}

  prepareRequest(options: RequestOptions): void {
    options.path += `?api_token=${encodeURIComponent(this.apiToken)}`
  }

  canHandleAuthentication = (): boolean => false

  handleAuthentication = (): Promise<IHttpClientResponse> => null
}

export abstract class SportmonksClient {
  protected readonly rc: RestClient

  protected abstract baseUrl(): string

  constructor(protected readonly options: ClientOptions) {
    this.rc = new RestClient(this.options.userAgent, this.baseUrl(), [
      new AuthenticationHandler(this.options.apiToken),
    ])
  }

  get = async <T, TEndpoint extends keyof Endpoints>(
    endpoint: TEndpoint,
    ..._params: EndpointParameter<TEndpoint>
  ): Promise<T> => {
    const response = await this.rc.get<{ data: T }>(endpoint)
    return response.result.data
  }
}
