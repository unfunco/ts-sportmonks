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
  protected getBaseUrl(): string {
    return 'https://soccer.sportmonks.com'
  }

  protected getApiPath(): string {
    return '/api/v2.0'
  }
}

export interface SoccerEndpoints {
  '/continents': Continent[]
  '/continents/{id}': Continent
  '/countries': Country[]
  '/countries/{id}': Country
  '/leagues': League[]
  '/leagues/{id}': League
  '/livescores': Fixture[]
  '/seasons': Season[]
  '/seasons/{id}': Season
}

export interface Continent {
  id: number
  name: string
}

export interface Country {
  id: number
  name: string
  image_path: string
  extra: {
    continent: string
    sub_region: string
    world_region: string
    fifa: string
    iso: string
    iso2: string
    longitude: string
    latitude: string
    flag: string
  }
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

export interface League {
  id: number
  active: boolean
  type: string
  legacy_id?: number
  country_id?: number
  logo_path?: string
  name: string
  is_cup: boolean
  is_friendly: boolean
  current_season_id?: number
  current_round_id?: number
  current_stage_id?: number
  live_standings: boolean
  coverage: {
    predictions: boolean
    topscorer_goals: boolean
    topscorer_assists: boolean
    topscorer_cards: boolean
  }
}

export interface Season {
  id: number
  name: string
  league_id: number
  is_current_season: boolean
  current_round_id?: number
  current_stage_id?: number
}
