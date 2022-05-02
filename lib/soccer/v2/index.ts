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

import { SportmonksClient } from '../../'

export class SoccerClient extends SportmonksClient {
  protected baseUrl(): string {
    return 'https://soccer.sportmonks.com/api/v2.0'
  }
}

export interface SoccerEndpoints {
  '/continents': Continent[]
  '/continents/{id}': Continent
  '/countries': Country[]
  '/countries/{id}': Country
  '/livescores': Fixture[]
}

export interface Continent {
  id: number
  name: string
}

export interface Country {
  id: number
  name: string
}

export interface Fixture {
  id: number
  league_id?: number
  season_id?: number
  stage_id?: number
  round_id?: number
  group_id?: number
  aggregate_id?: number
  venue_id?: number
  referee_id?: number
  localteam_id?: number
  visitorteam_id?: number
  winner_team_id?: number
  commentaries: boolean
  attendance?: number
  weather: {
    code?: string
    type?: string
    clouds?: string
    humidity?: string
    pressure?: number
    updated_at?: string
  }
  scores: {
    localteam_score: number
    visitorteam_score: number
    localteam_pen_score?: number
    visitorteam_pen_score?: number
    ht_score?: number
    ft_score?: number
    et_score?: number
    ps_score?: number
  }
  time: {
    status: string
    minute?: number
    second?: number
    added_time?: number
    extra_minute?: number
    injury_time?: number
  }
}
