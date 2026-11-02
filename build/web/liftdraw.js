// ME415 Notes: staged exam drawings (the traction lift, the hermetic and scroll compressors), drawn stage by stage as in the exam.
// The canvas holds only the drawing, its labels (which stay once drawn) and the stage line at the bottom;
// the buttons sit below it. Each stage stops when drawn, so the reader can copy it before going on.
// Each drawing is an entry in DRAWINGS; a page shows it with <figure class="liftdraw" data-anim="NAME">.
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var W = 1000, H = 1000;   // a drawing's labels end at its lx (left column) or start at its rx (right)
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function R(x, y, w, h) { return "M" + x + " " + y + "h" + w + "v" + h + "h" + (-w) + "Z"; }
  function C(cx, cy, r) { return "M" + cx + " " + (cy - r) + "a" + r + " " + r + " 0 1 1 0 " + 2 * r + "a" + r + " " + r + " 0 1 1 0 " + (-2 * r); }
  // A label: side "L" (text ends at the left column) or "R" (starts at the right column), its text's baseline y, and the
  // point (ax, ay) its leader points to. o.x puts the text at that x instead of the column, o.room is then the width
  // it may take; side "C" is a caption centred on x, without a leader.
  function L(side, text, y, ax, ay, o) {
    var lb = { side: side, text: text, y: y, ax: ax, ay: ay };
    if (o) { lb.x = o.x; lb.room = o.room; }
    return lb;
  }
  function spring(cx) {                                  // a buffer: base plate, coil, striker plate
    return R(cx - 16, 912, 32, 8) + " M" + cx + " 912l-10 -6l20 -8l-20 -8l20 -8l-10 -6 M" + (cx - 14) + " 876h28";
  }
  function coil(cx, y0, turns) {                         // a vertical coil spring from y0 downwards, 18 px a turn
    var d = "M" + cx + " " + y0 + "l-10 4.5";
    for (var i = 0; i < turns; i++) d += "l20 9l-20 9";
    return d + "l10 4.5";
  }
  var DRAWINGS = {};

  // Each stage is a list of objects; each object is drawn in one go and then gets its labels.
  DRAWINGS.lift = { aria: "Electric traction lift, drawn stage by stage", stages: [
    { title: "Hoistway, machine room and pit", items: [
      { d: R(320, 50, 360, 160) + " M320 222H680", labels: [L("L", "Machine room", 50, 320, 62)] },
      { d: "M340 222V920H660V222 M300 590H340 M300 840H340", labels: [L("R", "Hoistway (lift well)", 760, 660, 760)] },
      { d: "M340 840H660", dash: "10 8", labels: [L("R", "Pit", 865, 650, 868)] }] },
    { title: "Drive sheave, deflector sheave, motor, brake and controller", items: [
      { d: C(510, 135, 40) + " " + C(510, 135, 30) + " " + C(510, 135, 4), labels: [L("R", "Drive sheave", 135, 550, 135)] },
      { d: C(594, 180, 16) + " " + C(594, 180, 3), labels: [L("R", "Deflector sheave", 192, 610, 184)] },
      { d: R(392, 112, 48, 48) + " M398 124h36 M398 136h36 M398 148h36 M440 136h5", labels: [L("L", "Drive motor", 150, 392, 145)] },
      { d: C(455, 135, 10) + " " + R(449, 119, 12, 5) + " " + R(449, 147, 12, 5), labels: [L("L", "Brake", 100, 455, 119)] },
      { d: R(625, 62, 43, 56) + " M632 76h29 M632 90h29 M640 106h14", labels: [L("R", "Controller", 80, 668, 88)] }] },
    { title: "Car, car doors, door operator and counterweight", items: [
      { d: R(404, 420, 132, 12) + " " + R(410, 432, 120, 158), labels: [L("R", "Car (with crosshead)", 470, 530, 480)] },
      { d: "M418 440V585 M424 440V585", labels: [L("L", "Car doors", 485, 421, 495)] },
      { d: R(414, 402, 34, 18), labels: [L("L", "Door operator", 400, 414, 410)] },
      { d: "M410 590V615L418 622", labels: [L("L", "Apron", 625, 412, 612)] },
      { d: R(590, 290, 40, 150) + " M590 315h40 M590 340h40 M590 365h40 M590 390h40 M590 415h40",
        labels: [L("R", "Counterweight", 360, 630, 360)] }] },
    { title: "Hoist ropes", items: [
      { d: "M470 420V135A40 40 0 0 1 537.2 105.6L604.9 168.3A16 16 0 0 1 610 180V290", w: 3,
        labels: [L("R", "Hoist (suspension) ropes", 250, 610, 250)] }] },
    { title: "Car and counterweight guide rails", items: [
      { d: "M398 222V920 M542 222V920", w: 3, labels: [L("R", "Car guide rails", 300, 542, 330)] },
      { d: "M582 222V920 M638 222V920", labels: [L("R", "Counterweight guide rails", 415, 638, 420)] }] },
    { title: "Overspeed governor, governor rope, tension sheave and safety gear", items: [
      { d: C(360, 180, 14) + " " + C(360, 180, 3) + " " + R(352, 194, 16, 16), labels: [L("L", "Overspeed governor", 190, 346, 182)] },
      { d: "M346 180V880 M374 180V880", labels: [L("L", "Governor rope", 270, 346, 270)] },
      { d: C(360, 880, 14) + " M360 894V905 " + R(352, 905, 16, 10), labels: [L("L", "Governor tension sheave", 870, 346, 880)] },
      { d: "M400 588H412V606H404Z M540 588H528V606H536Z M374 597H400", labels: [L("R", "Safety gear", 600, 538, 597)] }] },
    { title: "Landing door, indicator and push-button, limit switches, travelling cable", items: [
      { d: R(336, 480, 8, 110) + " M340 480V590", w: 3, labels: [L("L", "Landing door", 565, 340, 560)] },
      { d: R(306, 452, 28, 14), labels: [L("L", "Landing indicator", 440, 312, 459)] },
      { d: C(320, 525, 6), labels: [L("L", "Landing push-button", 525, 314, 525)] },
      { d: R(544, 250, 12, 16) + " " + R(544, 814, 12, 16), labels: [L("R", "Limit switches", 820, 556, 822)] },
      { d: "M500 590V720C500 770 560 770 560 720V520H660", labels: [L("R", "Travelling cable", 680, 560, 690)] }] },
    { title: "Car buffer and counterweight buffer in the pit", items: [
      { d: spring(470), labels: [L("L", "Car buffer", 945, 460, 908)] },
      { d: spring(610), labels: [L("R", "Counterweight buffer", 910, 622, 896)] }] }
  ] };

  // The hermetic reciprocating compressor in section (as Fig. 3 of Module 4, flattened for the exam):
  // shell 320-680 wide with domed ends, the motor in the upper half on a vertical crankshaft, the horizontal
  // cylinder below it, the oil sump in the bottom dome.
  DRAWINGS.hermetic = { aria: "Hermetic reciprocating compressor, drawn stage by stage", lx: 280, rx: 720, top: 140, h: 860, stages: [
    { title: "Welded steel shell, weld seam and mounting feet", items: [
      { d: "M320 280V740A180 100 0 0 0 680 740V280A180 120 0 0 0 320 280Z", w: 3,
        labels: [L("R", "Welded steel shell", 200, 640, 205)] },
      { d: "M308 520H332 M668 520H692", w: 3, labels: [L("L", "Weld seam", 520, 308, 520)] },
      { d: "M380 815L360 868H420L410 827 M620 815L640 868H580L590 827 " + R(366, 868, 48, 10) + " " + R(586, 868, 48, 10),
        labels: [L("R", "Mounting feet", 870, 634, 862)] }] },
    { title: "Motor: stator and winding, rotor on the vertical crankshaft, terminal box", items: [
      { d: R(385, 270, 75, 130) + " " + R(540, 270, 75, 130), labels: [L("L", "Stator", 330, 385, 335)] },
      { d: "M390 270a32 14 0 0 1 64 0 M546 270a32 14 0 0 1 64 0 M390 400a32 14 0 0 0 64 0 M546 400a32 14 0 0 0 64 0",
        labels: [L("R", "Motor winding", 262, 604, 264)] },
      { d: R(468, 280, 64, 110) + " M468 302H532 M468 324H532 M468 346H532 M468 368H532",
        labels: [L("R", "Rotor", 370, 532, 372)] },
      { d: "M494 236V790 M506 236V790", labels: [L("R", "Vertical crankshaft", 720, 506, 700)] },
      { d: R(680, 440, 24, 56) + " M686 452h12 M686 468h12 M686 484h12 M612 404C640 420 660 460 680 468",
        labels: [L("R", "Terminal box", 475, 704, 470)] }] },
    { title: "Compressor: frame and bearing, springs, cylinder, piston, connecting rod, eccentric", items: [
      { d: R(350, 420, 300, 20) + " " + R(478, 440, 44, 46), labels: [L("R", "Frame and main bearing", 425, 650, 430)] },
      { d: coil(368, 440, 4) + " " + coil(632, 440, 4) + " M320 518H386 M680 518H614", labels: [L("L", "Suspension springs", 470, 358, 470)] },
      { d: "M372 556H480V624H372 M440 556V440", labels: [L("R", "Cylinder", 660, 480, 620)] },
      { d: R(420, 566, 32, 48), labels: [L("L", "Piston", 650, 436, 614)] },
      { d: "M452 584H488 M452 596H488", labels: [L("R", "Connecting rod", 620, 470, 596)] },
      { d: R(486, 574, 34, 32), labels: [L("R", "Eccentric (crank)", 570, 520, 584)] }] },
    { title: "Valve plate with suction and discharge reed valves, cylinder head", items: [
      { d: R(364, 552, 8, 76) + " M372 570l14 7 M364 610l-14 7", labels: [L("L", "Valve plate, reed valves", 610, 368, 600)] },
      { d: "M364 546H334V634H364 M334 590H364", labels: [L("L", "Cylinder head", 565, 334, 560)] }] },
    { title: "Suction: the gas enters the shell and cools the motor on its way to the cylinder", items: [
      { d: "M705 316H680 M705 334H680", w: 3, labels: [L("R", "Suction inlet", 325, 705, 325)] },
      { d: "M676 325C630 325 620 232 500 228C390 226 340 260 340 330V530", dash: "10 8",
        labels: [L("L", "Suction gas cools motor", 220, 420, 233)] },
      { d: "M332 522l8 14l8 -14", labels: [] }] },
    { title: "Discharge: muffler and discharge line out through the shell", items: [
      { d: "M349 634V648 " + R(334, 648, 40, 40) + " M334 668H374", labels: [L("L", "Discharge muffler", 690, 334, 676)] },
      { d: "M354 688V712H320 M320 704H292 M320 720H292", labels: [L("L", "Discharge connection", 735, 296, 716)] }] },
    { title: "Oil sump, oil pick-up, sight glass and crankcase heater", items: [
      { d: "M326 760H674", dash: "12 8", labels: [L("R", "Oil sump (oil level)", 770, 650, 760)] },
      { d: "M494 790L486 812H514L506 790", labels: [L("R", "Oil pick-up", 815, 514, 806)] },
      { d: C(440, 830, 9) + " " + C(440, 830, 4), labels: [L("L", "Oil sight glass", 850, 432, 832)] },
      { d: R(308, 744, 10, 26) + " M308 752h10 M308 762h10", labels: [L("L", "Crankcase heater", 790, 310, 768)] }] }
  ] };

  // The scroll compressor, four positions in sequence (Hundy Fig. 4.25): the fixed scroll is an involute spiral; the
  // orbiting scroll is the same spiral turned half a turn and shifted by the orbit (crank) radius, so it touches the
  // fixed one along a line of contact points. One pocket is shaded: open at the rim, sealed, smaller, at the centre.
  // The spiral and pocket paths are computed (study_guide .work/scroll); the twin pocket opposite it is left blank.
  DRAWINGS.scroll = { aria: "Scroll compressor, four positions, drawn stage by stage", lx: 135, rx: 865, top: 90, h: 790, keep: true, stages: [
    { title: "Position 1: housing, discharge port and the fixed scroll (a spiral from the centre out)", items: [
      { d: C(270, 235, 125), labels: [L("L", "Housing", 130, 182, 147)] },
      { d: C(270, 235, 6), labels: [L("R", "Discharge port", 245, 276, 235, { x: 412, room: 180 })] },
      { d: "M280.2 241.8 280.1 243.0 279.9 244.3 279.4 245.6 278.8 246.9 278.1 248.2 277.1 249.5 276.0 250.7 274.6 251.8 273.1 252.9 271.4 253.8 269.5 254.5 267.5 255.0 265.3 255.3 263.1 255.4 260.7 255.2 258.4 254.8 256.0 254.0 253.6 253.0 251.3 251.7 249.1 250.0 247.0 248.1 245.1 245.9 243.5 243.5 242.0 240.8 240.9 237.8 240.0 234.7 239.5 231.4 239.4 228.1 239.6 224.6 240.3 221.1 241.3 217.6 242.8 214.2 244.6 210.9 246.9 207.8 249.6 204.9 252.6 202.2 256.0 199.9 259.7 197.9 263.7 196.3 267.9 195.1 272.3 194.4 276.8 194.2 281.4 194.4 286.0 195.3 290.6 196.6 295.0 198.5 299.3 200.9 303.4 203.8 307.2 207.2 310.6 211.1 313.6 215.4 316.2 220.0 318.3 225.0 319.8 230.3 320.7 235.8 321.1 241.5 320.7 247.2 319.8 252.9 318.1 258.6 315.9 264.1 313.0 269.5 309.4 274.5 305.3 279.1 300.6 283.4 295.4 287.1 289.8 290.2 283.7 292.8 277.4 294.7 270.8 295.8 264.0 296.3 257.1 295.9 250.3 294.8 243.5 292.9 236.9 290.3 230.6 286.9 224.6 282.7 219.0 277.9 214.0 272.4 209.6 266.3 205.8 259.7 202.8 252.7 200.5 245.2 199.1 237.5 198.5 229.6 198.9 221.6 200.1 213.6 202.2 205.7 205.2 198.1 209.1 190.7 213.9 183.7 219.4 177.3 225.7 171.5 232.7 166.3 240.2 161.9 248.3 158.4 256.8 155.8 265.6 154.1 274.6 153.3 283.8 153.6 292.9 155.0 301.9 157.3 310.6 160.7 319.0 165.1 327.0 170.4 334.3 176.6 341.0 183.7 346.8 191.5 351.9 200.0 355.9 209.1 359.0 218.6 361.0 228.5 361.8 238.7 361.6 249.0 360.2 259.2 357.6 269.3 353.9 279.2 349.1 288.6 343.2 297.5 336.3 305.8 328.5 313.3", labels: [L("L", "Fixed scroll", 250, 199, 230)] }] },
    { title: "The orbiting scroll: the same spiral turned half a turn, shifted by the crank radius", items: [
      { d: "M244.1 241.3 244.2 240.1 244.5 238.8 244.9 237.5 245.5 236.2 246.3 234.9 247.2 233.6 248.4 232.4 249.7 231.2 251.3 230.2 253.0 229.3 254.8 228.6 256.9 228.1 259.0 227.7 261.3 227.7 263.6 227.9 266.0 228.3 268.4 229.0 270.7 230.1 273.0 231.4 275.2 233.0 277.3 235.0 279.2 237.2 280.9 239.6 282.3 242.3 283.5 245.3 284.3 248.4 284.8 251.6 285.0 255.0 284.7 258.5 284.1 262.0 283.0 265.5 281.5 268.9 279.7 272.2 277.4 275.3 274.7 278.2 271.7 280.9 268.3 283.2 264.6 285.2 260.6 286.8 256.4 288.0 252.1 288.7 247.5 288.9 243.0 288.6 238.3 287.8 233.8 286.5 229.3 284.6 225.0 282.2 220.9 279.3 217.1 275.9 213.7 272.0 210.7 267.7 208.1 263.0 206.0 258.0 204.5 252.8 203.6 247.3 203.3 241.6 203.6 235.9 204.6 230.2 206.2 224.5 208.5 218.9 211.4 213.6 214.9 208.6 219.0 204.0 223.7 199.7 228.9 196.0 234.6 192.9 240.6 190.3 246.9 188.4 253.5 187.3 260.3 186.8 267.2 187.2 274.1 188.3 280.8 190.1 287.4 192.8 293.8 196.2 299.7 200.4 305.3 205.2 310.3 210.7 314.7 216.8 318.5 223.4 321.5 230.4 323.8 237.9 325.2 245.6 325.8 253.5 325.5 261.5 324.2 269.5 322.1 277.4 319.1 285.0 315.2 292.4 310.4 299.3 304.9 305.8 298.6 311.6 291.7 316.8 284.1 321.1 276.0 324.7 267.6 327.3 258.7 329.0 249.7 329.7 240.6 329.4 231.4 328.1 222.4 325.8 213.7 322.4 205.3 318.0 197.4 312.7 190.0 306.5 183.4 299.4 177.5 291.6 172.5 283.1 168.4 274.0 165.3 264.5 163.4 254.5 162.5 244.4 162.7 234.1 164.2 223.9 166.7 213.7 170.4 203.9 175.2 194.5 181.1 185.5 188.0 177.3 195.9 169.8", w: 4, labels: [L("R", "Orbiting scroll", 185, 326, 253, { x: 412, room: 180 })] },
      { d: "M270 235L254.3 248.1" + " " + C(254.3, 248.1, 3), labels: [L("R", "Orbit radius", 290, 254, 248, { x: 412, room: 180 })] },
      { d: C(309.9, 210.2, 3.5) + " " + C(214.4, 272.9, 3.5), labels: [L("R", "Contact points", 340, 310, 210, { x: 412, room: 180 })] }] },
    { title: "1 Suction: the outer pocket is open at the rim and fills with gas", items: [
      { d: "M214.4 272.9 209.6 266.4 205.6 259.2 202.4 251.6 200.1 243.5 198.8 235.1 198.6 226.5 199.3 217.9 201.1 209.3 204.0 200.9 207.9 192.8 212.8 185.2 218.6 178.2 225.3 171.8 232.8 166.2 241.0 161.6 249.8 157.9 259.0 155.2 268.6 153.7 278.4 153.3 288.3 154.2 298.1 156.2 307.6 159.4 316.8 163.8 325.5 169.3 333.5 175.9 340.8 183.4 347.1 191.9 352.4 201.1 356.6 211.0 359.7 221.4 361.4 232.2 361.9 243.3 361.0 254.4 358.8 265.4 355.2 276.1 350.3 286.4 344.2 296.2 336.9 305.2 328.5 313.3 214.5 272.9 211.1 268.4 208.3 263.4 206.0 258.0 204.4 252.2 203.5 246.3 203.3 240.1 203.8 233.9 205.2 227.7 207.3 221.7 210.1 215.8 213.7 210.2 218.0 205.1 222.9 200.4 228.5 196.3 234.5 192.9 241.1 190.1 248.0 188.2 255.2 187.1 262.6 186.8 270.0 187.5 277.4 189.1 284.6 191.6 291.6 195.0 298.2 199.2 304.3 204.3 309.8 210.1 314.7 216.7 318.7 223.8 321.9 231.5 324.2 239.6 325.5 248.0 325.8 256.6 325.0 265.3 323.2 273.9 320.3 282.3 316.4 290.4 311.4 298.0 305.6 305.1 298.8 311.4 291.3 317.0 283.1 321.7 274.2 325.3 265.0 327.9 255.3 329.4 245.5 329.7 235.6 328.9 225.8 326.8 216.2 323.5 207.0 319.0 198.4 313.4 190.3 306.8 183.1 299.1Z", fill: true, labels: [L("L", "Suction gas", 335, 274, 299),
        L("C", "1  Suction: pocket open at the rim", 400, 270, 0, { x: 270, room: 440 })] }] },
    { title: "2 The crank turns on: the orbiting scroll seals the pocket off", items: [
      { d: C(730, 235, 125) + " " + C(730, 235, 6) + " " + "M740.2 241.8 740.1 243.0 739.9 244.3 739.4 245.6 738.8 246.9 738.1 248.2 737.1 249.5 736.0 250.7 734.6 251.8 733.1 252.9 731.4 253.8 729.5 254.5 727.5 255.0 725.3 255.3 723.1 255.4 720.7 255.2 718.4 254.8 716.0 254.0 713.6 253.0 711.3 251.7 709.1 250.0 707.0 248.1 705.1 245.9 703.5 243.5 702.0 240.8 700.9 237.8 700.0 234.7 699.5 231.4 699.4 228.1 699.6 224.6 700.3 221.1 701.3 217.6 702.8 214.2 704.6 210.9 706.9 207.8 709.6 204.9 712.6 202.2 716.0 199.9 719.7 197.9 723.7 196.3 727.9 195.1 732.3 194.4 736.8 194.2 741.4 194.4 746.0 195.3 750.6 196.6 755.0 198.5 759.3 200.9 763.4 203.8 767.2 207.2 770.6 211.1 773.6 215.4 776.2 220.0 778.3 225.0 779.8 230.3 780.7 235.8 781.1 241.5 780.7 247.2 779.8 252.9 778.1 258.6 775.9 264.1 773.0 269.5 769.4 274.5 765.3 279.1 760.6 283.4 755.4 287.1 749.8 290.2 743.7 292.8 737.4 294.7 730.8 295.8 724.0 296.3 717.1 295.9 710.3 294.8 703.5 292.9 696.9 290.3 690.6 286.9 684.6 282.7 679.0 277.9 674.0 272.4 669.6 266.3 665.8 259.7 662.8 252.7 660.5 245.2 659.1 237.5 658.5 229.6 658.9 221.6 660.1 213.6 662.2 205.7 665.2 198.1 669.1 190.7 673.9 183.7 679.4 177.3 685.7 171.5 692.7 166.3 700.2 161.9 708.3 158.4 716.8 155.8 725.6 154.1 734.6 153.3 743.8 153.6 752.9 155.0 761.9 157.3 770.6 160.7 779.0 165.1 787.0 170.4 794.3 176.6 801.0 183.7 806.8 191.5 811.9 200.0 815.9 209.1 819.0 218.6 821.0 228.5 821.8 238.7 821.6 249.0 820.2 259.2 817.6 269.3 813.9 279.2 809.1 288.6 803.2 297.5 796.3 305.8 788.5 313.3", labels: [] },
      { d: "M733.1 243.7 733.2 242.5 733.4 241.3 733.8 240.0 734.4 238.6 735.2 237.3 736.2 236.0 737.3 234.8 738.7 233.7 740.2 232.6 741.9 231.7 743.8 231.0 745.8 230.5 748.0 230.2 750.2 230.1 752.6 230.3 754.9 230.7 757.3 231.5 759.7 232.5 762.0 233.8 764.2 235.5 766.2 237.4 768.1 239.6 769.8 242.1 771.3 244.8 772.4 247.7 773.3 250.8 773.8 254.1 773.9 257.5 773.7 260.9 773.0 264.4 772.0 267.9 770.5 271.3 768.6 274.6 766.4 277.7 763.7 280.6 760.6 283.3 757.3 285.7 753.6 287.6 749.6 289.2 745.4 290.4 741.0 291.1 736.5 291.4 731.9 291.1 727.3 290.3 722.7 288.9 718.3 287.0 714.0 284.6 709.9 281.7 706.1 278.3 702.7 274.4 699.6 270.1 697.1 265.5 695.0 260.5 693.5 255.2 692.5 249.7 692.2 244.0 692.5 238.3 693.5 232.6 695.1 226.9 697.4 221.4 700.3 216.1 703.9 211.0 708.0 206.4 712.7 202.2 717.9 198.4 723.5 195.3 729.5 192.7 735.9 190.9 742.5 189.7 749.3 189.3 756.1 189.6 763.0 190.7 769.8 192.6 776.4 195.2 782.7 198.6 788.7 202.8 794.2 207.6 799.3 213.1 803.7 219.2 807.5 225.8 810.5 232.9 812.7 240.3 814.2 248.0 814.7 255.9 814.4 263.9 813.2 271.9 811.1 279.8 808.0 287.5 804.1 294.8 799.4 301.8 793.9 308.2 787.6 314.0 780.6 319.2 773.1 323.6 765.0 327.1 756.5 329.8 747.7 331.5 738.7 332.2 729.5 331.9 720.4 330.5 711.4 328.2 702.6 324.8 694.2 320.4 686.3 315.1 679.0 308.9 672.3 301.8 666.4 294.0 661.4 285.5 657.4 276.4 654.3 266.9 652.3 257.0 651.4 246.8 651.7 236.5 653.1 226.3 655.7 216.2 659.4 206.3 664.2 196.9 670.1 188.0 677.0 179.7 684.8 172.2" + " " + "M730 235L743.3 250.5" + " " + C(743.3, 250.5, 3), w: 4, labels: [] },
      { d: C(711.4, 203.2, 3.5) + " " + C(761.9, 282.3, 3.5) + " " + C(684.8, 172.2, 3.5) + " " + C(788.5, 313.3, 3.5), labels: [] },
      { d: "M761.9 282.3 756.4 286.4 750.4 289.9 743.9 292.7 737.0 294.7 729.8 295.9 722.5 296.3 715.0 295.7 707.6 294.2 700.4 291.8 693.3 288.5 686.7 284.3 680.6 279.3 675.0 273.5 670.1 267.1 665.9 260.0 662.7 252.3 660.3 244.3 658.9 235.9 658.5 227.3 659.2 218.6 660.9 210.0 663.7 201.6 667.6 193.5 672.4 185.8 678.2 178.7 684.8 172.2 692.3 166.6 700.4 161.8 709.2 158.1 718.5 155.3 728.1 153.8 737.9 153.3 747.8 154.1 757.6 156.1 767.2 159.2 776.4 163.6 785.2 169.1 793.2 175.6 800.5 183.2 806.9 191.6 812.3 200.9 816.6 210.8 819.6 221.2 821.4 232.0 821.9 243.1 821.0 254.2 818.8 265.2 815.2 276.0 810.4 286.3 804.2 296.1 796.9 305.1 788.5 313.3 788.5 313.3 795.2 306.8 800.9 299.7 805.8 292.0 809.6 283.9 812.4 275.5 814.1 266.8 814.7 258.2 814.4 249.6 813.0 241.2 810.6 233.1 807.3 225.5 803.2 218.4 798.3 211.9 792.7 206.2 786.5 201.2 779.9 197.0 772.9 193.7 765.6 191.3 758.2 189.8 750.8 189.3 743.4 189.6 736.3 190.8 729.4 192.8 722.9 195.6 716.8 199.1 711.3 203.3 706.5 208.0 702.2 213.2 698.7 218.8 696.0 224.7 694.0 230.8 692.7 237.0 692.2 243.2 692.5 249.3 693.5 255.2 695.2 260.9 697.5 266.3 700.4 271.3 703.8 275.8 707.6 279.8 711.9 283.2 716.4 286.1 721.2 288.3 726.1 290.0 731.1 291.0 736.1 291.3 741.0 291.1 745.7 290.3 750.2 289.0 754.5 287.2 758.4 284.9 761.9 282.3Z", fill: true, labels: [L("C", "2  Pocket sealed off", 400, 730, 0, { x: 730, room: 440 })] }] },
    { title: "3 Compression: the pocket moves inward and becomes smaller", items: [
      { d: C(270, 600, 125) + " " + C(270, 600, 6) + " " + "M280.2 606.8 280.1 608.0 279.9 609.3 279.4 610.6 278.8 611.9 278.1 613.2 277.1 614.5 276.0 615.7 274.6 616.8 273.1 617.9 271.4 618.8 269.5 619.5 267.5 620.0 265.3 620.3 263.1 620.4 260.7 620.2 258.4 619.8 256.0 619.0 253.6 618.0 251.3 616.7 249.1 615.0 247.0 613.1 245.1 610.9 243.5 608.5 242.0 605.8 240.9 602.8 240.0 599.7 239.5 596.4 239.4 593.1 239.6 589.6 240.3 586.1 241.3 582.6 242.8 579.2 244.6 575.9 246.9 572.8 249.6 569.9 252.6 567.2 256.0 564.9 259.7 562.9 263.7 561.3 267.9 560.1 272.3 559.4 276.8 559.2 281.4 559.4 286.0 560.3 290.6 561.6 295.0 563.5 299.3 565.9 303.4 568.8 307.2 572.2 310.6 576.1 313.6 580.4 316.2 585.0 318.3 590.0 319.8 595.3 320.7 600.8 321.1 606.5 320.7 612.2 319.8 617.9 318.1 623.6 315.9 629.1 313.0 634.5 309.4 639.5 305.3 644.1 300.6 648.4 295.4 652.1 289.8 655.2 283.7 657.8 277.4 659.7 270.8 660.8 264.0 661.3 257.1 660.9 250.3 659.8 243.5 657.9 236.9 655.3 230.6 651.9 224.6 647.7 219.0 642.9 214.0 637.4 209.6 631.3 205.8 624.7 202.8 617.7 200.5 610.2 199.1 602.5 198.5 594.6 198.9 586.6 200.1 578.6 202.2 570.7 205.2 563.1 209.1 555.7 213.9 548.7 219.4 542.3 225.7 536.5 232.7 531.3 240.2 526.9 248.3 523.4 256.8 520.8 265.6 519.1 274.6 518.3 283.8 518.6 292.9 520.0 301.9 522.3 310.6 525.7 319.0 530.1 327.0 535.4 334.3 541.6 341.0 548.7 346.8 556.5 351.9 565.0 355.9 574.1 359.0 583.6 361.0 593.5 361.8 603.7 361.6 614.0 360.2 624.2 357.6 634.3 353.9 644.2 349.1 653.6 343.2 662.5 336.3 670.8 328.5 678.3", labels: [] },
      { d: "M239.7 589.4 239.8 588.2 240.1 586.9 240.5 585.6 241.1 584.3 241.9 583.0 242.8 581.7 244.0 580.5 245.3 579.3 246.9 578.3 248.6 577.4 250.5 576.7 252.5 576.2 254.6 575.9 256.9 575.8 259.2 576.0 261.6 576.4 264.0 577.2 266.3 578.2 268.6 579.5 270.8 581.1 272.9 583.1 274.8 585.3 276.5 587.7 277.9 590.4 279.1 593.4 279.9 596.5 280.4 599.7 280.6 603.1 280.3 606.6 279.7 610.1 278.6 613.6 277.2 617.0 275.3 620.3 273.0 623.4 270.3 626.3 267.3 629.0 263.9 631.3 260.2 633.3 256.3 634.9 252.1 636.1 247.7 636.8 243.2 637.0 238.6 636.7 234.0 635.9 229.4 634.6 224.9 632.7 220.6 630.3 216.5 627.4 212.8 624.0 209.3 620.1 206.3 615.8 203.7 611.2 201.7 606.2 200.1 600.9 199.2 595.4 198.9 589.7 199.2 584.0 200.2 578.3 201.8 572.6 204.1 567.1 207.0 561.7 210.5 556.7 214.7 552.1 219.3 547.8 224.5 544.1 230.2 541.0 236.2 538.4 242.6 536.5 249.2 535.4 255.9 534.9 262.8 535.3 269.7 536.4 276.4 538.2 283.0 540.9 289.4 544.3 295.4 548.5 300.9 553.3 305.9 558.8 310.4 564.9 314.1 571.5 317.2 578.5 319.4 586.0 320.8 593.7 321.4 601.6 321.1 609.6 319.9 617.6 317.7 625.5 314.7 633.1 310.8 640.5 306.1 647.4 300.5 653.9 294.2 659.7 287.3 664.9 279.7 669.2 271.7 672.8 263.2 675.4 254.3 677.1 245.3 677.9 236.2 677.6 227.1 676.2 218.1 673.9 209.3 670.5 200.9 666.1 193.0 660.8 185.6 654.6 179.0 647.5 173.1 639.7 168.1 631.2 164.0 622.1 161.0 612.6 159.0 602.6 158.1 592.5 158.4 582.2 159.8 572.0 162.3 561.8 166.0 552.0 170.9 542.6 176.7 533.7 183.6 525.4 191.5 517.9" + " " + "M270 600L249.9 596.2" + " " + C(249.9, 596.2, 3), w: 4, labels: [] },
      { d: C(280.0, 608.5, 3.5) + " " + C(239.9, 587.7, 3.5) + " " + C(320.1, 616.1, 3.5) + " " + C(199.8, 580.1, 3.5), labels: [] },
      { d: "M239.9 587.7 240.9 583.9 242.3 580.2 244.2 576.6 246.6 573.2 249.5 570.0 252.8 567.1 256.5 564.6 260.5 562.5 264.9 560.9 269.5 559.8 274.3 559.2 279.2 559.3 284.2 559.9 289.2 561.1 294.1 563.0 298.8 565.5 303.2 568.6 307.3 572.3 311.0 576.5 314.2 581.2 316.8 586.4 318.9 591.9 320.3 597.7 321.0 603.8 320.9 609.9 320.1 616.1 318.6 622.3 316.3 628.3 313.2 634.1 309.4 639.5 304.9 644.6 299.7 649.1 294.0 653.0 287.7 656.2 281.1 658.7 274.1 660.3 266.8 661.2 259.4 661.1 252.0 660.2 244.6 658.3 237.4 655.5 230.6 651.9 224.1 647.4 218.2 642.0 212.9 636.0 208.3 629.2 204.5 621.9 201.6 614.1 199.6 605.8 198.6 597.4 198.7 588.7 199.8 580.1 199.8 580.0 199.0 586.2 199.0 592.4 199.6 598.4 201.0 604.3 203.1 609.8 205.7 614.9 208.9 619.6 212.6 623.9 216.7 627.5 221.2 630.6 225.8 633.1 230.7 635.0 235.7 636.3 240.7 636.9 245.6 637.0 250.4 636.4 255.1 635.3 259.4 633.7 263.5 631.6 267.2 629.1 270.4 626.2 273.3 623.0 275.7 619.6 277.6 616.0 279.1 612.3 280.0 608.5 280.5 604.7 280.5 601.0 280.1 597.5 279.3 594.0 278.1 590.8 276.6 587.9 274.8 585.2 272.7 582.8 270.4 580.8 268.0 579.1 265.5 577.8 262.9 576.8 260.4 576.1 257.8 575.8 255.3 575.8 253.0 576.1 250.8 576.6 248.7 577.4 246.8 578.3 245.2 579.5 243.8 580.7 242.6 582.0 241.6 583.5 240.8 584.9 240.3 586.3 239.9 587.7Z", fill: true, labels: [L("C", "3  Pocket moves in and shrinks", 765, 270, 0, { x: 270, room: 440 })] }] },
    { title: "4 Discharge: the pocket reaches the centre and opens to the discharge port", items: [
      { d: C(730, 600, 125) + " " + C(730, 600, 6) + " " + "M740.2 606.8 740.1 608.0 739.9 609.3 739.4 610.6 738.8 611.9 738.1 613.2 737.1 614.5 736.0 615.7 734.6 616.8 733.1 617.9 731.4 618.8 729.5 619.5 727.5 620.0 725.3 620.3 723.1 620.4 720.7 620.2 718.4 619.8 716.0 619.0 713.6 618.0 711.3 616.7 709.1 615.0 707.0 613.1 705.1 610.9 703.5 608.5 702.0 605.8 700.9 602.8 700.0 599.7 699.5 596.4 699.4 593.1 699.6 589.6 700.3 586.1 701.3 582.6 702.8 579.2 704.6 575.9 706.9 572.8 709.6 569.9 712.6 567.2 716.0 564.9 719.7 562.9 723.7 561.3 727.9 560.1 732.3 559.4 736.8 559.2 741.4 559.4 746.0 560.3 750.6 561.6 755.0 563.5 759.3 565.9 763.4 568.8 767.2 572.2 770.6 576.1 773.6 580.4 776.2 585.0 778.3 590.0 779.8 595.3 780.7 600.8 781.1 606.5 780.7 612.2 779.8 617.9 778.1 623.6 775.9 629.1 773.0 634.5 769.4 639.5 765.3 644.1 760.6 648.4 755.4 652.1 749.8 655.2 743.7 657.8 737.4 659.7 730.8 660.8 724.0 661.3 717.1 660.9 710.3 659.8 703.5 657.9 696.9 655.3 690.6 651.9 684.6 647.7 679.0 642.9 674.0 637.4 669.6 631.3 665.8 624.7 662.8 617.7 660.5 610.2 659.1 602.5 658.5 594.6 658.9 586.6 660.1 578.6 662.2 570.7 665.2 563.1 669.1 555.7 673.9 548.7 679.4 542.3 685.7 536.5 692.7 531.3 700.2 526.9 708.3 523.4 716.8 520.8 725.6 519.1 734.6 518.3 743.8 518.6 752.9 520.0 761.9 522.3 770.6 525.7 779.0 530.1 787.0 535.4 794.3 541.6 801.0 548.7 806.8 556.5 811.9 565.0 815.9 574.1 819.0 583.6 821.0 593.5 821.8 603.7 821.6 614.0 820.2 624.2 817.6 634.3 813.9 644.2 809.1 653.6 803.2 662.5 796.3 670.8 788.5 678.3", labels: [] },
      { d: "M737.0 582.2 737.1 581.0 737.3 579.7 737.7 578.4 738.3 577.1 739.1 575.8 740.1 574.5 741.2 573.3 742.6 572.1 744.1 571.1 745.8 570.2 747.7 569.5 749.7 568.9 751.9 568.6 754.1 568.6 756.5 568.7 758.8 569.2 761.2 569.9 763.6 571.0 765.9 572.3 768.1 573.9 770.2 575.8 772.0 578.0 773.7 580.5 775.2 583.2 776.3 586.1 777.2 589.3 777.7 592.5 777.8 595.9 777.6 599.4 776.9 602.9 775.9 606.3 774.4 609.7 772.5 613.0 770.3 616.2 767.6 619.1 764.5 621.8 761.2 624.1 757.5 626.1 753.5 627.7 749.3 628.9 744.9 629.6 740.4 629.8 735.8 629.5 731.2 628.7 726.6 627.4 722.2 625.5 717.9 623.1 713.8 620.2 710.0 616.8 706.6 612.9 703.5 608.6 701.0 603.9 698.9 598.9 697.4 593.6 696.5 588.1 696.1 582.5 696.4 576.8 697.4 571.0 699.0 565.4 701.3 559.8 704.2 554.5 707.8 549.5 711.9 544.8 716.6 540.6 721.8 536.9 727.4 533.7 733.4 531.2 739.8 529.3 746.4 528.1 753.2 527.7 760.1 528.0 766.9 529.1 773.7 531.0 780.3 533.7 786.6 537.1 792.6 541.2 798.1 546.1 803.2 551.6 807.6 557.6 811.4 564.3 814.4 571.3 816.7 578.7 818.1 586.4 818.6 594.4 818.3 602.4 817.1 610.3 815.0 618.2 811.9 625.9 808.0 633.3 803.3 640.2 797.8 646.7 791.5 652.5 784.5 657.6 777.0 662.0 768.9 665.6 760.4 668.2 751.6 669.9 742.6 670.6 733.4 670.3 724.3 669.0 715.3 666.6 706.5 663.3 698.2 658.9 690.2 653.6 682.9 647.4 676.2 640.3 670.3 632.5 665.3 624.0 661.3 614.9 658.2 605.3 656.2 595.4 655.3 585.3 655.6 575.0 657.0 564.7 659.6 554.6 663.3 544.8 668.1 535.3 674.0 526.4 680.9 518.2 688.7 510.7" + " " + "M730 600L747.2 589.0" + " " + C(747.2, 589.0, 3), w: 4, labels: [] },
      { d: C(703.8, 609.1, 3.5) + " " + C(773.3, 579.9, 3.5) + " " + C(669.5, 631.1, 3.5) + " " + C(807.7, 557.8, 3.5), labels: [] },
      { d: "M740.2 606.8 740.1 608.1 739.8 609.5 739.3 610.9 738.6 612.3 737.7 613.7 736.6 615.1 735.2 616.4 733.6 617.5 731.8 618.6 729.8 619.4 727.6 620.0 725.3 620.3 722.9 620.4 720.3 620.2 717.8 619.6 715.2 618.7 712.7 617.5 710.2 615.9 707.9 614.0 705.8 611.7 703.9 609.1 702.3 606.3 701.0 603.1 700.0 599.8 699.5 596.2 699.4 592.5 699.7 588.8 700.6 585.0 701.9 581.2 703.6 577.6 705.9 574.1 708.6 570.9 711.8 567.9 715.4 565.3 719.3 563.0 723.6 561.3 728.2 560.0 732.9 559.3 737.8 559.2 742.8 559.6 747.8 560.7 752.7 562.4 757.5 564.8 762.0 567.7 766.2 571.2 770.0 575.3 773.3 579.9 773.4 579.9 771.5 577.3 769.3 575.0 767.0 573.1 764.6 571.5 762.0 570.3 759.5 569.4 756.9 568.8 754.3 568.6 751.9 568.6 749.6 569.0 747.4 569.6 745.4 570.4 743.6 571.4 742.0 572.6 740.6 573.9 739.5 575.2 738.6 576.7 737.9 578.1 737.4 579.5 737.1 580.9 737.0 582.2Z", fill: true, labels: [L("C", "4  At the centre: discharge", 765, 730, 0, { x: 730, room: 440 })] }] }
  ] };

  function init(host, D, name) {
  var STAGES = D.stages, LX = D.lx || 300, RX = D.rx || 700, TOP = D.top || 0, HH = D.h || H;   // the sheet: y from TOP, HH tall
  // ---- the canvas
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  var svg = el("svg", { viewBox: "0 " + TOP + " " + W + " " + HH, role: "img", "aria-label": D.aria });
  var defs = el("defs", {}, svg);
  var gDraw = el("g", { "class": "ld-draw" }, svg);
  var gLab = el("g", { "class": "ld-labels" }, svg);
  var stageText = el("text", { x: W / 2, "class": "ld-stage", "text-anchor": "middle" }, svg);
  host.appendChild(svg);

  var n = 0, labels = [];
  STAGES.forEach(function (st, si) {
    st.items.forEach(function (it) {
      var p = el("path", { d: it.d, "class": it.fill ? "ld-fill" : "ld-line", "stroke-width": it.w || 2.2, "pathLength": 1 }, gDraw);
      it.len = p.getTotalLength ? p.getTotalLength() : 300;
      if (it.fill) {                                     // a shaded area fades in instead of being drawn
        it.reveal = null;
        it.len = 400;
      } else if (it.dash) {                                     // a dashed line is revealed through a growing mask
        var m = el("mask", { id: "ld-" + name + n, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: W, height: H }, defs);
        it.reveal = el("path", { d: it.d, stroke: "#fff", "stroke-width": 8, fill: "none", pathLength: 1 }, m);
        p.removeAttribute("pathLength");
        p.setAttribute("stroke-dasharray", it.dash);
        p.setAttribute("mask", "url(#ld-" + name + n + ")");
      } else {
        it.reveal = p;
      }
      it.path = p;
      if (it.reveal) it.reveal.setAttribute("stroke-dasharray", "1 1");
      it.labelEls = it.labels.map(function (lb) {
        var g = el("g", { "class": "ld-label" }, gLab);
        lb.stage = si;
        lb.leader = el("polyline", { "class": "ld-leader" }, g);
        lb.dot = el("circle", { r: 3.5, "class": "ld-dot" }, g);
        lb.t = el("text", { y: lb.y, "text-anchor": lb.side === "L" ? "end" : lb.side === "C" ? "middle" : "start" }, g);
        if (lb.side === "C") { lb.leader.style.display = "none"; lb.dot.style.display = "none"; }
        lb.t.textContent = lb.text;
        labels.push(lb);
        return g;
      });
      n++;
    });
  });

  // ---- layout. Wide: the drawing at full size, every label at one size. Narrow (a phone): the drawing at 80%, so
  // the label columns widen; the labels of the stage on screen are large (fitted to their column), earlier ones
  // small; the stage line may take two lines, so the sheet grows a little taller.
  var layoutKey = null, NARROW = 560, K = 0.8, CX = 500, CY = 470;
  function layout(now) {
    var narrow = host.clientWidth > 0 && host.clientWidth < NARROW;
    var key = narrow + ":" + now + ":" + stageText.dataset.s;
    if (key === layoutKey) return;
    layoutKey = key;
    // D.keep: a drawing that keeps its wide layout on a phone (only the labels grow, fitted to their room)
    var shrink = narrow && !D.keep, k = shrink ? K : 1, lx = shrink ? 330 : LX, rx = shrink ? 670 : RX, h = shrink ? HH + 70 : HH;
    svg.setAttribute("viewBox", "0 " + TOP + " " + W + " " + h);
    gDraw.setAttribute("transform", narrow ? "translate(" + CX * (1 - k) + " " + CY * (1 - k) + ") scale(" + k + ")" : "");
    labels.forEach(function (lb) {
      var big = lb.stage === now || now === "all", fs = !narrow ? 25 : big ? 34 : 23, tx = lb.side === "L" ? lx : rx, ty = lb.y;
      if (lb.x != null) { tx = CX + (lb.x - CX) * k; ty = CY + (lb.y - CY) * k; }
      lb.t.setAttribute("x", tx);
      lb.t.setAttribute("y", ty);
      lb.t.style.fontSize = fs + "px";
      if (narrow && big) {                      // fit a long label to its column
        var w = lb.t.getComputedTextLength(), room = lb.room ? lb.room * k : (lb.side === "L" ? tx : W - tx) - 10;
        if (w > room) lb.t.style.fontSize = (fs * room / w).toFixed(1) + "px";
      }
      var ax = CX + (lb.ax - CX) * k, ay = CY + (lb.ay - CY) * k;
      lb.leader.setAttribute("points", (tx + (lb.side === "L" ? 8 : -8)) + "," + (ty - parseFloat(lb.t.style.fontSize) * 0.32) + " " + ax + "," + ay);
      lb.dot.setAttribute("cx", ax);
      lb.dot.setAttribute("cy", ay);
    });
    // the stage line: one line if it fits, else two, broken at a word
    var text = stageText.dataset.text || "", fsS = narrow ? 34 : 26;
    stageText.style.fontSize = fsS + "px";
    stageText.textContent = text;
    var lines = [text];
    if (stageText.getComputedTextLength() > W - 40) {
      var words = text.split(" "), best = 1, i;
      for (i = 1; i < words.length; i++) {
        if (Math.abs(words.slice(0, i).join(" ").length - text.length / 2) < Math.abs(words.slice(0, best).join(" ").length - text.length / 2)) best = i;
      }
      lines = [words.slice(0, best).join(" "), words.slice(best).join(" ")];
    }
    stageText.textContent = "";
    var y0 = TOP + h - 22 - (lines.length - 1) * fsS * 1.2;
    lines.forEach(function (ln, j) {
      var ts = el("tspan", { x: W / 2, y: (y0 + j * fsS * 1.2).toFixed(1) }, stageText);
      ts.textContent = ln;
    });
  }
  window.addEventListener("resize", function () { layoutKey = null; paint(); });

  // ---- state: `done` stages are complete; `cur` is the stage being drawn (or null), `t` its elapsed time in ms
  var done = STAGES.length, cur = null, t = 0, running = false, auto = false, last = 0, gapTimer = null;
  var GAP = still ? 0 : 250, BETWEEN = still ? 0 : 1400;
  function dur(it) { return still ? 0 : Math.min(2200, Math.max(600, it.len / 0.42)); }
  function stageLength(st) { return st.items.reduce(function (s, it) { return s + dur(it) + GAP; }, 0); }

  function setItem(it, f, active) {                       // f: 0 = not drawn, 1 = drawn
    if (it.reveal) it.reveal.style.strokeDashoffset = 1 - f;
    else it.path.style.opacity = f;
    it.path.style.visibility = f > 0 ? "visible" : "hidden";
    it.path.classList.toggle("ld-active", active);
    it.labelEls.forEach(function (g) { g.classList.toggle("ld-on", f >= 1); });
  }
  function paint() {
    STAGES.forEach(function (st, s) {
      var e = s === cur ? t : 0;
      st.items.forEach(function (it) {
        if (s < done) return setItem(it, 1, false);
        if (s !== cur) return setItem(it, 0, false);
        var d = dur(it), f = d ? Math.max(0, Math.min(1, e / d)) : (e >= 0 ? 1 : 0);
        setItem(it, f, f > 0 && f < 1);
        e -= d + GAP;
      });
    });
    var s = cur !== null ? cur : done - 1, whole = cur === null && done >= STAGES.length;
    stageText.dataset.s = whole ? "all" : s;
    stageText.dataset.text = whole ? "The finished drawing: press “Draw along” to draw it stage by stage"
      : s < 0 ? "Press “Draw stage 1” and draw along" : "Stage " + (s + 1) + ": " + STAGES[s].title;
    layout(whole ? "all" : s);
    buttons();
  }
  function frame(now) {
    if (!running) return;
    t += now - last;
    last = now;
    if (t >= stageLength(STAGES[cur])) {
      done = cur + 1; cur = null; running = false;
      paint();
      if (auto && done < STAGES.length) gapTimer = setTimeout(start, BETWEEN);
      else auto = false;
      return;
    }
    paint();
    requestAnimationFrame(frame);
  }
  function start() {
    gapTimer = null;
    if (cur === null) { if (done >= STAGES.length) return; cur = done; t = 0; }
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
    paint();
  }
  function stop() { running = false; clearTimeout(gapTimer); gapTimer = null; }

  // ---- controls, below the canvas
  var bar = document.createElement("div");
  bar.className = "ld-controls";
  bar.innerHTML = '<button type="button" data-a="back">◀ Back</button>' +
    '<button type="button" data-a="main" class="ld-main"></button>' +
    '<button type="button" data-a="all"></button>' +
    '<button type="button" data-a="restart">↺ Restart</button>';
  host.appendChild(bar);
  var B = {};
  bar.querySelectorAll("button").forEach(function (b) { B[b.dataset.a] = b; });

  function buttons() {
    var end = done >= STAGES.length && cur === null;
    B.main.textContent = running ? "❚❚ Pause" : cur !== null ? "▶ Resume stage " + (cur + 1)
      : end ? "▶ Draw along from stage 1" : "▶ Draw stage " + (done + 1);
    B.all.textContent = auto ? "Stop after this stage" : "Play all";
    B.back.disabled = done === 0 && cur === null;
  }
  B.main.onclick = function () {
    if (running) { stop(); auto = false; paint(); return; }
    if (done >= STAGES.length && cur === null) done = 0;     // from the finished drawing: start again
    start();
  };
  B.all.onclick = function () {
    auto = !auto;
    if (auto && done >= STAGES.length && cur === null) done = 0;
    if (auto && !running && !gapTimer) start();
    if (!auto && gapTimer) stop();
    paint();
  };
  B.back.onclick = function () {
    stop(); auto = false;
    if (cur !== null) cur = null; else done = Math.max(0, done - 1);
    paint();
  };
  B.restart.onclick = function () { stop(); auto = false; cur = null; done = 0; paint(); };
  host.tabIndex = 0;
  host.addEventListener("keydown", function (e) {
    if (e.target !== host) return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); B.main.click(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); B.back.click(); }
  });
  paint();
  }

  document.querySelectorAll(".liftdraw[data-anim]").forEach(function (host) {
    var D = DRAWINGS[host.dataset.anim];
    if (D) init(host, D, host.dataset.anim);
  });
})();
