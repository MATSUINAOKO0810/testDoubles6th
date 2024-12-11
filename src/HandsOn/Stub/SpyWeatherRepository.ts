import {Weather, WeatherRepository} from "./Types"

// 正しくSpyの役割を果たすように書き換えてください
export class SpyWeatherRepository implements WeatherRepository {
    getByCity_arg = ''

    getByCity(city: string): Promise<Weather> {
        this.getByCity_arg = city
        return Promise.resolve(Weather.SUNNY)
    }
}
