// list of terminal commands that require API calls from other sources.
import {getWeather} from '../api';

export const weather = async (args: string[]): Promise<string> => {
    const city = args.join('+');
    if (!city) {
      return 'Usage: weather [city]. Example: weather casablanca';
    }
    const weather = await getWeather(city);
    return weather;
  }; 