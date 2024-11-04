export interface Station {
  id: string;
  name: string;
  relations: {
    [destinationId: string]: number;
  };
  departuresNorth: number[];
  departuresSouth: number[];
}

export const subwayStations: Station[] = [
  {
    id: "SKARPNÄCK",
    name: "Skarpnäck",
    relations: {
      BAGARMOSSEN: 2,
    },
    departuresNorth: [0, 15, 30, 45],
    departuresSouth: [7, 22, 37, 52],
  },
  {
    id: "BAGARMOSSEN",
    name: "Bagarmossen",
    relations: {
      SKARPNÄCK: 2,
      KÄRRTORP: 2,
    },
    departuresNorth: [2, 17, 32, 47],
    departuresSouth: [5, 20, 35, 50],
  },
  {
    id: "KÄRRTORP",
    name: "Kärrtorp",
    relations: {
      BAGARMOSSEN: 2,
      BJÖRKHAGEN: 2,
    },
    departuresNorth: [4, 19, 34, 49],
    departuresSouth: [0, 18, 33, 48],
  },
  {
    id: "BJÖRKHAGEN",
    name: "Björkhagen",
    relations: {
      KÄRRTORP: 2,
      HAMMARBYHÖJDEN: 2,
    },
    departuresNorth: [6, 21, 36, 51],
    departuresSouth: [1, 16, 31, 46],
  },
  {
    id: "HAMMARBYHÖJDEN",
    name: "Hammarbyhöjden",
    relations: {
      BJÖRKHAGEN: 2,
      SKÄRMARBRINK: 2,
    },
    departuresNorth: [8, 23, 38, 53],
    departuresSouth: [14, 29, 44, 59],
  },
  {
    id: "SKÄRMARBRINK",
    name: "Skärmarbrink",
    relations: {
      HAMMARBYHÖJDEN: 2,
      GULLMARSPLAN: 3,
    },
    departuresNorth: [10, 25, 40, 55],
    departuresSouth: [12, 27, 42, 57],
  },
  {
    id: "GULLMARSPLAN",
    name: "Gullmarsplan",
    relations: {
      SKÄRMARBRINK: 3,
      SKANSTULL: 2,
    },
    departuresNorth: [13, 28, 43, 58],
    departuresSouth: [9, 24, 39, 54],
  },
  {
    id: "SKANSTULL",
    name: "Skanstull",
    relations: {
      GULLMARSPLAN: 2,
      MEDBORGARPLATSEN: 2,
    },
    departuresNorth: [0, 15, 30, 45],
    departuresSouth: [7, 22, 37, 52],
  },
  {
    id: "MEDBORGARPLATSEN",
    name: "Medborgarplatsen",
    relations: {
      SKANSTULL: 2,
      SLUSSEN: 2,
    },
    departuresNorth: [2, 17, 32, 47],
    departuresSouth: [5, 20, 35, 50],
  },
  {
    id: "SLUSSEN",
    name: "Slussen",
    relations: {
      MEDBORGARPLATSEN: 2,
      GAMLA_STAN: 2,
    },
    departuresNorth: [4, 19, 34, 49],
    departuresSouth: [0, 18, 33, 48],
  },
  {
    id: "GAMLA_STAN",
    name: "Gamla Stan",
    relations: {
      SLUSSEN: 2,
      T_CENTRALEN: 2,
    },
    departuresNorth: [6, 21, 36, 51],
    departuresSouth: [1, 16, 31, 46],
  },
  {
    id: "T_CENTRALEN",
    name: "T-Centralen",
    relations: { GAMLA_STAN: 2, HÖTORGET: 2 },
    departuresNorth: [8, 23, 38, 53],
    departuresSouth: [14, 29, 44, 59],
  },
  {
    id: "HÖTORGET",
    name: "Hötorget",
    relations: {
      T_CENTRALEN: 2,
      RÅDMANSGATAN: 2,
    },
    departuresNorth: [10, 25, 40, 55],
    departuresSouth: [12, 27, 42, 57],
  },
  {
    id: "RÅDMANSGATAN",
    name: "Rådmansgatan",
    relations: {
      HÖTORGET: 2,
      ODENPLAN: 2,
    },
    departuresNorth: [12, 27, 42, 57],
    departuresSouth: [10, 25, 40, 55],
  },
  {
    id: "ODENPLAN",
    name: "Odenplan",
    relations: {
      RÅDMANSGATAN: 2,
      SANKT_ERIKSPLAN: 2,
    },
    departuresNorth: [14, 29, 44, 59],
    departuresSouth: [8, 23, 38, 53],
  },
  {
    id: "SANKT_ERIKSPLAN",
    name: "S:t Eriksplan",
    relations: {
      ODENPLAN: 2,
      FRIDHEMSPLAN: 3,
    },
    departuresNorth: [1, 14, 31, 46],
    departuresSouth: [6, 21, 36, 51],
  },
  {
    id: "FRIDHEMSPLAN",
    name: "Fridhemsplan",
    relations: {
      SANKT_ERIKSPLAN: 3,
      THORILDSPLAN: 3,
    },
    departuresNorth: [4, 17, 34, 49],
    departuresSouth: [3, 18, 33, 48],
  },

  {
    id: "THORILDSPLAN",
    name: "Thorildsplan",
    relations: {
      FRIDHEMSPLAN: 3,
      KRISTINEBERG: 2,
    },
    departuresNorth: [7, 22, 37, 52],
    departuresSouth: [0, 15, 30, 45],
  },
  {
    id: "KRISTINEBERG",
    name: "Kristineberg",
    relations: {
      THORILDSPLAN: 2,
      ALVIK: 3,
    },
    departuresNorth: [9, 24, 39, 54],
    departuresSouth: [13, 28, 43, 58],
  },
  {
    id: "ALVIK",
    name: "Alvik",
    relations: {
      KRISTINEBERG: 3,
      STORA_MOSSEN: 2,
    },
    departuresNorth: [12, 27, 42, 57],
    departuresSouth: [10, 25, 40, 55],
  },
  {
    id: "STORA_MOSSEN",
    name: "Stora Mossen",
    relations: {
      ALVIK: 2,
      ABRAHAMSSBERG: 2,
    },
    departuresNorth: [14, 29, 44, 59],
    departuresSouth: [8, 23, 38, 53],
  },
  {
    id: "ABRAHAMSBERG",
    name: "Abrahamsberg",
    relations: {
      STORA_MOSSEN: 2,
      BROMMAPLAN: 2,
    },
    departuresNorth: [1, 16, 31, 46],
    departuresSouth: [6, 21, 36, 51],
  },
  {
    id: "BROMMAPLAN",
    name: "Brommaplan",
    relations: {
      ABRAHAMSSBERG: 2,
      ÅKESHOV: 3,
    },
    departuresNorth: [3, 18, 33, 48],
    departuresSouth: [4, 19, 34, 49],
  },
  {
    id: "ÅKESHOV",
    name: "Åkeshov",
    relations: {
      BROMMAPLAN: 3,
    },
    departuresNorth: [6, 21, 36, 51],
    departuresSouth: [1, 16, 31, 46],
  },
];
