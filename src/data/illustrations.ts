// Line drawings of the arms, keyed by the arm's file name in src/content/arms.
// Each drawing is generated from a few measurements (in inches) so that it is
// drawn to scale. Arms not listed here are shown without a drawing.

export type LongArmAction =
  | 'musket' // percussion side lock
  | 'hump' // side lock with the Model 1855 "hump" lock plate
  | 'sharps' // falling block worked by the trigger-guard lever
  | 'spencer' // lever-action repeater with a side lock
  | 'henry' // lever-action repeater with a brass frame and center hammer
  | 'burnside' // tilting breech block, hammer on the frame
  | 'smith'; // break-open, with a latch spring on top of the barrel

export type LongArmBrass = 'buttPlate' | 'guard' | 'bands' | 'nosecap' | 'patchbox' | 'frame';

export interface Band {
  at: number; // distance of the band's front edge from the muzzle
  width?: number; // default 0.55
  double?: boolean; // a double-strapped band
}

export interface LongArmDrawing {
  kind: 'long-arm';
  caption?: string; // replaces the article title in the figure caption
  overall: number; // overall length
  barrel: number; // barrel length
  barrelShape?: 'round' | 'octagonal'; // default round
  bore?: [number, number]; // barrel radius at the breech and at the muzzle; default [0.6, 0.42]
  action: LongArmAction;
  forend: number | null; // distance of the forend tip from the muzzle; null for no forend
  nosecap?: boolean;
  bands?: Band[]; // upper band first
  bandFastening?: 'springs' | 'screws'; // default springs
  rearSight?: { at: number; type: 'leaves' | 'ladder' | 'block' } | null; // at = distance from the breech
  frontSight?: number | null; // distance from the muzzle
  ramrod?: boolean;
  swivels?: boolean;
  brass?: LongArmBrass[];
  patchbox?: boolean;
  magazine?: boolean; // tube magazine under the barrel (Henry)
  buttMagazine?: boolean; // tube magazine in the butt (Spencer)
  telescope?: boolean;
  falseMuzzle?: boolean;
}

export interface RevolverDrawing {
  kind: 'revolver';
  caption?: string;
  barrel: number;
  barrelShape: 'round' | 'octagonal';
  frame: 'open' | 'solid'; // open top (Colt) or with a top strap (Remington)
  lug: 'navy' | 'army' | 'dragoon' | 'remington' | 'lemat'; // barrel lug and loading lever
  cylinder: { length: number; radius: number; rebated?: boolean };
  engraved?: boolean; // roll-engraved scene on the cylinder
  grip?: number; // grip length relative to the Navy's; default 1
  brass?: ('frame' | 'straps' | 'guard')[];
  shotBarrel?: number; // LeMat's lower barrel
  lanyardRing?: boolean;
  spurGuard?: boolean;
}

export type Drawing = LongArmDrawing | RevolverDrawing;

const springfield: LongArmDrawing = {
  kind: 'long-arm',
  overall: 56,
  barrel: 40,
  action: 'musket',
  forend: 3,
  bands: [{ at: 3, width: 1.6, double: true }, { at: 12.8 }, { at: 22.5 }],
  rearSight: { at: 2.6, type: 'leaves' },
  frontSight: 1.9,
  ramrod: true,
  swivels: true,
};

export const illustrations: Record<string, Drawing> = {
  // Muskets & rifle-muskets
  'springfield-1861': springfield,
  'springfield-1863': {
    ...springfield,
    caption: 'The Springfield Model 1863 Rifle-Musket, Type I',
    bandFastening: 'screws',
  },
  'richmond-rifle-musket': {
    ...springfield,
    action: 'hump',
    nosecap: true,
    brass: ['buttPlate', 'nosecap'],
  },
  'enfield-1853': {
    kind: 'long-arm',
    overall: 55,
    barrel: 39,
    action: 'musket',
    forend: 3,
    nosecap: true,
    bands: [{ at: 4.7 }, { at: 13.9 }, { at: 23.3 }],
    bandFastening: 'screws',
    rearSight: { at: 3.3, type: 'ladder' },
    frontSight: 1.1,
    ramrod: true,
    swivels: true,
    brass: ['buttPlate', 'guard', 'nosecap'],
  },
  'lorenz-1854': {
    kind: 'long-arm',
    overall: 52,
    barrel: 37.5,
    bore: [0.58, 0.42],
    action: 'musket',
    forend: 3,
    bands: [{ at: 3, width: 1.1 }, { at: 11.5 }, { at: 20.5 }],
    rearSight: { at: 2.5, type: 'block' },
    frontSight: 1.3,
    ramrod: true,
    swivels: true,
  },
  'model-1842-musket': {
    kind: 'long-arm',
    overall: 57.75,
    barrel: 42,
    bore: [0.6, 0.45],
    action: 'musket',
    forend: 3.4,
    bands: [{ at: 3.4, width: 2.6, double: true }, { at: 13.5 }, { at: 23.5 }],
    rearSight: null,
    frontSight: 3.1,
    ramrod: true,
    swivels: true,
  },
  'mississippi-rifle': {
    kind: 'long-arm',
    overall: 48.75,
    barrel: 33,
    bore: [0.6, 0.52],
    action: 'musket',
    forend: 2.4,
    nosecap: true,
    bands: [{ at: 3.2, width: 2.6, double: true }, { at: 11 }],
    rearSight: { at: 2.2, type: 'block' },
    frontSight: 0.9,
    ramrod: true,
    swivels: true,
    patchbox: true,
    brass: ['buttPlate', 'guard', 'bands', 'nosecap', 'patchbox'],
  },

  // Breechloaders & repeaters
  'sharps-rifle': {
    kind: 'long-arm',
    caption: 'The Sharps New Model 1863 Rifle',
    overall: 47,
    barrel: 30,
    bore: [0.55, 0.42],
    action: 'sharps',
    forend: 3,
    bands: [{ at: 3, width: 1.1 }, { at: 11 }, { at: 19 }],
    rearSight: { at: 3.5, type: 'ladder' },
    frontSight: 1.4,
    ramrod: true,
    swivels: true,
  },
  spencer: {
    kind: 'long-arm',
    caption: 'The Spencer Repeating Rifle',
    overall: 47,
    barrel: 30,
    bore: [0.58, 0.44],
    action: 'spencer',
    forend: 3,
    bands: [{ at: 3, width: 1.1 }, { at: 11 }, { at: 19 }],
    rearSight: { at: 3, type: 'leaves' },
    frontSight: 1.6,
    swivels: true,
    buttMagazine: true,
  },
  'henry-rifle': {
    kind: 'long-arm',
    overall: 43.5,
    barrel: 24,
    barrelShape: 'octagonal',
    bore: [0.45, 0.42],
    action: 'henry',
    forend: null,
    rearSight: { at: 6, type: 'leaves' },
    frontSight: 0.8,
    magazine: true,
    brass: ['frame', 'buttPlate'],
  },

  // Cavalry carbines
  'sharps-carbine': {
    kind: 'long-arm',
    caption: 'The Sharps New Model 1863 Carbine',
    overall: 39,
    barrel: 22,
    bore: [0.52, 0.4],
    action: 'sharps',
    forend: 13,
    bands: [{ at: 13.3 }],
    rearSight: { at: 2.7, type: 'leaves' },
    frontSight: 0.9,
  },
  'burnside-carbine': {
    kind: 'long-arm',
    overall: 39.5,
    barrel: 21,
    bore: [0.5, 0.4],
    action: 'burnside',
    forend: null,
    rearSight: { at: 2, type: 'leaves' },
    frontSight: 0.7,
  },
  'smith-carbine': {
    kind: 'long-arm',
    overall: 39.5,
    barrel: 21.6,
    bore: [0.5, 0.4],
    action: 'smith',
    forend: 12,
    bands: [{ at: 12 }],
    rearSight: { at: 4.2, type: 'leaves' },
    frontSight: 0.7,
  },

  // Sharpshooters' rifles
  whitworth: {
    kind: 'long-arm',
    overall: 49,
    barrel: 33,
    bore: [0.55, 0.42],
    action: 'musket',
    forend: 3,
    nosecap: true,
    bands: [{ at: 7 }, { at: 16 }],
    bandFastening: 'screws',
    rearSight: { at: 3.5, type: 'ladder' },
    frontSight: 1.2,
    ramrod: true,
    swivels: true,
  },
  'sharpshooter-target-rifle': {
    kind: 'long-arm',
    overall: 50,
    barrel: 32,
    barrelShape: 'octagonal',
    bore: [0.66, 0.62],
    action: 'musket',
    forend: 16,
    nosecap: true,
    rearSight: null,
    frontSight: null,
    ramrod: true,
    telescope: true,
    falseMuzzle: true,
  },

  // Revolvers & pistols
  'colt-1851-navy': {
    kind: 'revolver',
    barrel: 7.5,
    barrelShape: 'octagonal',
    frame: 'open',
    lug: 'navy',
    cylinder: { length: 1.56, radius: 0.78 },
    engraved: true,
    brass: ['straps', 'guard'],
  },
  'colt-1860-army': {
    kind: 'revolver',
    barrel: 8,
    barrelShape: 'round',
    frame: 'open',
    lug: 'army',
    cylinder: { length: 2.0, radius: 0.84, rebated: true },
    engraved: true,
    grip: 1.1,
    brass: ['guard'],
  },
  'remington-1858': {
    kind: 'revolver',
    barrel: 8,
    barrelShape: 'octagonal',
    frame: 'solid',
    lug: 'remington',
    cylinder: { length: 1.95, radius: 0.83 },
    brass: ['guard'],
  },
  'griswold-gunnison': {
    kind: 'revolver',
    barrel: 7.5,
    barrelShape: 'round',
    frame: 'open',
    lug: 'dragoon',
    cylinder: { length: 1.56, radius: 0.78 },
    brass: ['frame', 'straps', 'guard'],
  },
  lemat: {
    kind: 'revolver',
    barrel: 6.75,
    barrelShape: 'octagonal',
    frame: 'open',
    lug: 'lemat',
    cylinder: { length: 1.7, radius: 1.0 },
    grip: 1.05,
    shotBarrel: 5,
    lanyardRing: true,
    spurGuard: true,
  },
};
