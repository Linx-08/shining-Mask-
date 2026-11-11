export const APP_VERSION = 'v5.8-glasses';

// GLASSES (SL-012/SL-015): 12x36 Pixel
export const WIDTH = 12;
export const HEIGHT = 36;
export const ORDER = 'rows';   // falls das F-Testmuster falsch erscheint: 'cols'
export const FLIP_X = false;
export const FLIP_Y = false;

export const EYE_LINE_Y = 0;
export const MAX_FRAMES = 10;
export const SLOT_START = 1;

export const NAME_PREFIX = 'GLASSES-';

export const SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
export const CMD_CHAR = 'd44bc439-abfd-45a2-b575-925416129600';
export const NOTIFY_CHAR = 'd44bc439-abfd-45a2-b575-925416129601';
export const UPLOAD_CHAR = 'd44bc439-abfd-45a2-b575-92541612960a';

export const AES_KEY = new Uint8Array([
  0x32, 0x67, 0x2f, 0x79, 0x74, 0xad, 0x43, 0x45,
  0x1d, 0x9c, 0x6c, 0x89, 0x4a, 0x0e, 0x87, 0x64,
]);
