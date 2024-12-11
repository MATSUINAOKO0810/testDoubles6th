import {Weather, WeatherRepository} from './Types'

// 正しくStubの役割を果たすように書き換えてください
export class StubWeatherRepository implements WeatherRepository {
    getByCity_returnValue = Promise.resolve(Weather.SUNNY)

    getByCity(city: string): Promise<Weather> {
        return Promise.resolve(this.getByCity_returnValue)
    }
}
