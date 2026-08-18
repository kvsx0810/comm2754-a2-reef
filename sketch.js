const CANVAS_W = 1920;
const CANVAS_H = 1080;
const HORIZON_Y = Math.round(CANVAS_H * 0.42);

const PALETTE = {
  blackPearl:    ['#021427', '#042549', '#063E79', '#0A69CC'],
  springGreen:   ['#8FEC83', '#BFF4B8', '#E3FAE0', '#EBFBE9'],
  fineTurquoise: ['#2EC2B4', '#5ED9CD', '#98E7DF', '#C9F2EE'],
  oceanBlue:     ['#065274', '#086E9B', '#11AEF3', '#BBE8FB'],
  pastelBerry:   ['#ED8495', '#F3AAB6', '#F8CED5', '#FCEDF0']
};

// Raw vector path data traced from the Figma "Scene" frame's Kelp layers,
// read directly via the Plugin API. Corals/Fish Bone used to be traced the
// same way but were replaced with recolored PNGs (see CORAL_FILES /
// FISH_BONE_FILE below) — bezier-endpoint tracing loses too much curve
// smoothness on shapes this detailed.
const RAW_PATHS = {
  kelp: [
    "M 26.139664074428065 215.3665919952659 C 25.33008914104649 201.4276588451629 24.354187339727453 184.42389798516717 34.35164254552559 163.32556293889476 C 43.371962231654756 144.30309603701127 46.58937622321034 151.93002999581557 51.15964677815079 147.68077546230705 C 59.863757084315964 139.5866833719882 75.35152863090244 138.63639277149898 82.1150699112948 129.3163779732801 C 90.03750223903918 118.39344834668961 87.06739441097768 93.47896299129563 92.97148701761823 82.48939061257933 C 95.02666223024484 78.66509757938165 96.28064377463393 75.14728447529674 116.7385713872582 59.4694011031117 C 127.07075275195538 51.55329947820324 142.38709246633007 40.814080715301806 145.20365523346769 44.16921957266465 C 147.8285897420723 47.30231270877983 135.8656736808274 52.153136597692225 127.78090677161552 66.95032692522662 C 121.54431671874136 78.34328946578471 119.09496093993141 89.6719515587547 117.51832763720162 96.92524980282337 C 114.51770994502097 110.7585204883951 116.62380294266225 110.73171187065482 113.97297732049574 118.18970748860944 C 109.55886100557453 130.60373681638657 108.30998591748497 151.59471698587714 98.90722883613302 159.84202062198725 C 84.11633526884052 172.81842664961962 85.06030679803537 171.77300049349844 76.57454766802266 180.98164514256547 C 69.0965463831987 189.09646348702148 65.39210962391913 202.2081342363253 49.54144099034265 205.5297984058659 C 23.017926572812872 211.09183311576476 30.140867073580992 225.39238724651776 29.049653357481308 225.08667121194242 C 26.999091300317396 224.5187236862566 26.42470003537126 220.32029013131088 26.127471244368255 215.36372020426182 L 26.139664074428065 215.3665919952659 Z",
    "M 33.307762023860704 227.95597333046845 C 31.389354794624026 224.53224092232512 41.199023520315535 216.3167778950414 42.776559871306915 198.41590542276398 C 43.65778027025263 188.4045772393676 52.71532962231614 182.14028791971066 54.76272653448885 172.60412822028835 C 56.87443066595874 162.75381776875102 64.07965113526497 162.7035135629965 71.14878006811325 149.13757520968892 C 73.26284980556208 145.07383164428268 77.8643194470196 136.00807505063707 77.05882921241977 125.10870158890229 C 76.91816376775617 123.15136998358614 76.51601701084985 120.04409174325899 69.4003712078627 104.23861858564707 C 60.74233986243568 85.00868123668934 58.7379881356246 83.83114858113892 58.74350352194054 77.90715490359868 C 58.75705335767604 67.62970293331902 64.81990499186475 66.05893795481032 63.99688252846884 56.54816144769761 C 63.3068149448961 48.49914077103548 58.86963038149462 48.36086627777657 53.42879631096064 35.75759414931635 C 50.715979465637474 29.451403604040728 45.19723463590539 16.690636174874875 50.44118292405379 6.698893007836404 C 52.53463958714 2.7189571287031673 56.21783429017711 -0.6108278432016226 57.61240517428737 0.09498074814817654 C 59.97459665351361 1.2928499281255825 52.53940679420618 12.342340749113726 55.90489570923989 21.738413885068063 C 59.744586046315824 32.473435645075014 73.78892689280723 30.17288276055676 81.8440584511793 39.892853537208396 C 89.54044448272307 49.174462617921364 85.7007547051566 65.78689708187909 83.05321358999852 81.082733532708 C 81.51881047571231 89.90318906783652 80.23839285555141 91.26247019655659 80.68896833806335 96.59672887775443 C 81.75967015776033 109.36859906974485 89.95892323904775 111.65234150681796 93.59876425865413 123.56875152615697 C 98.5826555358181 139.92677671736882 89.53751843477261 156.62652110647247 88.30197925456096 158.85722365771483 C 80.49687531367576 172.83352449253368 72.3383672962332 170.01488106646426 66.2465104033611 182.8217093310312 C 59.3330258109147 197.33561093753514 67.2348965391664 206.3613651277911 59.370965774103134 216.6775885202123 C 52.174499203238504 226.12430239992943 34.74401328512269 230.4946930416592 33.320029455181285 227.9588451214725 L 33.307762023860704 227.95597333046845 Z",
    "M 20.658882520778402 216.09887476971022 C 16.365416213852033 210.10689181407992 10.224457890161789 201.4041026803072 5.452688210869906 187.45058172933827 C 2.9318399923319913 180.10043009007086 -0.23653333492069106 170.535204724666 0.013973012844261161 157.8189515517876 C 0.21923595730455378 147.4470438326527 -0.2806961957883152 108.53730083036407 3.691556478601795 129.48264270661952 C 4.492468340576766 133.7086716303827 13.571515095010612 140.7939910408564 13.420499739526443 148.1526346558663 C 13.306285022788531 153.5701075946492 12.210965206670425 159.3406283485451 12.608144230652918 164.52313568497655 C 13.034600193043028 170.21892106944068 19.111413088920376 171.43680986722057 21.45888107681843 172.6945417737329 C 28.46451836865287 176.45914306040044 32.1656547681561 179.27408344658534 37.22485042297012 185.41973489183593 C 40.808878509333425 189.76456472397393 36.331255551551074 195.74468359301872 36.51896732548892 210.5258053524507 C 36.66049999815249 222.01696893596517 36.68631772272412 228.02426184693755 34.12791933258528 229.04682314336173 C 30.87819292394725 230.35091587151643 25.466440662898187 222.7934488731069 20.668201710273454 216.11373628815625 L 20.658882520778402 216.09887476971022 Z",
    "M 24.41446217437701 224.3830345527636 C 17.78416620584116 214.03389624740726 26.206178080613878 192.17479459753125 26.020134950376242 163.89758780951655 C 25.993786000717495 159.78930942161125 25.88009868575209 152.24217423353898 22.87383125359037 143.33521721234666 C 17.0440056940689 126.0957675672128 7.166587087398952 123.83757958290239 4.25596425313864 111.11673752731542 C 2.597935193313997 103.84166228266152 5.6804245986332 95.47169129039246 11.903177236653944 79.02380895524306 C 21.0376271535932 54.90037114557629 30.541480506480273 31.698897719206645 34.65317487344622 33.63489786286742 C 38.76486924041216 35.570898006528196 30.16888283104955 44.43726985267982 28.61347470602697 62.090095864154755 C 27.994368494457134 69.08610481798885 26.908591578364806 81.40452519333566 31.40987312538547 94.8770106810527 C 35.851391975411744 108.1709350844697 40.72218513020834 107.6002563658811 46.62302474887313 123.28635874409079 C 48.936823882264825 129.42331329934495 52.12159107989946 138.13147357972997 51.85782505741994 149.11008977662087 C 51.588561295028164 160.47990672869335 47.86395815974771 162.97706063048037 43.01152101816922 179.17551595113108 C 35.18893501783581 205.289498302152 50.36472185385554 226.78995364018158 42.675194662226716 230.28475651884645 C 37.85937181943282 232.47619742424848 27.604151353381024 229.38267162266447 24.411515424576702 224.39500034861388 L 24.41446217437701 224.3830345527636 Z",
    "M 43.94684476921594 208.4564884812898 C 52.739076322637295 199.00295933297372 60.369079914312486 190.7970663248524 72.59073291723253 184.52541130998736 C 84.82758667304653 178.2446488287558 87.53005240693507 181.16794734891835 96.16648594135735 174.98248570087395 C 105.71692293251166 168.13707376643782 110.2105503901776 158.98283684323968 113.6481097182071 151.96195773059307 C 122.46126170318543 133.99255864120568 117.76313838852303 132.43855624695868 127.2343242223264 115.85107645024668 C 131.46913603398707 108.43415641799704 140.82153838334 103.28966890215533 144.32161767096184 93.48535272627967 C 154.7644767201208 64.14762044350523 146.20681540295536 134.7193042436203 133.54929110577532 159.36127084211128 C 131.65200703702178 163.07054116697384 120.58749363035409 183.1851247603862 99.73701567559742 192.87129066803638 C 92.50786853042845 196.23315243301147 86.22064287180847 197.3463203248211 68.78384251647816 204.95642140031305 C 61.771957369054455 208.01456434356783 61.66417122946002 216.7253679430424 53.323775640102845 223.18260198147362 C 41.12872693879764 232.61303041303853 33.48775864031802 228.9025127941828 32.30399907618605 228.18267729864752 C 24.95537875791084 223.70485998536083 38.4324064837648 214.38415939746724 43.962060442362045 208.44737054485188 L 43.94684476921594 208.4564884812898 Z"
  ]
};

// Character / Boat / Fishing Tools: exported straight out of Figma as PNGs
// (assets/) instead of traced as vector paths — the bezier-endpoint tracing
// used for the corals loses too much of the original curve smoothness on
// these larger, more detailed shapes. Only pieces that actually animate
// (eyes, fishing line) stay as code-drawn geometry.
// x/y/w/h below are each node's absoluteRenderBounds read via the Plugin API
// (the real rendered-pixel box, in Scene-relative coordinates) — not the
// layout bounding box, which can differ once corner-rounding or rotation is
// involved (Head's layout box is 143x143 but its rendered silhouette is
// 112x99; Rod/Hook are rotated so their layout x/y isn't their visual x/y).
const BODY_IMG_DEF = { x: 893, y: 351, w: 141.917, h: 65.116 };
const HEAD_IMG_DEF = { x: 910.424, y: 242, w: 112.152, h: 99.25 };
const HAND_DEFS = [
  { x: 1045, y: 365, d: 29 },
  { x: 1035, y: 351, d: 29 }
];
// Pupil is concentric with the sclera (both centered at x+r, y+r).
const EYE_DEFS = [
  { x: 948, y: 282, r: 16.1043, pupilR: 9.2025 },
  { x: 973.307, y: 282, r: 16.1043, pupilR: 9.2025 }
];
const MOUTH_IMG_DEF = { x: 950.221, y: 322.141, w: 54, h: 9 };
const BOAT_IMG_DEF = { x: 724, y: 363.227, w: 363.761, h: 117.799 };
const ROD_IMG_DEF = { x: 1055.113, y: 284.84, w: 64.36, h: 91.324 };
const HOOK_IMG_DEF = { x: 1103, y: 402, w: 27, h: 38 };
const LINE_ANCHOR = { x: 1117, y: 290 };

// Kelp instance data: real x/y/size/gradient pulled from the Figma nodes.
const KELP_DEFS = [
  { name: 'kelpL', paths: RAW_PATHS.kelp, x: 65,   y: 689, w: 149, h: 231, rot: 0,     top: PALETTE.blackPearl[3], bottom: PALETTE.oceanBlue[3] },
  { name: 'kelpR', paths: RAW_PATHS.kelp, x: 1426, y: 798, w: 149, h: 231, rot: 0.657, top: PALETTE.blackPearl[3], bottom: PALETTE.oceanBlue[3] }
];

// The 3rd/back rock layer's own gradient — pulled out as constants (instead
// of inline strings only in setup()) so the reef's back-layer coral color
// below can reuse the exact same values, never an approximation of them.
const RIDGE3RD_TOP = 'rgba(6,62,121,0.59)';
const RIDGE3RD_BOTTOM = 'rgba(56,148,245,0)';

// Coral reef: generative, differs every reload. Corals are recolored PNG
// silhouettes (source-in mask + vertical gradient — tint()/multiply doesn't
// work on pure-black source pixels) scattered across all 3 rock layers, each
// one anchored to and drawn BEHIND its own layer's contour so the rock
// covers its root and only the upper body reads in front — the same "grows
// out of the rock" depth cue real reef photos show, and it also means a
// back-layer coral gets naturally re-occluded by every nearer layer drawn
// after it. Each layer's coral color matches that same layer's own rock
// gradient EXACTLY — not an approximation, the literal same values the rock
// itself uses — which is the real rule validated against the Figma file:
// the two coral colors that exist there are pixel-identical to ridge1st's
// and ridge2nd's own top/bottom. The back layer had no coral in the original
// (fixed-position) design to validate against, so it follows the same rule
// by construction: matches ridge3rd's own gradient exactly, translucency
// included, rather than inventing an unvalidated color for it.
const CORAL_FILES = ['Coral.png', 'Coral2.png', 'Coral3.png', 'Coral4.png', 'Coral7.png'];
const FISH_BONE_FILE = 'Fish Bone.png';
const REEF_STRIPS = 30;
const REEF_SWAY_AMP = 16;
const REEF_SWAY_SPEED = 0.024;
const REEF_BACK_TOP = RIDGE3RD_TOP;
const REEF_BACK_BOTTOM = RIDGE3RD_BOTTOM;
const REEF_MID_TOP = PALETTE.blackPearl[1];
const REEF_MID_BOTTOM = PALETTE.blackPearl[2];
const REEF_FRONT_TOP = PALETTE.blackPearl[0];
const REEF_FRONT_BOTTOM = PALETTE.blackPearl[1];

let ridge3rd, ridge2nd, ridge1st;
let kelps = [];
let coralImgs = [];
let fishBoneImg;
let reefBack = [], reefMid = [], reefFront = [];
let bodyImg, headImg, hand1Img, hand2Img, mouthImg, boatImg, rodImg, hookImg;
let blinkTimer = 90, blinking = false, blinkT = 0;
let hookSwayPhase;

function preload() {
  bodyImg = loadImage('assets/body.png');
  headImg = loadImage('assets/head.png');
  hand1Img = loadImage('assets/hand1.png');
  hand2Img = loadImage('assets/hand2.png');
  mouthImg = loadImage('assets/mouth.png');
  boatImg = loadImage('assets/boat.png');
  rodImg = loadImage('assets/rod.png');
  hookImg = loadImage('assets/hook.png');
  coralImgs = CORAL_FILES.map(f => loadImage('assets/' + f));
  fishBoneImg = loadImage('assets/' + FISH_BONE_FILE);
}

function setup() {
  // Canvas is drawn at 1920x1080 logical units either way, but rendering at
  // the screen's real device pixel ratio keeps that crisp instead of the
  // browser stretching a 1x bitmap to fill a bigger/HiDPI display.
  pixelDensity(displayDensity());
  const canvas = createCanvas(CANVAS_W, CANVAS_H);
  canvas.parent('sketch-holder');
  frameRate(30);
  noStroke();
  // Chrome/Edge default to imageSmoothingQuality 'low', which uses a cheap
  // filter for big downscales — the PNG assets here are exported much larger
  // than their on-canvas size, so 'low' visibly degraded them. 'high' uses a
  // proper Lanczos-class resampler.
  drawingContext.imageSmoothingQuality = 'high';
  // Valley depth steps evenly between adjacent layers (0.09 * CANVAS_H each)
  // so 3rd->2nd and 2nd->1st read as the same "step down" in the scene.
  ridge3rd = makeRidge(HORIZON_Y + 6, CANVAS_H * 0.72, 0.15, CANVAS_H * 0.90, RIDGE3RD_TOP, RIDGE3RD_BOTTOM);
  ridge2nd = makeRidge(CANVAS_H * 0.47, CANVAS_H * 0.81, 0.14, CANVAS_H * 0.97, PALETTE.blackPearl[1], PALETTE.blackPearl[2]);
  ridge1st = makeRidge(CANVAS_H * 0.55, CANVAS_H * 0.90, 0.13, CANVAS_H, PALETTE.blackPearl[0], PALETTE.blackPearl[1]);
  kelps = KELP_DEFS.map(makeTracedInstance);
  generateReef();
  hookSwayPhase = random(TWO_PI);
}

// Reef corals are scattered across all 3 rock layers and spawned into
// reefBack/reefMid/reefFront so draw() can slot each one in right before its
// own layer is painted on top of it (see draw() below for why).
function generateReef() {
  reefBack = []; reefMid = []; reefFront = [];

  const backN = Math.floor(random(2, 4));
  for (let i = 0; i < backN; i++) {
    // Min size raised from 40 to 50 — thin branch silhouettes lost too much
    // detail (read as scribbles) below that at this layer's small scale.
    reefBack.push(spawnReefInstance(coralImgs, ridge3rd, [50, 80], REEF_BACK_TOP, REEF_BACK_BOTTOM));
  }
  const midN = Math.floor(random(2, 4));
  for (let i = 0; i < midN; i++) {
    reefMid.push(spawnReefInstance(coralImgs, ridge2nd, [65, 110], REEF_MID_TOP, REEF_MID_BOTTOM));
  }
  const frontN = Math.floor(random(3, 5));
  for (let i = 0; i < frontN; i++) {
    reefFront.push(spawnReefInstance(coralImgs, ridge1st, [90, 155], REEF_FRONT_TOP, REEF_FRONT_BOTTOM));
  }

  // Single Fish Bone prop, randomly assigned to one of the 3 layers like a coral.
  const fbTargets = [
    { arr: reefBack, ridge: ridge3rd, size: [40, 60], top: REEF_BACK_TOP, bottom: REEF_BACK_BOTTOM },
    { arr: reefMid, ridge: ridge2nd, size: [55, 85], top: REEF_MID_TOP, bottom: REEF_MID_BOTTOM },
    { arr: reefFront, ridge: ridge1st, size: [65, 100], top: REEF_FRONT_TOP, bottom: REEF_FRONT_BOTTOM }
  ];
  const fb = random(fbTargets);
  fb.arr.push(spawnReefInstance([fishBoneImg], fb.ridge, fb.size, fb.top, fb.bottom, { noSway: true }));
}

function spawnReefInstance(pool, ridge, sizeRange, topHex, bottomHex, opts = {}) {
  const img = random(pool);
  const h = random(sizeRange[0], sizeRange[1]);
  const w = h * (img.width / img.height);
  // Corals only sit over the ridge's flat "valley" plateau, never the tall
  // edge columns — a wide safety margin past the ridge's own edgeZonePx
  // keeps x solidly in the flat area, not partway up the smoothstep climb.
  const margin = ridge.edgeZonePx * 1.8;
  const x = random(margin, CANVAS_W - margin);
  // Exactly half the coral's own height sits above the rock's contour line
  // (visible) and half below it (hidden by the rock drawn after) — a small
  // jitter keeps instances from looking mechanically identical.
  const y = ridgeYAt(ridge, x) + h * 0.5 + random(-6, 6);
  return {
    buf: recolorToDisplaySize(img, topHex, bottomHex, w, h),
    baseX: x - w / 2, baseY: y, w, h,
    speedMul: random(0.7, 1.3),
    ampMul: opts.noSway ? 0 : random(0.75, 1.3),
    stiffExp: random(1.2, 2.2),
    phase: random(TWO_PI),
    flutter: !opts.noSway && random() > 0.3
  };
}

// Recolors a black-silhouette PNG by using its alpha channel as a mask
// ('source-in') and filling a vertical gradient behind it — tint()/multiply
// doesn't work here since multiplying by pure black (0,0,0) always stays
// black regardless of the tint color. Also downscales to the actual
// on-canvas display size right here, once, with high-quality resampling —
// re-resampling a full-res source on every strip, every frame, is what made
// an earlier version of this laggy.
function recolorToDisplaySize(img, topHex, bottomHex, dispW, dispH) {
  const full = createGraphics(img.width, img.height);
  full.image(img, 0, 0);
  full.drawingContext.globalCompositeOperation = 'source-in';
  const g = full.drawingContext.createLinearGradient(0, 0, 0, img.height);
  g.addColorStop(0, topHex);
  g.addColorStop(1, bottomHex);
  full.drawingContext.fillStyle = g;
  full.drawingContext.fillRect(0, 0, img.width, img.height);

  const small = createGraphics(Math.ceil(dispW), Math.ceil(dispH));
  small.drawingContext.imageSmoothingQuality = 'high';
  small.image(full, 0, 0, small.width, small.height);
  full.remove();
  return small;
}

// Bends a recolored reef buffer into horizontal strips, base-anchored, each
// offset by a per-instance sine sway — same rooted/free-tip motion the
// vector-traced kelp uses (drawSwayLoop), just for a raster source instead.
function drawReefInstance(inst) {
  const stripH = inst.buf.height / REEF_STRIPS;
  const dispStripH = inst.h / REEF_STRIPS + 0.6; // slight overlap avoids seam lines
  const effSpeed = REEF_SWAY_SPEED * inst.speedMul;

  for (let i = 0; i < REEF_STRIPS; i++) {
    const t = i / (REEF_STRIPS - 1); // 0 = base, 1 = tip
    const falloff = Math.pow(t, inst.stiffExp);
    const primary = sin(frameCount * effSpeed + t * 1.6 + inst.phase) * REEF_SWAY_AMP * inst.ampMul * falloff;
    const flutter = inst.flutter
      ? sin(frameCount * effSpeed * 2.3 + t * 4.2 + inst.phase) * REEF_SWAY_AMP * inst.ampMul * 0.15 * falloff
      : 0;
    const sway = primary + flutter;

    const srcYFromBottom = inst.buf.height - (i + 1) * stripH;
    const dy = inst.baseY - (i + 1) * dispStripH;

    image(
      inst.buf,
      inst.baseX + sway, dy, inst.w, dispStripH,
      0, srcYFromBottom, inst.buf.width, stripH
    );
  }
}

// Each layer's reef corals draw BEFORE that layer's rock — the rock then
// paints over their base/roots, leaving only the upper body visible above
// its own contour line, and every later (nearer) layer naturally re-occludes
// whatever pokes into its own silhouette too.
function draw() {
  fillGradientRect(0, 0, CANVAS_W, HORIZON_Y, PALETTE.blackPearl[0], PALETTE.blackPearl[2]);
  fillGradientRect(0, HORIZON_Y, CANVAS_W, CANVAS_H - HORIZON_Y, PALETTE.oceanBlue[2], PALETTE.oceanBlue[3]);
  reefBack.forEach(drawReefInstance);
  drawRidge(ridge3rd);
  reefMid.forEach(drawReefInstance);
  drawRidge(ridge2nd);
  reefFront.forEach(drawReefInstance);
  drawRidge(ridge1st);
  kelps.forEach(drawTracedShape);
  // Figma's own back-to-front order: fishing tools, then character, then
  // boat — the boat's near rim sits in front of the character's lower
  // body/legs so they read as sitting inside it, not floating on top.
  const hookX = drawFishingLine();
  drawImgDef(rodImg, ROD_IMG_DEF);
  drawImgDef(hookImg, { x: hookX, y: HOOK_IMG_DEF.y, w: HOOK_IMG_DEF.w, h: HOOK_IMG_DEF.h });
  drawImgDef(bodyImg, BODY_IMG_DEF);
  drawImgDef(headImg, HEAD_IMG_DEF);
  drawImgDef(hand1Img, { x: HAND_DEFS[0].x, y: HAND_DEFS[0].y, w: HAND_DEFS[0].d, h: HAND_DEFS[0].d });
  drawImgDef(hand2Img, { x: HAND_DEFS[1].x, y: HAND_DEFS[1].y, w: HAND_DEFS[1].d, h: HAND_DEFS[1].d });
  updateBlink();
  const openness = eyeOpenness();
  EYE_DEFS.forEach(e => drawEye(e, openness));
  drawImgDef(mouthImg, MOUTH_IMG_DEF);
  drawImgDef(boatImg, BOAT_IMG_DEF);
}

function drawImgDef(img, def) {
  image(img, def.x, def.y, def.w, def.h);
}

function fillGradientRect(x, y, w, h, hexTop, hexBottom) {
  const g = drawingContext.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, hexTop);
  g.addColorStop(1, hexBottom);
  drawingContext.fillStyle = g;
  drawingContext.fillRect(x, y, w, h);
}

// Traced from the real Figma rock layers: height only rises near the two
// frame edges — measured on the real path, the climb from the flat middle to
// full edge height completes within roughly the outer 5-15% of the width, and
// the remaining ~80-90% across the middle sits at a fairly steady low plateau
// rather than curving gradually. A transition spread across half the canvas
// (an earlier version of this function) reads as a mountain slope; a narrow
// edge climb plus a long flat plateau reads as a rock shelf, which is what
// the source data actually shows.
function edgeFactor(x, edgeZonePx) {
  const cx = constrain(x, 0, CANVAS_W);
  const d = Math.min(cx, CANVAS_W - cx);
  const t = constrain(1 - d / edgeZonePx, 0, 1);
  return t * t * (3 - 2 * t); // smoothstep
}

function ridgeEnvelope(x, edgeY, plateauY, edgeZonePx) {
  return lerp(plateauY, edgeY, edgeFactor(x, edgeZonePx));
}

// Loop + randomization = generative (differs every load) while the overall
// silhouette (narrow tall edges, long low plateau) stays recognizable:
// noise() gives correlated jaggedness (a bump leans on its neighbors instead
// of flipping direction every single point, matching the hand-drawn original)
// and irregular step spacing avoids the evenly-spaced-comb look.
function makeRidge(edgeY, plateauY, edgeZoneFrac, floorY, topCss, bottomCss) {
  const edgeZonePx = CANVAS_W * edgeZoneFrac;
  const amp = (plateauY - edgeY) * 0.28;
  const noiseOffset = random(1000);
  const noiseScale = 0.006;
  const points = [];
  let x = -300;
  while (x < CANVAS_W + 300) {
    const base = ridgeEnvelope(x, edgeY, plateauY, edgeZonePx);
    const jag = (noise(x * noiseScale + noiseOffset) - 0.5) * 2 * amp;
    // Rock is underwater — never let a peak, including jag noise, break the
    // surface and poke up into the sky.
    const y = Math.max(base + jag, HORIZON_Y);
    points.push({ x, y });
    x += random(25, 65);
  }
  return { points, floorY, topCss, bottomCss, edgeZonePx, topY: Math.min(...points.map(p => p.y)) };
}

// Interpolates a ridge's contour height at an arbitrary x — used to root
// reef corals to a specific layer's silhouette instead of a flat y-band.
function ridgeYAt(ridge, x) {
  const pts = ridge.points;
  if (x <= pts[0].x) return pts[0].y;
  if (x >= pts[pts.length - 1].x) return pts[pts.length - 1].y;
  for (let i = 0; i < pts.length - 1; i++) {
    if (x >= pts[i].x && x <= pts[i + 1].x) {
      const t = (x - pts[i].x) / (pts[i + 1].x - pts[i].x);
      return lerp(pts[i].y, pts[i + 1].y, t);
    }
  }
  return pts[pts.length - 1].y;
}

// Rounds each interior peak/valley by a small fixed radius so the silhouette
// stays jagged and rocky instead of turning into smooth round hills.
function drawRidge(r) {
  const g = drawingContext.createLinearGradient(0, r.topY, 0, r.floorY);
  g.addColorStop(0, r.topCss);
  g.addColorStop(1, r.bottomCss);
  drawingContext.fillStyle = g;
  const pts = r.points;
  const radius = 12;
  drawingContext.beginPath();
  drawingContext.moveTo(pts[0].x, r.floorY);
  drawingContext.lineTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length - 1; i++) roundedCorner(pts[i - 1], pts[i], pts[i + 1], radius);
  drawingContext.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
  drawingContext.lineTo(pts[pts.length - 1].x, r.floorY);
  drawingContext.closePath();
  drawingContext.fill();
}

function roundedCorner(prev, curr, next, radius) {
  const inLen = Math.hypot(curr.x - prev.x, curr.y - prev.y) || 1;
  const outLen = Math.hypot(next.x - curr.x, next.y - curr.y) || 1;
  const r = Math.min(radius, inLen / 2, outLen / 2);
  const inPt = { x: curr.x - (curr.x - prev.x) / inLen * r, y: curr.y - (curr.y - prev.y) / inLen * r };
  const outPt = { x: curr.x + (next.x - curr.x) / outLen * r, y: curr.y + (next.y - curr.y) / outLen * r };
  drawingContext.lineTo(inPt.x, inPt.y);
  drawingContext.quadraticCurveTo(curr.x, curr.y, outPt.x, outPt.y);
}

// Splits raw SVG path data into closed loops and keeps only each command's
// end point (bezier handles are dropped) — plenty of resolution once traced
// at this point density, and cheap to animate per vertex every frame.
function splitSubpaths(d) {
  return d.match(/M[^Z]*Z/g) || [d];
}

function parseSubpath(d) {
  const cmds = d.match(/[MLHVC][^MLHVCZ]*/g) || [];
  let cx = 0, cy = 0;
  return cmds.map(c => {
    const cmd = c[0];
    const nums = c.slice(1).trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    if (cmd === 'H') cx = nums[0];
    else if (cmd === 'V') cy = nums[0];
    else { cx = nums[nums.length - 2]; cy = nums[nums.length - 1]; }
    return { x: cx, y: cy };
  });
}

function parseShape(rawPaths) {
  const subpaths = [];
  rawPaths.forEach(d => splitSubpaths(d).forEach(sp => subpaths.push(parseSubpath(sp))));
  return subpaths;
}

function makeTracedInstance(def) {
  const sway = def.sway !== false;
  return {
    subpaths: parseShape(def.paths),
    x: def.x, y: def.y, w: def.w, h: def.h, rot: def.rot,
    topHex: def.top, bottomHex: def.bottom, fillRule: def.fillRule || 'nonzero',
    speed: random(0.02, 0.035), amp: sway ? constrain(def.h * 0.03, 1.5, 6) : 0, phase: random(TWO_PI)
  };
}

function drawTracedShape(inst) {
  drawingContext.save();
  drawingContext.translate(inst.x, inst.y);
  if (inst.rot) drawingContext.rotate(inst.rot);
  const g = drawingContext.createLinearGradient(0, 0, 0, inst.h);
  g.addColorStop(0, inst.topHex);
  g.addColorStop(1, inst.bottomHex);
  drawingContext.fillStyle = g;
  inst.subpaths.forEach(sp => drawSwayLoop(sp, inst));
  drawingContext.restore();
}

// Rooted at the base (large local y = seafloor) and free at the tip (small
// local y) — the sway falloff makes each shape read as anchored, not floating.
function drawSwayLoop(points, inst) {
  drawingContext.beginPath();
  points.forEach((p, i) => {
    const falloff = 1 - constrain(p.y / inst.h, 0, 1);
    const sway = sin(frameCount * inst.speed + i * 0.35 + inst.phase) * inst.amp * falloff;
    if (i === 0) drawingContext.moveTo(p.x + sway, p.y);
    else drawingContext.lineTo(p.x + sway, p.y);
  });
  drawingContext.closePath();
  drawingContext.fill(inst.fillRule);
}

function drawGradientEllipse(cx, cy, w, h, topHex, bottomHex) {
  const g = drawingContext.createLinearGradient(0, cy - h / 2, 0, cy + h / 2);
  g.addColorStop(0, topHex);
  g.addColorStop(1, bottomHex);
  drawingContext.fillStyle = g;
  drawingContext.beginPath();
  drawingContext.ellipse(cx, cy, w / 2, h / 2, 0, 0, TWO_PI);
  drawingContext.fill();
}

// Idle blink: closed eyelids read as height 0, so scaling the eye's vertical
// radius down to (almost) nothing and back is enough to sell a real blink —
// no separate eyelid asset needed.
function updateBlink() {
  if (blinking) {
    blinkT += 1 / 8;
    if (blinkT >= 1) { blinking = false; blinkT = 0; blinkTimer = Math.floor(random(90, 260)); }
  } else if (--blinkTimer <= 0) {
    blinking = true;
    blinkT = 0;
  }
}

function eyeOpenness() {
  if (!blinking) return 1;
  return blinkT < 0.5 ? 1 - 2 * blinkT : 2 * (blinkT - 0.5);
}

function drawEye(e, openness) {
  const h = Math.max(e.r * 2 * openness, 1.5);
  drawGradientEllipse(e.x + e.r, e.y + e.r, e.r * 2, h, PALETTE.springGreen[3], PALETTE.pastelBerry[3]);
  if (openness > 0.15) {
    const ph = Math.max(e.pupilR * 2 * openness, 1);
    drawGradientEllipse(e.x + e.r, e.y + e.r, e.pupilR * 2, ph, PALETTE.blackPearl[0], PALETTE.blackPearl[1]);
  }
}

// The line is real geometry (not a traced shape) so a future fishing-game
// mechanic can move the hook end and the line follows automatically. Returns
// the hook's current x so the caller can draw the hook image at the same spot.
function drawFishingLine() {
  const sway = sin(frameCount * 0.02 + hookSwayPhase) * 4;
  const hookX = HOOK_IMG_DEF.x + sway;
  const endX = hookX + HOOK_IMG_DEF.w / 2;
  const endY = HOOK_IMG_DEF.y + 3;
  drawingContext.save();
  drawingContext.strokeStyle = PALETTE.blackPearl[2];
  drawingContext.lineWidth = 1.5;
  drawingContext.beginPath();
  drawingContext.moveTo(LINE_ANCHOR.x, LINE_ANCHOR.y);
  drawingContext.lineTo(endX, endY);
  drawingContext.stroke();
  drawingContext.restore();
  return hookX;
}
