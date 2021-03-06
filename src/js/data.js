var CONSTANTS = {
  color:  ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],       // 10
  clarity: ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'SI3', 'I1', 'I2', 'I3']  // 11
};

var BOUNDS = {
  color: CONSTANTS.color.length - 1,
  clarity: CONSTANTS.clarity.length - 1,
}


var PRICE_TABLE = {
  // .01 - .03
  1: {
    D: [12.5, 12.5, 12.5, 10, 10, 7.3, 6, 5, 4.6, 4, 3.3],
    E: [12.5, 12.5, 12.5, 10, 10, 7.3, 6, 5, 4.6, 4, 3.3],
    F: [12.5, 12.5, 12.5, 10, 10, 7.3, 6, 5, 4.6, 4, 3.3],
    G: [10, 10, 10, 8.5, 8.5, 6.5, 5.5, 4.6, 4.3, 3.8, 3],
    H: [10, 10, 10, 8.5, 8.5, 6.5, 5.5, 4.6, 4.3, 3.8, 3],
    I: [7.5, 7.5, 7.5, 6.8, 6.8, 5.8, 5, 4.4, 4.2, 3.5, 2.7],
    J: [7.5, 7.5, 7.5, 6.8, 6.8, 5.8, 5, 4.4, 4.2, 3.5, 2.7],
    K: [4.9, 4.9, 4.9, 4.2, 4.2, 3.9, 3.5, 3.1, 2.6, 2.2, 1.6],
    L: [4.9, 4.9, 4.9, 4.2, 4.2, 3.9, 3.5, 3.1, 2.6, 2.2, 1.6],
    M: [3.6, 3.6, 3.6, 3, 3, 2.4, 2.1, 1.8, 1.5, 1.3, 1]
  },
  // .04 - .07
  2: {
    D: [11.5, 11.5, 11.5, 9, 9, 7.2, 5.9, 5, 4.5, 3.9, 3.2],
    E: [11.5, 11.5, 11.5, 9, 9, 7.2, 5.9, 5, 4.5, 3.9, 3.2],
    F: [11.5, 11.5, 11.5, 9, 9, 7.2, 5.9, 5, 4.5, 3.9, 3.2],
    G: [9, 9, 9, 8, 8, 6.4, 5.4, 4.4, 4.2, 3.7, 3],
    H: [9, 9, 9, 8, 8, 6.4, 5.4, 4.4, 4.2, 3.7, 3],
    I: [7.5, 7.5, 7.5, 6.8, 6.8, 5.8, 5, 4.3, 4, 3.4, 2.8],
    J: [7.5, 7.5, 7.5, 6.8, 6.8, 5.8, 5, 4.3, 4, 3.4, 2.8],
    K: [5.1, 5.1, 5.1, 4.5, 4.5, 4.1, 3.5, 3.2, 2.7, 2.3, 1.8],
    L: [5.1, 5.1, 5.1, 4.5, 4.5, 4.1, 3.5, 3.2, 2.7, 2.3, 1.8],
    M: [3.8, 3.8, 3.8, 3.2, 3.2, 2.6, 2.3, 2, 1.7, 1.4, 1.1]
  },
  // .08 - .14
  3: {
    D: [12, 12, 12, 10, 10, 7.8, 6.5, 5.8, 5.1, 4.4, 3.8],
    E: [12, 12, 12, 10, 10, 7.8, 6.5, 5.8, 5.1, 4.4, 3.8],
    F: [12, 12, 12, 10, 10, 7.8, 6.5, 5.8, 5.1, 4.4, 3.8],
    G: [10, 10, 10, 8.8, 8.8, 7, 6, 5.6, 4.6, 4, 3.6],
    H: [10, 10, 10, 8.8, 8.8, 7, 6, 5.6, 4.6, 4, 3.6],
    I: [8.5, 8.5, 8.5, 7.5, 7.5, 6.4, 5.5, 5, 4.5, 3.9, 3.3],
    J: [8.5, 8.5, 8.5, 7.5, 7.5, 6.4, 5.5, 5, 4.5, 3.9, 3.3],
    K: [6.7, 6.7, 6.7, 6, 6, 5.2, 4.4, 3.8, 3.3, 2.8, 2.3],
    L: [6.7, 6.7, 6.7, 6, 6, 5.2, 4.4, 3.8, 3.3, 2.8, 2.3],
    M: [4.5, 4.5, 4.5, 4, 4, 3.5, 3.1, 2.8, 2.3, 1.8, 1.4]
  },
  // .15 - .17
  4: {
    D: [13.5, 13.5, 13.5, 12.2, 12.2, 8.7, 7.5, 6.7, 5.5, 4.6, 3.9],
    E: [13.5, 13.5, 13.5, 12.2, 12.2, 8.7, 7.5, 6.7, 5.5, 4.6, 3.9],
    F: [13.5, 13.5, 13.5, 12.2, 12.2, 8.7, 7.5, 6.7, 5.5, 4.6, 3.9],
    G: [12, 12, 12, 10.2, 10.2, 8, 6.7, 5.8, 4.9, 4.1, 3.6],
    H: [12, 12, 12, 10.2, 10.2, 8, 6.7, 5.8, 4.9, 4.1, 3.6],
    I: [10, 10, 10, 8.8, 8.8, 7, 6.1, 5.2, 4.5, 4, 3.3],
    J: [10, 10, 10, 8.8, 8.8, 7, 6.1, 5.2, 4.5, 4, 3.3],
    K: [7.5, 7.5, 7.5, 7, 7, 5.4, 4.9, 4, 3.5, 2.9, 2.4],
    L: [7.5, 7.5, 7.5, 7, 7, 5.4, 4.9, 4, 3.5, 2.9, 2.4],
    M: [5.5, 5.5, 5.5, 4.6, 4.6, 3.9, 3.4, 3.1, 2.4, 1.9, 1.7]
  },
  // .18 - .22
  5: {
    D: [15, 15, 15, 13, 13, 9.3, 8.3, 7.3, 6, 5, 4.2],
    E: [15, 15, 15, 13, 13, 9.3, 8.3, 7.3, 6, 5, 4.2],
    F: [15, 15, 15, 13, 13, 9.3, 8.3, 7.3, 6, 5, 4.2],
    G: [13.5, 13.5, 13.5, 11.5, 11.5, 8.8, 7.5, 6.6, 5.5, 4.7, 3.8],
    H: [13.5, 13.5, 13.5, 11.5, 11.5, 8.8, 7.5, 6.6, 5.5, 4.7, 3.8],
    I: [11, 11, 11, 9.9, 9.9, 7.7, 6.6, 5.6, 4.9, 4.2, 3.6],
    J: [11, 11, 11, 9.9, 9.9, 7.7, 6.6, 5.6, 4.9, 4.2, 3.6],
    K: [9, 9, 9, 7.7, 7.7, 6.4, 5.4, 4.6, 4.1, 3.2, 2.6],
    L: [9, 9, 9, 7.7, 7.7, 6.4, 5.4, 4.6, 4.1, 3.2, 2.6],
    M: [7.5, 7.5, 7.5, 6.6, 6.6, 5.4, 4.3, 3.8, 2.9, 2.2, 1.8]
  },
  // .23 - .29
  6: {
    D: [19, 19, 19, 17, 17, 12.3, 10.4, 9, 7.5, 6, 4.8],
    E: [19, 19, 19, 17, 17, 12.3, 10.4, 9, 7.5, 6, 4.8],
    F: [19, 19, 19, 17, 17, 12.3, 10.4, 9, 7.5, 6, 4.8],
    G: [17, 17, 17, 14.5, 14.5, 10.5, 9.6, 8.4, 7, 5.3, 4.4],
    H: [17, 17, 17, 14.5, 14.5, 10.5, 9.6, 8.4, 7, 5.3, 4.4],
    I: [14, 14, 14, 11.8, 11.8, 9, 7.8, 7, 5.8, 4.6, 4],
    J: [14, 14, 14, 11.8, 11.8, 9, 7.8, 7, 5.8, 4.6, 4],
    K: [11.8, 11.8, 11.8, 10, 10, 7.6, 6.8, 6.2, 4.8, 3.8, 3],
    L: [11.8, 11.8, 11.8, 10, 10, 7.6, 6.8, 6.2, 4.8, 3.8, 3],
    M: [9.5, 9.5, 9.5, 8.1, 8.1, 6.5, 5.8, 5, 3.6, 2.9, 2.2]
  },
  // .3 - .39
  7: {
    D: [43, 35, 32, 30, 29, 26, 25, 20, 16, 11, 7],
    E: [35, 31, 29, 28, 27, 25, 24, 19, 15, 10, 6],
    F: [31, 29, 27, 26, 25, 24, 23, 18, 14, 9, 6],
    G: [29, 28, 26, 25, 24, 23, 22, 17, 13, 8, 5],
    H: [27, 26, 25, 24, 23, 22, 21, 16, 12, 8, 5],
    I: [25, 24, 24, 23, 22, 21, 20, 15, 11, 7, 5],
    J: [23, 22, 22, 21, 20, 19, 18, 13, 10, 7, 4],
    K: [19, 18, 18, 17, 16, 15, 14, 10, 8, 6, 4],
    L: [17, 16, 15, 14, 13, 12, 10, 9, 6, 5, 3],
    M: [15, 14, 14, 13, 12, 11, 9, 8, 5, 4, 3]
  },
  // .4 - .49
  8: {
    D: [49, 43, 38, 36, 34, 31, 28, 23, 18, 12, 8],
    E: [43, 38, 35, 34, 32, 29, 27, 22, 17, 11, 7],
    F: [38, 35, 33, 32, 30, 27, 25, 21, 16, 11, 7],
    G: [25, 33, 32, 31, 29, 26, 24, 20, 15, 10, 6],
    H: [32, 31, 30, 29, 27, 25, 23, 19, 14, 9, 6],
    I: [28, 27, 26, 25, 24, 23, 22, 18, 13, 8, 6],
    J: [26, 25, 24, 23, 22, 21, 20, 15, 12, 8, 5],
    K: [22, 21, 20, 19, 18, 17, 16, 12, 10, 7, 5],
    L: [20, 19, 18, 17, 16, 15, 14, 10, 8, 6, 4],
    M: [18, 17, 17, 16, 15, 14, 12, 9, 7, 5, 4]
  },
  // .5 - .69
  9: {
    D: [87, 68, 59, 52, 49, 40, 34, 27, 22, 16, 11],
    E: [67, 58, 53, 49, 45, 38, 32, 26, 21, 15, 10],
    F: [57, 53, 50, 47, 43, 35, 30, 24, 20, 14, 10],
    G: [54, 48, 45, 42, 40, 33, 28, 22, 19, 13, 9],
    H: [48, 43, 40, 39, 37, 31, 27, 21, 18, 12, 8],
    I: [41, 38, 35, 34, 32, 28, 25, 20, 16, 11, 8],
    J: [33, 31, 29, 28, 26, 25, 24, 19, 15, 11, 7],
    K: [28, 26, 24, 23, 22, 21, 20, 16, 13, 10, 7],
    L: [24, 23, 22, 21, 20, 19, 17, 13, 11, 9, 6],
    M: [22, 20, 19, 18, 17, 16, 15, 11, 9, 7, 5]
  },
  // .8 - .89
  10: {
    D: [103, 84, 72, 65, 61, 53, 45, 37, 30, 20, 13],
    E: [82, 73, 67, 61, 57, 50, 43, 35, 29, 19, 12],
    F: [72, 67, 60, 57, 53, 48, 41, 33, 28, 18, 12],
    G: [66, 62, 56, 52, 48, 44, 38, 31, 26, 17, 11],
    H: [61, 57, 51, 47, 44, 41, 35, 29, 24, 16, 10],
    I: [50, 47, 44, 42, 39, 36, 30, 27, 22, 15, 10],
    J: [39, 37, 34, 32, 31, 29, 27, 24, 20, 14, 9],
    K: [33, 31, 28, 26, 25, 24, 22, 20, 17, 13, 8],
    L: [28, 26, 25, 24, 23, 22, 20, 17, 15, 11, 7],
    M: [26, 24, 23, 22, 21, 19, 18, 15, 12, 9, 6]
  },
  // .90 - .99
  11: {
    D: [152, 118, 103,  88,  77,  70,  62,  48,  38,  22,  15],
    E: [118, 103,  94,  79,  73,  65,  59,  45,  37,  21,  14],
    F: [103,  94,  84,  74,  69,  63,  55,  43,  36,  20,  14],
    G: [ 93,  84,  74,  69,  64,  59,  52,  41,  34,  19,  13],
    H: [ 85,  74,  69,  63,  60,  55,  49,  38,  32,  18,  13],
    I: [ 70,  62,  59,  55,  52,  50,  44,  34,  30,  17,  12],
    J: [ 54,  51,  49,  47,  46,  44,  39,  31,  26,  16,  11],
    K: [ 44,  42,  40,  38,  37,  35,  32,  26,  23,  15,  10],
    L: [ 39,  37,  35,  34,  32,  30,  27,  23,  20,  14,   9],
    M: [ 36,  34,  32,  30,  29,  27,  24,  21,  17,  12,   8]
  },
  // 1.0 - 1.49
  12: {
    D: [275, 195, 170, 133, 116, 88,  75,  60,  47,  27,  17],
    E: [190, 165, 133, 115, 102, 85,  71,  58,  45,  26,  16],
    F: [160, 133, 116, 107, 92,  82,  69,  56,  44,  25,  15],
    G: [130, 116, 106, 91,  85,  78,  66,  54,  43,  24,  14],
    H: [106, 98,  89,  81,  77,  71,  63,  51,  41,  23,  14],
    I: [88,  83,  76,  72,  69,  66,  59,  47,  37,  22,  13],
    J: [75,  70,  67,  64,  60,  57,  54,  42,  32,  20,  13],
    K: [63,  60,  57,  55,  53,  50,  46,  37,  30,  18,  12],
    L: [54,  52,  50,  48,  46,  44,  40,  34,  28,  17,  11],
    M: [47,  43,  40,  38,  36,  34,  31,  27,  25,  16,  11]
  },
  // 1.5 - 1.99
  13: {
    D: [336, 243, 211, 177, 155, 115, 93,  72,  54,  31,  18],
    E: [238, 206, 177, 160, 142, 112, 90,  70,  51,  30,  17],
    F: [206, 177, 153, 140, 127, 107, 86,  67,  50,  29,  16],
    G: [166, 150, 135, 120, 115, 101, 81,  65,  49,  28,  16],
    H: [134, 125, 113, 105, 100, 92,  76,  61,  47,  27,  16],
    I: [107, 102, 96,  89,  85,  80,  69,  56,  43,  25,  15],
    J: [93,  86,  82,  77,  72,  67,  61,  49,  38,  23,  15],
    K: [74,  70,  67,  65,  62,  57,  52,  43,  35,  20,  14],
    L: [62,  60,  58,  56,  54,  50,  45,  38,  32,  19,  13],
    M: [52,  49,  46,  44,  42,  41,  39,  33,  28,  18,  13]
  },
  // 2.0 - 2.99
  14: {
    D: [509, 380, 340, 290, 213, 160, 125, 84, 65, 34, 19],
    E: [370, 325, 285, 250, 193, 155, 120, 81, 63, 33, 18],
    F: [325, 280, 250, 215, 180, 145, 115, 78, 61, 32, 17],
    G: [262, 222, 200, 175, 157, 135, 110, 73, 59, 31, 16],
    H: [192, 185, 175, 155, 132, 120, 105, 68, 56, 30, 16],
    I: [146, 142, 134, 124, 113, 105, 95, 62, 52, 28, 16],
    J: [116, 110, 106, 100, 93, 90, 80, 57, 48, 25, 16],
    K: [102, 97, 93, 88, 83, 80, 70, 53, 43, 24, 15],
    L: [86, 82, 78, 75, 72, 65, 60, 47, 38, 23, 14],
    M: [73, 70, 68, 65, 60, 55, 50, 40, 31, 22, 14]
  },
  // 3.0 - 3.99
  15: {
    D: [1025, 670, 580, 469, 364, 235, 165, 97, 78, 40, 21],
    E: [666,  582, 490, 410, 334, 215, 160, 92, 73, 38, 20],
    F: [579,  490, 412, 343, 304, 195, 155, 87, 68, 36, 19],
    G: [445,  389, 340, 300, 250, 180, 140, 82, 66, 35, 18],
    H: [327,  305, 276, 250, 205, 155, 130, 78, 64, 34, 18],
    I: [242,  228, 217, 200, 170, 135, 115, 73, 60, 32, 17],
    J: [186,  178, 176, 165, 140, 120, 105, 66, 54, 29, 17],
    K: [159,  148, 144, 135, 120, 105, 90,  60, 48, 27, 16],
    L: [115,  113, 111, 106, 95,  80,  70,  52, 42, 26, 16],
    M: [100,  97,  94,  90,  80,  70,  59,  47, 34, 25, 16]
  },
  // 4.0 - 4.99
  16: {
    D: [1120, 760, 690, 565, 440, 280, 195, 105, 86, 45, 23],
    E: [760, 690, 600, 505, 420, 270, 190, 100, 81, 43, 22],
    F: [690, 595, 530, 460, 380, 250, 185, 95, 77, 41, 21],
    G: [520, 465, 425, 400, 325, 220, 170, 90, 72, 39, 20],
    H: [390, 370, 335, 315, 270, 195, 160, 85, 66, 37, 20],
    I: [285, 270, 250, 235, 205, 165, 140, 80, 62, 35, 19],
    J: [230, 220, 205, 190, 170, 145, 125, 70, 56, 33, 18],
    K: [190, 180, 170, 160, 145, 120, 104, 65, 51, 31, 17],
    L: [140, 130, 122, 117, 105, 89, 78, 59, 45, 29, 16],
    M: [120, 110, 105, 100, 90, 78, 67, 54, 37, 27, 16]
  },
  // 5.0 - 5.99
  17: {
    D: [1520, 1043, 915, 795, 610, 375, 247, 115, 92, 48, 25],
    E: [1043, 915, 819, 725, 560, 345, 240, 110, 87, 46, 24],
    F: [895, 819, 730, 650, 485, 320, 229, 105, 82, 44, 23],
    G: [670, 615, 550, 500, 425, 280, 220, 100, 78, 42, 22],
    H: [525, 477, 438, 395, 335, 245, 194, 90, 73, 40, 21],
    I: [390, 360, 345, 310, 280, 215, 169, 85, 68, 38, 20],
    J: [293, 274, 258, 245, 235, 185, 149, 75, 63, 36, 19],
    K: [230, 215, 200, 185, 175, 149, 121, 70, 58, 33, 18],
    L: [166, 156, 146, 138, 130, 113, 87, 65, 48, 31, 17],
    M: [138, 133, 128, 123, 115, 102, 76, 60, 40, 29, 17]
  }
}



var DESCRIPTIONS = {
  clarity: new (function (){
    this.IF = 'Internally flawless. No inclusions and only blemishes are visible to a skilled grader using 10× magnification.';
    this.VVS1 =  'Very very small inclusions.  Inclusions are difficult for a skilled grader to see under 10× magnification.';
    this.VVS2 = this.VVS1;
    this.VS1 = 'Very small inclusions. Inclusions are minor and range from difficult to somewhat easy for a skilled grader to see under 10x magnification, and in some cases to the naked eye.';
    this.VS2 = this.VS1;
    this.SI1 = 'Small inclusions. Inclusions are noticeable to a skilled grader under 10x magnification, and may be visible to the naked eye.';
    this.SI2 = this.SI1;
    this.SI3 = this.SI1;
    this.I1 =  'Imperfect. Inclusions are obvious under 10× magnification, in most cases to the naked eye, and may affect transparency and brilliance.';
    this.I2 = this.I1;
    this.I3 = this.I1;
  })(),
  color: new (function(){
    this.D = 'Colorless';
    this.E = this.D;
    this.F = this.D;
    this.G = 'Near Colorless';
    this.H = this.G;
    this.I = this.G;
    this.J = this.G;
    this.K = 'Faint';
    this.L = this.K;
    this.M = this.K;
  })()
}

function getPriceTableIndex(caratSize) {
  if (caratSize >= .01 && caratSize <= .03)
    return 1;
  else if (caratSize >= .04 && caratSize <= .07)
    return 2;
  else if (caratSize >= .08 && caratSize <= .14)
    return 3;
  else if (caratSize >= .15 && caratSize <= .17)
    return 4;
  else if (caratSize >= .18 && caratSize <= .22)
    return 5;
  else if (caratSize >= .23 && caratSize <= .29)
    return 6;
  else if (caratSize >= .30 && caratSize <= .39)
    return 7;
  else if (caratSize >= .40 && caratSize <= .49)
    return 8;
  else if (caratSize >= .50 && caratSize <= .69)
    return 9;
  else if (caratSize >= .70 && caratSize <= .89)
    return 10;
  else if (caratSize >= .90 && caratSize <= .99)
    return 11;
  else if (caratSize >= 1.0 && caratSize <= 1.49)
    return 12;
  else if (caratSize >= 1.5 && caratSize <= 1.99)
    return 13;
  else if (caratSize >= 2.0 && caratSize <= 2.99)
    return 14;
  else if (caratSize >= 3.0 && caratSize <= 3.99)
    return 15;
  else if (caratSize >= 4.0 && caratSize <= 4.99)
    return 16;
  else if (caratSize >= 5.0 && caratSize <= 5.99)
    return 17;
}

function getOversizePremium(carat) {
  if (carat >= .6 && carat <= .69)
    return {min: 7, max: 10, caratMin: .6, caratMax: .69};

  else if (carat >= .8 && carat <= .89)
    return {min: 7, max: 12, caratMin: .8, caratMax: .89};

  else if (carat >= .95 && carat <= .99)
    return {min: 5, max: 10, caratMin: .95, caratMax: .99};

  else if (carat >= 1.25 && carat <= 1.49)
    return {min: 5, max: 10, caratMin: 1.25, caratMax: 1.49};

  else if (carat >= 1.7 && carat <= 1.99)
    return {min: 7, max: 12, caratMin: 1.7, caratMax: 1.99};

  else if (carat >= 2.5 && carat <= 2.99)
    return {min: 5, max: 10, caratMin: 2.5, caratMax: 2.99};

  else if (carat >= 3.5 && carat <= 3.99)
    return {min: 5, max: 10, caratMin: 3.5, caratMax: 3.99};

  else if (carat >= 4.5 && carat <= 4.99)
    return {min: 5, max: 10, caratMin: 4.5, caratMax: 4.99};

  return null;
}