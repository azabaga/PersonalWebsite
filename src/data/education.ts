export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  dates: string;
  status: string;
  notes: string[];
};

export const education: EducationItem[] = [
  {
    institution: "University of Tuzla, Faculty of Electrical Engineering",
    degree: "Bachelor of Electrical Engineering",
    field: "Telecommunications",
    dates: "Completed in 2026",
    status: "Completed",
    notes: [
      "Confirmed from CV materials and supported by a diploma file present in Drive.",
      "Provides the engineering foundation behind the site's telecom and systems narrative.",
    ],
  },
  {
    institution: "EMIMEP — European Master for Industry in Microwave Electronics and Photonics",
    degree: "International Master's program",
    field: "Microwave electronics and photonics",
    dates: "2026 - 2028",
    status: "TODO: Verification needed",
    notes: [
      "Drive contains the program handbook and a draft student agreement.",
      "The available materials do not confirm finalized admission or enrollment, so this remains intentionally marked as unverified.",
    ],
  },
];
