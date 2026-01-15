
export interface Zmanim {
  candles: string;
  havdalah: string;
  parasha: string;
  date: string;
  hebrew: string;
  netz: string;
  shkia: string;
}

export interface PrayerTime {
  name: string;
  time: string;
}

export interface CommunityEvent {
  type: 'מזל טוב' | 'אזכרה' | 'שיעור' | 'אירוע';
  title: string;
  description: string;
  date?: string;
}

export interface AppConfig {
  synagogueName: string;
  cityId: string; // Geoname ID for Hebcal
  prayerTimes: PrayerTime[];
  communityEvents: CommunityEvent[];
}
