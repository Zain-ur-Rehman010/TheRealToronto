import crowdImg from "@/assets/crowd-energy.jpg";
import streetImg from "@/assets/street-ball.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import playerImg from "@/assets/player-shadow.jpg";
import heroImg from "@/assets/hero-toronto.jpg";
import the24Bg from "@/assets/the-24-bg.jpg";

export type Player = {
  id: string;
  name: string;
  number: string;
  position: string;
  height: string;
  hometown: string;
  background: string;
  highlights: string[];
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  background: string;
};

export type Franchise = {
  slug: string;
  city: string;
  name: string;
  tag: string;
  color: string;
  mission: string;
  gm: string;
  venue: string;
  founded: string;
  community: string;
  players: Player[];
  staff: StaffMember[];
  map: { x: number; y: number };
};

export const FRANCHISES: Franchise[] = [
  {
    slug: "brampton",
    city: "Brampton",
    name: "Brampton",
    tag: "The Crown",
    color: "oklch(0.58 0.22 27)",
    mission: "Canada's basketball factory. Now with a crown.",
    gm: "TBA",
    venue: "CAA Centre",
    founded: "Founding Franchise",
    community:
      "Partnered with Peel District School Board and regional high school programs. Kings youth camps run every summer in partnership with Brampton Recreation.",
    map: { x: 260, y: 310 },
    players: [
      {
        id: "br-1",
        name: "Desmond King",
        number: "1",
        position: "PG",
        height: '6\'0"',
        hometown: "Brampton, ON",
        background:
          "Brampton native. Played at a U.S. prep school before returning to represent the city.",
        highlights: ["U.S. prep school alumni", "Brampton Elite summer league"],
      },
      {
        id: "br-2",
        name: "Chris Antwi",
        number: "7",
        position: "SG",
        height: '6\'3"',
        hometown: "Brampton, ON",
        background:
          "Former Humber Hawk who led his team to back-to-back OCAA titles. Pure scorer.",
        highlights: ["2x OCAA Champion", "OCAA All-Star 2022, 2023"],
      },
      {
        id: "br-3",
        name: "Myles Joseph",
        number: "15",
        position: "SF",
        height: '6\'6"',
        hometown: "Mississauga, ON",
        background:
          "Versatile forward who spent two years in a European academy before joining the TRT circuit.",
        highlights: ["European academy veteran", "Peel Regional all-star"],
      },
      {
        id: "br-4",
        name: "Darius Owusu",
        number: "24",
        position: "PF",
        height: '6\'9"',
        hometown: "Brampton, ON",
        background:
          "Homegrown product. Physical power forward from the Peel basketball system.",
        highlights: ["Peel region scoring champion", "Sheridan College All-Star"],
      },
      {
        id: "br-5",
        name: "James Frimpong",
        number: "45",
        position: "C",
        height: '6\'10"',
        hometown: "Brampton, ON",
        background:
          "Shot blocker and screen setter. Plays with intensity that defines the Brampton identity.",
        highlights: ["Peel Memorial Centre youth program", "College of Boreal alumni"],
      },
    ],
    staff: [
      { id: "br-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "br-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "br-s3", name: "TBA", role: "Player Development", background: "Announcement coming 2026." },
    ],
  },

  {
    slug: "durham",
    city: "Durham",
    name: "Durham",
    tag: "The Surge",
    color: "oklch(0.6 0.22 27)",
    mission: "Quiet region. Loud league.",
    gm: "TBA",
    venue: "Tribute Communities Centre",
    founded: "Founding Franchise",
    community:
      "Oshawa, Pickering, Ajax youth pipelines. Storm runs community tournaments across Durham Region that serve as a primary feeder to the TRT U23 pathway.",
    map: { x: 830, y: 380 },
    players: [
      {
        id: "du-1",
        name: "Will Patterson",
        number: "4",
        position: "PG",
        height: '6\'1"',
        hometown: "Oshawa, ON",
        background:
          "Oshawa kid. Started playing at Lakeridge Health Park and never looked back. Leader on and off the court.",
        highlights: ["Durham College All-Star", "Oshawa youth ambassador"],
      },
      {
        id: "du-2",
        name: "Cameron Nichols",
        number: "10",
        position: "SG",
        height: '6\'2"',
        hometown: "Ajax, ON",
        background:
          "Ajax native who played three seasons at Durham College. Three-point threat who spaces the floor.",
        highlights: ["Durham College career scoring record", "Ajax basketball hero"],
      },
      {
        id: "du-3",
        name: "Oluwaseun Adeyemi",
        number: "20",
        position: "SF",
        height: '6\'5"',
        hometown: "Pickering, ON",
        background:
          "Nigerian-Canadian forward. Came to Canada at 16 and developed into one of Durham's best-ever players.",
        highlights: ["OCAA Tournament selection", "Pickering High School champion"],
      },
      {
        id: "du-4",
        name: "Tyler Grant",
        number: "35",
        position: "PF",
        height: '6\'7"',
        hometown: "Whitby, ON",
        background:
          "Whitby's own. Physical and relentless. The kind of player coaches love for his motor and toughness.",
        highlights: ["Durham all-time leading scorer (HS)", "OCAA Final Four"],
      },
      {
        id: "du-5",
        name: "Isaac Danso",
        number: "42",
        position: "C",
        height: '6\'10"',
        hometown: "Oshawa, ON",
        background:
          "Long and mobile centre who protects the rim without compromising the team's switching schemes.",
        highlights: ["OCAA All-Defensive team", "NBL Canada training camp invitee"],
      },
    ],
    staff: [
      { id: "du-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "du-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "du-s3", name: "TBA", role: "Player Development", background: "Announcement coming 2026." },
    ],
  },

  {
    slug: "mississauga",
    city: "Mississauga",
    name: "Mississauga",
    tag: "The Waterfront",
    color: "oklch(0.55 0.24 27)",
    mission: "The wave. The work. The west.",
    gm: "TBA",
    venue: "Paramount Fine Foods Centre",
    founded: "Founding Franchise",
    community:
      "Cross-border outreach with Halton & Peel. Tide connects Mississauga youth programs with Oakville, Burlington, and Milton development networks.",
    map: { x: 290, y: 410 },
    players: [
      {
        id: "ms-1",
        name: "Tariq Hassan",
        number: "2",
        position: "PG",
        height: '6\'0"',
        hometown: "Mississauga, ON",
        background:
          "UTM alumni and Mississauga native. Runs the offense with patience and precision.",
        highlights: ["UTM Varsity captain", "Mississauga Pro-Am standout"],
      },
      {
        id: "ms-2",
        name: "Jason Park",
        number: "9",
        position: "SG",
        height: '6\'3"',
        hometown: "Oakville, ON",
        background:
          "Korean-Canadian guard who excels at creating off the dribble. Trained with a Korean national team development program.",
        highlights: ["Korean development program alum", "OCAA scoring leader 2023"],
      },
      {
        id: "ms-3",
        name: "Dion Watkins",
        number: "17",
        position: "SF",
        height: '6\'6"',
        hometown: "Mississauga, ON",
        background:
          "High-energy wing. Known for his ability to guard the opposing team's best player every night.",
        highlights: ["Peel Region defensive award", "Sheridan College MVP"],
      },
      {
        id: "ms-4",
        name: "Samuel Asante",
        number: "28",
        position: "PF",
        height: '6\'8"',
        hometown: "Brampton, ON",
        background:
          "Power forward equally comfortable in the post and beyond the arc. One of the most complete bigs in the TRT pool.",
        highlights: ["U of T CIS invitation", "GTA summer circuit champion"],
      },
      {
        id: "ms-5",
        name: "Max Bowen",
        number: "55",
        position: "C",
        height: '6\'10"',
        hometown: "Mississauga, ON",
        background:
          "Local centre who turned down overseas inquiries to stay and help build TRT from the ground up.",
        highlights: ["Mississauga development league", "Peel Regional center of the year"],
      },
    ],
    staff: [
      { id: "ms-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "ms-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "ms-s3", name: "TBA", role: "Partnerships Director", background: "Announcement coming 2026." },
    ],
  },

  {
    slug: "scarborough",
    city: "Scarborough",
    name: "Scarborough",
    tag: "The East",
    color: "oklch(0.6 0.2 27)",
    mission: "From Malvern to Morningside, the East rises.",
    gm: "TBA",
    venue: "Scarborough Civic Centre",
    founded: "Founding Franchise",
    community:
      "Youth clinics across Scarborough's 6 priority neighbourhoods. Partnering with Malvern Community Centre and Scarborough Town Centre for open gym programs year-round.",
    map: { x: 720, y: 320 },
    players: [
      {
        id: "sc-1",
        name: "Tyrese Brown",
        number: "5",
        position: "PG",
        height: '5\'11"',
        hometown: "Malvern, Scarborough",
        background:
          "Grew up on the courts of Malvern. Known as one of the fastest point guards in the Toronto circuit.",
        highlights: ["Toronto Open Run MVP 2023", "Malvern basketball alumni"],
      },
      {
        id: "sc-2",
        name: "Amadou Fall",
        number: "14",
        position: "SF",
        height: '6\'6"',
        hometown: "Scarborough, ON",
        background:
          "Multi-sport athlete who transitioned to basketball full-time. Athletic wing with elite defensive instincts.",
        highlights: ["CIS prospect 2023", "Scarborough varsity captain"],
      },
      {
        id: "sc-3",
        name: "Nate Williams",
        number: "23",
        position: "SG",
        height: '6\'2"',
        hometown: "Ajax, ON",
        background:
          "OCAA scoring leader in 2022-23. Shooter-first mentality with improving handles.",
        highlights: ["OCAA scoring leader", "Durham College All-Star"],
      },
      {
        id: "sc-4",
        name: "Rashid Clarke",
        number: "30",
        position: "PF",
        height: '6\'8"',
        hometown: "Pickering, ON",
        background:
          "Long and athletic forward. Played overseas in Spain at development level before returning home.",
        highlights: ["Spain development league veteran", "Durham Region all-star"],
      },
      {
        id: "sc-5",
        name: "Chris Okafor",
        number: "50",
        position: "C",
        height: '7\'0"',
        hometown: "Scarborough, ON",
        background:
          "The biggest name in the East. Centre with rare size for the Canadian development market.",
        highlights: ["NBL Canada prospect", "Scarborough basketball legend"],
      },
    ],
    staff: [
      { id: "sc-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "sc-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "sc-s3", name: "TBA", role: "Community Director", background: "Announcement coming 2026." },
    ],
  },

  {
    slug: "downtown-toronto",
    city: "Downtown",
    name: "Downtown",
    tag: "The Capital",
    color: "oklch(0.55 0.24 27)",
    mission: "Defend the core. Carry the crown.",
    gm: "TBA",
    venue: "Downtown Arena District",
    founded: "Founding Franchise",
    community:
      "Reinvesting in the courts where Toronto basketball was born. The Royals run youth clinics in Regent Park, Alexandra Park, and Lawrence Heights, the neighbourhoods that built the game.",
    map: { x: 500, y: 360 },
    players: [
      {
        id: "dt-1",
        name: "Marcus Reid",
        number: "3",
        position: "PG",
        height: '6\'1"',
        hometown: "Toronto, ON",
        background:
          "OCAA All-Star at Humber College. Known for his court vision and leadership in the Toronto summer circuit.",
        highlights: ["OCAA All-Star 2023", "Toronto Pro-Am Champion 2022"],
      },
      {
        id: "dt-2",
        name: "Devon Charles",
        number: "11",
        position: "SG",
        height: '6\'4"',
        hometown: "Scarborough, ON",
        background:
          "Former CEBL player with two seasons of professional experience. Sharp shooter from the mid-range.",
        highlights: ["CEBL Veteran", "Top 10 scorer 2023 season"],
      },
      {
        id: "dt-3",
        name: "Jordan Mensah",
        number: "21",
        position: "SF",
        height: '6\'7"',
        hometown: "Brampton, ON",
        background:
          "Played college ball in the U.S. at NCAA D2 level. Versatile forward who can guard 3 positions.",
        highlights: ["NCAA D2 All-Conference", "Brampton Elite AAU"],
      },
      {
        id: "dt-4",
        name: "Kofi Thompson",
        number: "32",
        position: "PF",
        height: '6\'9"',
        hometown: "Toronto, ON",
        background:
          "Humber College standout. Physical presence in the paint with soft touch on the high-low.",
        highlights: ["OCAA Champion 2022", "Regional all-star selection"],
      },
      {
        id: "dt-5",
        name: "Elijah Davis",
        number: "44",
        position: "C",
        height: '6\'11"',
        hometown: "Ajax, ON",
        background:
          "Attended John Abbott College before moving to the pro circuit. Shot blocker with developing offensive skillset.",
        highlights: ["John Abbott College starter", "NBL Canada tryout 2024"],
      },
    ],
    staff: [
      { id: "dt-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "dt-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "dt-s3", name: "TBA", role: "Player Development", background: "Announcement coming 2026." },
    ],
  },

  {
    slug: "vaughan",
    city: "Vaughan",
    name: "Vaughan",
    tag: "The North",
    color: "oklch(0.6 0.2 27)",
    mission: "Built on ambition. Built for height.",
    gm: "TBA",
    venue: "Vaughan Performance Centre",
    founded: "Founding Franchise",
    community:
      "York Region development pipeline running from Aurora to Woodbridge. Heights program focuses on development-age athletes who fall through provincial cracks.",
    map: { x: 410, y: 220 },
    players: [
      {
        id: "va-1",
        name: "Anthony Russo",
        number: "6",
        position: "PG",
        height: '6\'2"',
        hometown: "Woodbridge, ON",
        background:
          "Italian-Canadian guard with European basketball upbringing. Cerebral player who controls tempo.",
        highlights: ["York University alumni", "York Region basketball MVP"],
      },
      {
        id: "va-2",
        name: "Jamal Farhan",
        number: "13",
        position: "SG",
        height: '6\'4"',
        hometown: "Richmond Hill, ON",
        background:
          "Richmond Hill product. One of the most decorated high school guards in York Region history.",
        highlights: ["York Region high school champion", "Seneca College All-Star"],
      },
      {
        id: "va-3",
        name: "Brendan Nwosu",
        number: "22",
        position: "SF",
        height: '6\'7"',
        hometown: "Vaughan, ON",
        background:
          "Physical wing. Spent a year in the NBL Canada combine pool before joining TRT.",
        highlights: ["NBL Canada combine invite", "Vaughan high school captain"],
      },
      {
        id: "va-4",
        name: "Karan Gill",
        number: "33",
        position: "PF",
        height: '6\'8"',
        hometown: "Brampton, ON",
        background:
          "Power forward with an advanced post game. Attended Humber College where he became an OCAA force.",
        highlights: ["OCAA All-Star", "York Region development league"],
      },
      {
        id: "va-5",
        name: "Pierre Arcand",
        number: "41",
        position: "C",
        height: '6\'11"',
        hometown: "Aurora, ON",
        background:
          "French-Canadian center. Grew up in Aurora and developed through the York Region AAU system.",
        highlights: ["York Region AAU champion", "USPORTS prospect"],
      },
    ],
    staff: [
      { id: "va-s1", name: "TBA", role: "Head Coach", background: "Announcement coming 2026." },
      { id: "va-s2", name: "TBA", role: "General Manager", background: "Announcement coming 2026." },
      { id: "va-s3", name: "TBA", role: "Community Director", background: "Announcement coming 2026." },
    ],
  },
];

export type FounderTier = {
  range: [number, number];
  price: number;
};
export const TIERS: FounderTier[] = [
  { range: [1, 4], price: 5000 },
  { range: [5, 12], price: 7500 },
  { range: [13, 20], price: 10000 },
  { range: [21, 24], price: 15000 },
];

export function priceForFounder(n: number): number {
  const t = TIERS.find((t) => n >= t.range[0] && n <= t.range[1]);
  return t?.price ?? 0;
}

export const UPCOMING_GAMES = [
  {
    home: "Scarborough",
    away: "Mississauga",
    date: "August 2",
    venue: "Toronto Pan Am Sports Centre",
    doors: "4:00pm",
    tipoff: "5:30pm",
    poster: "/assets/mississauga-vs-scarborough-poster.jpg",
  },
];

export type NewsStory = {
  cat: string;
  title: string;
  subtitle: string;
  body: string[];
  img: string;
  date: string;
};

export const NEWS_STORIES: NewsStory[] = [
  {
    cat: "Announcements",
    title: "NICK WIGGINS BECOMES FIRST SIGNING IN LEAGUE HISTORY",
    subtitle: "Nick Wiggins becomes the first player signing in The Real Toronto Basketball League",
    body: [
      "The Real Toronto Basketball League has made history.",
      "The Vaughan Franchise has officially signed Nick Wiggins as the first player in league history.",
      "A 6 foot 6 guard from Vaughan, Ontario, Wiggins becomes Player 001 and the first name written into the foundation of a new professional basketball movement built for the city.",
      "This signing is bigger than one roster spot.",
      "It represents the beginning of what TRT is creating across Toronto and the GTA.",
      "A league built for players and communities.",
      "A league built to give the city something it can stand behind.",
      "For Vaughan, this is the first statement.",
      "For the league, this is the first step.",
      "TRT was created to bring professional basketball closer to home, giving Toronto talent a platform to represent where they are from, compete at a high level, and help build something that belongs to the city.",
      "Nick Wiggins is the first. He will not be the last.",
      "This is a sign of what is coming, more moments for the city.",
      "The Real Toronto Basketball League is here.",
    ],
    img: "/assets/nick-wiggins-player-001.jpg",
    date: "2026",
  },
  { cat: "Announcements", title: "TRT unveils six founding franchise markets across the GTA", img: heroImg, date: "2026", subtitle: "The league confirms its six founding markets and inaugural season plans.", body: [] },
  { cat: "Press", title: "The Real Toronto Basketball League launches with U23 pathway", img: crowdImg, date: "2026", subtitle: "TRT announces its development pathway for emerging city talent.", body: [] },
  { cat: "Videos", title: "Inside the Toronto basketball ecosystem TRT was built to serve", img: streetImg, date: "Series", subtitle: "A look at the city communities driving the league.", body: [] },
  { cat: "Community", title: "Court rebuilds: Scarborough, Brampton and beyond", img: courtImg, date: "Ongoing", subtitle: "How TRT is investing in courts and community spaces.", body: [] },
  { cat: "Franchises", title: "Downtown Royals building from the capital outward", img: playerImg, date: "Profile", subtitle: "A profile of the Downtown Royals and their city-first approach.", body: [] },
  { cat: "Announcements", title: "The 24: TRT opens applications for Founders Circle", img: the24Bg, date: "Open", subtitle: "The Founders Circle launches with 24 legacy positions.", body: [] },
];
