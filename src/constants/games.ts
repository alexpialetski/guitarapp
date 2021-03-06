import { LessonConfig } from "types/lesson";

export const GAMES = new Map<string, LessonConfig<"">>([
  [
    "eString",
    {
      title: "Notes on E string",
      description: "Use E string(6) to find the note",
      configurations: [
        { scaleValue: "major", modificationValue: "triad", formValue: "none" },
      ],
      level: "easy",
    },
  ],
  [
    "aString",
    {
      title: "Notes on A string",
      description: "Use A string(5) to find the note",
      configurations: [
        { scaleValue: "major", modificationValue: "triad", formValue: "none" },
      ],
      level: "easy",
    },
  ],
  [
    "dString",
    {
      title: "Notes on D string",
      description: "Use D string(4) to find the note",
      configurations: [
        { scaleValue: "major", modificationValue: "triad", formValue: "none" },
      ],
      level: "intermediate",
    },
  ],
]);
