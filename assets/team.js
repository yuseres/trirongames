/* assets/team.js — the TrironGames crew, rendered into the studio roster.
   To add a 4th/5th member: append one object.

   Fields
     name     display name
     role     short title (e.g. "Dev / Creator")
     bio      one-line bio
     photo    path to a photo (takes priority over initials)
     initials fallback avatar text when there's no photo yet
     accent   the ring/initials colour for this member
     building what they're currently working on (small tag)

   NOTE: Dimi's and Cipri's roles/bios are still placeholders — swap in the
   real copy when ready. Photos are in place for all three (assets/team/).
*/
window.TRIRON_TEAM = [
  {
    name: "Clau",
    role: "Dev / Creator",
    bio: "Started the whole thing on a dare and never really stopped. Builds, breaks and ships.",
    photo: "assets/team/clau.png",
    initials: "CL",
    accent: "#F97A2E",
    building: "Every game"
  },
  {
    name: "Dimi",
    role: "Role — placeholder",
    bio: "Short bio coming soon — tell Clau what to write here.",
    photo: "assets/team/dimi.png",
    initials: "DI",
    accent: "#8E7BC4",
    building: "New board game"
  },
  {
    name: "Cipri",
    role: "Role — placeholder",
    bio: "Short bio coming soon — tell Clau what to write here.",
    photo: "assets/team/cipri.png",
    initials: "CI",
    accent: "#5AA17A",
    building: "Animals Merge"
  }
];
