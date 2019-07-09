export interface Searchflights {
    search_id:             string;
    data:                  Datum[];
    connections:           any[];
    time:                  number;
    currency:              string;
    currency_rate:         number;
    fx_rate:               number;
    refresh:               any[];
    del:                   number;
    ref_tasks:             any[];
    search_params:         SearchParams;
    airlinesList:          any[];
    airportsList:          AirportsList[];
    all_airlines:          any[];
    all_prices:            { [key: string]: number };
    all_stopover_airports: string[];
    best_results:          BestResult[];
    hashtags:              Hashtag[];
    location_hashtags:     string[];
}

export interface AirportsList {
    filterName: string;
    name:       string;
}

export interface BestResult {
    sort:     string;
    price:    number;
    duration: number;
    quality:  number;
}

export interface Datum {
    id:                            string;
    countryFrom:                   Country;
    countryTo:                     Country;
    bags_price:                    { [key: string]: number };
    baglimit:                      Baglimit;
    dTime:                         number;
    aTime:                         number;
    dTimeUTC:                      number;
    p1:                            number;
    p2:                            number;
    p3:                            number;
    aTimeUTC:                      number;
    price:                         number;
    flyFrom:                       string;
    mapIdfrom:                     string;
    mapIdto:                       string;
    flyTo:                         string;
    distance:                      number;
    cityFrom:                      string;
    cityTo:                        string;
    route:                         Route[];
    routes:                        Array<string[]>;
    airlines:                      string[];
    nightsInDest:                  number;
    pnr_count:                     number;
    transfers:                     any[];
    has_airport_change:            boolean;
    virtual_interlining:           boolean;
    fly_duration:                  string;
    duration:                      Duration;
    return_duration:               string;
    hashtags:                      string[];
    facilitated_booking_available: boolean;
    conversion:                    Conversion;
    booking_token:                 string;
    quality:                       number;
    found_on:                      string[];
}

export interface Baglimit {
    hold_width:          number;
    hold_height:         number;
    hold_length:         number;
    hold_dimensions_sum: number | null;
    hold_weight:         number;
    hand_width:          number;
    hand_height:         number;
    hand_length:         number;
    hand_weight:         number;
}

export interface Conversion {
    EUR: number;
}

export interface Country {
    code: string;
    name: string;
}

export interface Duration {
    departure: number;
    return:    number;
    total:     number;
}

export interface Route {
    id:                    string;
    combination_id:        string;
    return:                number;
    original_return:       number;
    source:                string;
    found_on:              string;
    price:                 number;
    aTime:                 number;
    dTime:                 number;
    aTimeUTC:              number;
    dTimeUTC:              number;
    mapIdfrom:             string;
    mapIdto:               string;
    cityTo:                string;
    cityFrom:              string;
    flyTo:                 string;
    airline:               string;
    operating_carrier:     string;
    equipment:             null | string;
    flyFrom:               string;
    latFrom:               number;
    lngFrom:               number;
    latTo:                 number;
    lngTo:                 number;
    flight_no:             number;
    vehicle_type:          string;
    refresh_timestamp:     number;
    bags_recheck_required: boolean;
    guarantee:             boolean;
    fare_classes:          string;
    fare_basis:            string;
    fare_family:           string;
    fare_category:         string;
    last_seen:             number;
    operating_flight_no:   string;
}

export interface Hashtag {
    name:  string;
    count: number;
}

export interface SearchParams {
    flyFrom_type: string;
    to_type:      string;
    seats:        Seats;
}

export interface Seats {
    passengers: number;
    adults:     number;
    children:   number;
    infants:    number;
}
