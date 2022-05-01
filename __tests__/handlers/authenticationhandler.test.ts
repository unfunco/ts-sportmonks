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

import { AuthenticationHandler } from '../../src/handlers/authenticationhandler'

describe('AuthenticationHandler', () => {
  let authenticationHandler: AuthenticationHandler

  beforeEach(() => {
    authenticationHandler = new AuthenticationHandler('super-secret-token')
  })

  it('cannot handle authentication', () => {
    expect(authenticationHandler.canHandleAuthentication()).toBe(false)
  })

  it('should append the API token to the URL', () => {
    const options = { path: '/testing' }
    authenticationHandler.prepareRequest(options)
    expect(options.path).toBe('/testing?api_token=super-secret-token')
  })
})
