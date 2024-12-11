import { LaunchFireworkSystem, Weather, WeatherRepository } from './Types'


export class LaunchFireworkImpl implements LaunchFireworkSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(city: string): Promise<string> {
        // テストが通るように書き換えてください
        const weather = await this.weatherRepository.getByCity(city)
        if(weather === Weather.SUNNY) {
            return Promise.resolve('花火を打ち上げました')
        } else {
            return Promise.resolve('中止しました')
        }

    }
}
