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
import { Endpoints } from './Endpoints'
import { ClientOptions } from './ClientOptions'

type EndpointOptions<TEndpoint extends string> =
  TEndpoint extends `${infer Head}/{${infer Param}}` ? [id: number] : []

const interpolateEndpoint = (
  endpoint: keyof Endpoints,
  params: { [k: string]: any },
): string => {
  return endpoint.replace('{id}', params[0] ?? '')
}

export abstract class SportmonksClient {
  protected readonly rc: RestClient

  protected abstract getBaseUrl(): string

  protected abstract getApiPath(): string

  constructor(protected readonly options: ClientOptions) {
    this.rc = new RestClient(this.options.userAgent, this.getBaseUrl())
  }

  get = async <TEndpoint extends keyof Endpoints, TIncludes>(
    endpoint: TEndpoint,
    options?: EndpointOptions<TEndpoint>,
  ): Promise<Endpoints[TEndpoint]> => {
    const interpolatedEndpoint = interpolateEndpoint(endpoint, options)
    const response = await this.rc.get<{ data: Endpoints[TEndpoint] }>(
      this.getApiPath() + interpolatedEndpoint,
      { queryParameters: { params: { api_token: this.options.apiToken } } },
    )

    return response.result.data
  }
}
