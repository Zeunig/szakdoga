
export interface IFeatures {
    exterior: string[],
    other: string[],
    technology: string[],
    interior: string[],
    safety: string[]
}

export const KEYLESS_ENTRY = 1
export const PREMIUM_WHEELS = 2
export const ROOF_RACK = 4
export const TRAILER_HITCH = 8
export const DUAL_REAR_WHEELS = 16
export const DISABILITY_EQUIPPED = 32
export const ANDROID_AUTO = 64
export const APPLE_CARPLAY = 128
export const BLUETOOTH_HANDS_FREE = 256
export const CRUISE_CONTROL = 512
export const DVD_PLAYER = 1024
export const NAVIGATION = 2048
export const PORTABLE_AUDIO_CONNECTION = 4096
export const PREMIUM_AUDIO = 8192
export const SATELLITE_RADIO = 16384
export const STEERING_WHEEL_CONTROLS = 32768
export const REMOTE_ENGINE_START = 65536
export const ADAPTIVE_CRUISE_CONTROL = 131072
export const HEAD_UP_DISPLAY = 262144
export const RAIN_SENSING_WIPERS = 524288
export const KEYLESS_START = 1048576
export const AUTOMATIC_PARKING = 2097152
export const WIFI_HOTSPOT = 4194304
export const THIRD_ROW_SEATS = 8388608
export const HEATED_SEATS = 16777216
export const LEATHER_SEATS = 33554432
export const SUNROOF = 67108864
export const BACKUP_CAMERA = 134217728
export const NIGHT_VISION = 268435456
export const LANE_DEPARTURE_WARNING = 536870912
export const BLIND_SPOT_MONITOR = 1073741824
export const CROSS_TRAFFIC_ALERT = 2147483648
export const BRAKE_ASSIST = 4294967296
export const SECURITY_SYSTEM = 8589934592
export const LANE_KEEPING_ASSIST = 17179869184
export const TPMS = 34359738368
export const ABS = 68719476736
export const ESP = 137438953472

export const FEATURES = ['Kulcsmentes belépés', 'Prémium kerekek', 'Tetőcsomagtartó', 'Utánfutó vonószerelvény', 'Dupla hátsó kerék', 'Mozgássérült-barát', 'Android Auto', 'Apple Carplay', 'Kézmentes Bluetooth-vezérlés', 'Tempomat', 'DVD lejátszó', 'GPS', 'Hordozható audiocsatlakozás', 'Prémium Hang', 'Műholdas rádió', 'Kormánykerék vezérlése', 'Távindítható motor', 'Adaptív tempomat', 'Head-up Display', 'Esőérzékelős ablaktörlők', 'Kulcs nélküli indítás', 'Automata parkolás', 'Wi-Fi Hotspot', '3 soros ülések', 'Ülés-fűtés', 'Bőrülés', 'Napfénytető', 'Tolatókamera', 'Éjszakai látás', 'Sávelhagyás figyelmeztető', 'Holttérfigyelő', 'Keresztforgalmi figyelmeztető', 'Fékasszisztens', 'Biztonsági rendszer', 'Sávtartó asszisztens', 'TPMS', 'ABS', 'ESP']

function dec2bin(dec: number) {
    return (dec >>> 0).toString(2);
  }

export function getFeatures(decimalValue: number): IFeatures {
    let features: IFeatures = {
        exterior: [],
        other: [],
        technology: [],
        interior: [],
        safety: []
    };
    let bitPosition = 0;
    while (decimalValue > 0) {
        if (decimalValue & 1) {
            if(bitPosition >= 0 && bitPosition <= 4) {
                features.exterior.push(FEATURES[bitPosition]);
            }else if(bitPosition == 5) {
                features.interior.push(FEATURES[bitPosition]);
            }else if(bitPosition >= 6 && bitPosition <= 22) {
                features.technology.push(FEATURES[bitPosition]);
            }else if(bitPosition >= 23 && bitPosition <= 26) {
                features.interior.push(FEATURES[bitPosition]);
            }else {
                features.safety.push(FEATURES[bitPosition]);
            }
        }
        decimalValue >>>= 1;
        bitPosition++;
    }
    return features
}
