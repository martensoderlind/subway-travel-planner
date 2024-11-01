interface Station {
  id: string;
  namn: string;
  relations: {
    [destinationId: string]: number; // destinationsstation och restid
  };
}

export const subwayStations: Station[] = [
  {
    id: "ÅKESHOV",
    namn: "Åkeshov",
    relations: {
      BROMMAPLAN: 3,
    },
  },
  {
    id: "BROMMAPLAN",
    namn: "Brommaplan",
    relations: {
      ÅKESSON: 3,
      ABRAHAMSSBERG: 2,
    },
  },
  {
    id: "ABRAHAMSSBERG",
    namn: "Abrahamsberg",
    relations: {
      BROMMAPLAN: 2,
      STORA_MOSSEN: 2,
    },
  },
  {
    id: "STORA_MOSSEN",
    namn: "Stora Mossen",
    relations: {
      ABRAHAMSSBERG: 2,
      ALVIK: 2,
    },
  },
  {
    id: "ALVIK",
    namn: "Alvik",
    relations: {
      STORA_MOSSEN: 2,
      KRISTINEBERG: 3,
    },
  },
  {
    id: "KRISTINEBERG",
    namn: "Kristineberg",
    relations: {
      ALVIK: 3,
      THORILDSPLAN: 2,
    },
  },
  {
    id: "THORILDSPLAN",
    namn: "Thorildsplan",
    relations: {
      KRISTINEBERG: 2,
      FRIDHEMSPLAN: 3,
    },
  },
  {
    id: "FRIDHEMSPLAN",
    namn: "Fridhemsplan",
    relations: {
      THORILDSPLAN: 3,
      STADSHAGEN: 2,
    },
  },
  {
    id: "SANKT_ERIKSPLAN",
    namn: "S:t Eriksplan",
    relations: {
      STADSHAGEN: 3,
      ODENPLAN: 2,
    },
  },
  {
    id: "ODENPLAN",
    namn: "Odenplan",
    relations: {
      SANKT_ERIKSPLAN: 2,
      RÅDMANSGATAN: 2,
    },
  },
  {
    id: "RÅDMANSGATAN",
    namn: "Rådmansgatan",
    relations: {
      ODENPLAN: 2,
      HÖTORGET: 2,
    },
  },
  {
    id: "HÖTORGET",
    namn: "Hötorget",
    relations: {
      RÅDMANSGATAN: 2,
      T_CENTRAL: 2,
    },
  },
  {
    id: "T_CENTRAL",
    namn: "T-Centralen",
    relations: {
      HÖTORGET: 2,
      GAMLA_STAN: 2,
    },
  },
  {
    id: "GAMLA_STAN",
    namn: "Gamla Stan",
    relations: {
      T_CENTRAL: 2,
      SLUSSEN: 2,
    },
  },
  {
    id: "SLUSSEN",
    namn: "Slussen",
    relations: {
      GAMLA_STAN: 2,
      MEDBORGARPLATSEN: 2,
    },
  },
  {
    id: "MEDBORGARPLATSEN",
    namn: "Medborgarplatsen",
    relations: {
      SLUSSEN: 2,
      SKANSTULL: 2,
    },
  },
  {
    id: "SKANSTULL",
    namn: "Skanstull",
    relations: {
      MEDBORGARPLATSEN: 2,
      GULLMARSPLAN: 2,
    },
  },

  {
    id: "GULLMARSPLAN",
    namn: "Gullmarsplan",
    relations: {
      SKANSTULL: 2,
      SKÄRMARBRINK: 2,
    },
  },
  {
    id: "SKÄRMARBRINK",
    namn: "Skärmarbrink",
    relations: {
      GULLMARSPLAN: 2,
      HAMMARBYHÖJDEN: 2,
    },
  },
  {
    id: "HAMMARBYHÖJDEN",
    namn: "Hammarbyhöjden",
    relations: {
      SKÄRMARBRINK: 2,
      BJÖRKHAGEN: 2,
    },
  },
  {
    id: "BJÖRKHAGEN",
    namn: "Björkhagen",
    relations: {
      HAMMARBYHÖJDEN: 2,
      KÄRRTORP: 2,
    },
  },
  {
    id: "KÄRRTORP",
    namn: "Kärrtorp",
    relations: {
      BJÖRKHAGEN: 2,
      BAGARMOSSEN: 2,
    },
  },
  {
    id: "BAGARMOSSEN",
    namn: "Bagarmossen",
    relations: {
      KÄRRTORP: 2,
      SKARPNÄCK: 2,
    },
  },
  {
    id: "SKARPNÄCK",
    namn: "Skarpnäck",
    relations: {
      BAGARMOSSEN: 2,
    },
  },
];
