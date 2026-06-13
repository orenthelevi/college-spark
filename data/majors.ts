export type Cluster =
  | "Sciences"
  | "Social Sciences"
  | "Humanities"
  | "Applied"
  | "Interdisciplinary";

export interface Concept {
  title: string;
  explanation: string;
}

export interface Major {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  cluster: Cluster;
  bigQuestion: string;
  dayInLife: string;
  twoAmTest: string;
  careerPaths: string[];
  relatedMajors: string[];
  concepts: Concept[];
}

export const majors: Major[] = [
  {
    id: "philosophy",
    slug: "philosophy",
    name: "Philosophy",
    tagline: "The field that asks whether the question you just asked is even a meaningful question.",
    cluster: "Humanities",
    bigQuestion:
      "What can we actually know, and how do we know that we know it?",
    dayInLife:
      "You read 30 pages of dense argument before class, then spend an hour dismantling it with twelve other people. Your homework is a 5-page paper defending a position you might not even agree with — the point is whether you can make the argument airtight. You will rewrite your thesis sentence more times than you thought possible.",
    twoAmTest:
      "You're the person who lies awake wondering whether free will is compatible with physics, who gets annoyed when someone uses 'begging the question' wrong, and who genuinely enjoys reading the same paragraph four times because each reading changes what it means.",
    careerPaths: [
      "People who studied this ended up in law — philosophy majors consistently score highest on the LSAT.",
      "People who studied this ended up in tech ethics and AI policy, asking the questions engineers don't know how to frame.",
      "People who studied this ended up in management consulting, because it turns out the ability to find holes in an argument is commercially valuable.",
      "People who studied this ended up in academia, writing books that twelve people read but that change how those twelve people think about everything.",
    ],
    relatedMajors: ["history", "neuroscience"],
    concepts: [
      {
        title: "The Trolley Problem (and why ethicists are tired of it)",
        explanation:
          "You've seen the meme, but the actual point isn't about trolleys. It's a tool for exposing the difference between consequentialist thinking (maximize good outcomes) and deontological thinking (some actions are wrong regardless of outcomes). The interesting part is that most people switch between these frameworks depending on how the question is framed — and philosophy wants to know why.",
      },
      {
        title: "Epistemological Skepticism",
        explanation:
          "Descartes asked: what if everything you perceive is a lie fed to you by a demon? That sounds absurd, but try to prove him wrong without assuming the very things he's questioning. This isn't a party trick — it's the foundation of every serious theory of knowledge, and working through it changes how you evaluate evidence in any field.",
      },
    ],
  },
  {
    id: "neuroscience",
    slug: "neuroscience",
    name: "Neuroscience",
    tagline: "The brain trying to understand itself, using itself.",
    cluster: "Sciences",
    bigQuestion:
      "How does three pounds of wet tissue produce consciousness, memory, and the feeling of being you?",
    dayInLife:
      "Morning: a lecture on ion channel dynamics with equations you'll need from calculus and physics. Afternoon: four hours in a lab pipetting solutions and staring at fluorescent neurons under a microscope. You'll read papers from both biology journals and psychology journals, and you'll need the vocabulary for both. Some weeks feel like a biology degree; other weeks feel like a philosophy degree that requires goggles.",
    twoAmTest:
      "You watch a documentary about split-brain patients and can't stop thinking about what it means for personal identity. You read about a new optogenetics paper and immediately want to know the methodology. You've caught yourself wondering whether your decision to stay up late was made by 'you' or by your prefrontal cortex — and whether there's a difference.",
    careerPaths: [
      "People who studied this ended up in medical school, especially psychiatry and neurology, where the gap between brain and mind is the daily work.",
      "People who studied this ended up in pharmaceutical research, designing drugs by understanding receptor binding at a molecular level.",
      "People who studied this ended up in tech companies working on brain-computer interfaces and neural signal processing.",
      "People who studied this ended up in research labs running fMRI studies, publishing papers, and slowly assembling a picture of how cognition works.",
    ],
    relatedMajors: ["philosophy", "computer-science"],
    concepts: [
      {
        title: "Neuroplasticity",
        explanation:
          "Your brain physically rewires itself based on what you do repeatedly. London taxi drivers have measurably larger hippocampi from memorizing city streets. This isn't a metaphor — learning literally changes the structure of your brain, and understanding how is one of the central projects of modern neuroscience.",
      },
      {
        title: "The Hard Problem of Consciousness",
        explanation:
          "We can explain which brain regions activate during pain, but that doesn't explain why pain feels like something. This gap — between explaining the mechanism and explaining the experience — is called the hard problem, and it sits right at the border where neuroscience meets philosophy. Nobody has solved it. Some people think it's unsolvable. That's part of the appeal.",
      },
    ],
  },
  {
    id: "computer-science",
    slug: "computer-science",
    name: "Computer Science",
    tagline: "Not about computers, really. It's about what can be computed — and what can't.",
    cluster: "Applied",
    bigQuestion:
      "What problems are fundamentally solvable by a machine, and where are the hard limits?",
    dayInLife:
      "You'll spend less time typing code than you expect and more time staring at a whiteboard. A typical week: a theory lecture on why certain problems take exponentially longer to solve no matter how fast your hardware gets, a systems lab where you build something that actually runs, and hours of debugging where the real learning happens. The assignment that takes you 20 hours will be 40 lines of code.",
    twoAmTest:
      "You see a slow process in the real world and immediately think about how to automate it. You've argued with someone about whether P equals NP even though neither of you can prove it. You've spent three hours on a bug that turned out to be a missing semicolon, and instead of being angry, you felt a strange satisfaction when you found it.",
    careerPaths: [
      "People who studied this ended up building software at companies large and small — this is the obvious path but far from the only one.",
      "People who studied this ended up in quantitative finance, because Wall Street discovered that people who can think about algorithms can think about markets.",
      "People who studied this ended up in research, pushing the boundaries of machine learning, cryptography, or distributed systems.",
      "People who studied this ended up founding companies, because understanding what's technically possible is a surprisingly rare skill among people with business ideas.",
    ],
    relatedMajors: ["economics", "neuroscience"],
    concepts: [
      {
        title: "Big-O Notation",
        explanation:
          "When you write a program to search through a million items, does it take a million steps or a million-times-a-million steps? Big-O is how computer scientists talk about efficiency without getting bogged down in hardware details. It's the difference between an algorithm that finishes in a second and one that won't finish before the sun burns out — and learning to see that difference is what separates coding from computer science.",
      },
      {
        title: "The Halting Problem",
        explanation:
          "Alan Turing proved in 1936 that no program can reliably determine whether any other arbitrary program will eventually stop running or loop forever. This isn't a practical complaint — it's a fundamental limit on what computation can do. It means there are questions that are perfectly well-defined but mathematically impossible for any computer to answer. That discovery created the field.",
      },
    ],
  },
  {
    id: "economics",
    slug: "economics",
    name: "Economics",
    tagline: "The study of how people make choices when they can't have everything.",
    cluster: "Social Sciences",
    bigQuestion:
      "Why do billions of individual decisions, each locally rational, sometimes produce collectively irrational outcomes?",
    dayInLife:
      "You'll toggle between two modes. Some weeks look like a math class: you're optimizing functions, running regressions, and proving that equilibria exist. Other weeks look like a debate about policy: should cities impose rent control? The math says one thing; the politics say another; your professor wants you to hold both in your head simultaneously. Expect more calculus than you'd guess and more writing than the math majors get.",
    twoAmTest:
      "You read a headline about rising rent prices and immediately think about supply elasticity. You've gotten into an argument about whether the minimum wage helps or hurts the people it's supposed to help — and you actually looked at the data afterward. You find yourself noticing incentive structures everywhere: in your university's grading policy, in the layout of the dining hall, in why your roommate never does the dishes.",
    careerPaths: [
      "People who studied this ended up in policy — at the Fed, the World Bank, or in congressional offices where economic analysis actually shapes legislation.",
      "People who studied this ended up in finance and consulting, because the modeling toolkit transfers directly.",
      "People who studied this ended up in data science, since the econometrics training is essentially applied statistics with causal inference baked in.",
      "People who studied this ended up in journalism, explaining economic forces to the public in ways that cut through partisan noise.",
    ],
    relatedMajors: ["philosophy", "computer-science"],
    concepts: [
      {
        title: "Opportunity Cost",
        explanation:
          "The cost of anything isn't just what you pay for it — it's what you gave up by not choosing the next best alternative. This sounds simple, but it changes how you think about every decision. Going to college doesn't just cost tuition; it costs four years of salary you didn't earn. Once you internalize this, you can't stop applying it, and that's sort of the point.",
      },
      {
        title: "The Prisoner's Dilemma",
        explanation:
          "Two rational individuals, each acting in their own self-interest, produce an outcome that's worse for both of them. This isn't a puzzle — it's a model for arms races, climate negotiations, price wars, and why your group project always falls apart. Economics is obsessed with situations where individual rationality leads to collective stupidity, and with designing mechanisms that fix it.",
      },
    ],
  },
  {
    id: "history",
    slug: "history",
    name: "History",
    tagline: "Not memorizing dates. Figuring out why people who aren't stupid did things that look stupid.",
    cluster: "Humanities",
    bigQuestion:
      "How do we reconstruct what actually happened when every source has an agenda?",
    dayInLife:
      "You'll read primary sources — letters, treaties, tax records, propaganda posters — and try to figure out what they reveal about a world you can't visit. Seminars are arguments: not about what happened (that's often settled), but about why it happened and whose account to trust. Your papers require footnotes on your footnotes. A good week involves an archival discovery that reframes something you thought you understood.",
    twoAmTest:
      "You read a news article about a current political crisis and immediately think of three historical parallels — then catch yourself and think about why historical analogies are usually misleading. You've gone down a four-hour Wikipedia rabbit hole that started with the Haitian Revolution and ended with sugar trade economics. You get irritated when movies get the period details wrong, not because you're pedantic, but because the details are the point.",
    careerPaths: [
      "People who studied this ended up in law, because legal reasoning is essentially arguing about how to interpret texts and precedents — which is what historians do every day.",
      "People who studied this ended up in journalism and nonfiction writing, telling true stories with the narrative skill that history training develops.",
      "People who studied this ended up in public policy and diplomacy, where understanding how past decisions played out is the only real guide to making new ones.",
      "People who studied this ended up in museums, archives, and cultural institutions, preserving and interpreting the material record for everyone else.",
    ],
    relatedMajors: ["philosophy", "economics"],
    concepts: [
      {
        title: "Primary vs. Secondary Sources",
        explanation:
          "A primary source is something produced during the period you're studying — a diary, a census, a photograph. A secondary source is a historian's interpretation of those things. The discipline lives in the tension between them: the primary source tells you what someone said; the historian tells you what it might mean. Learning to read a 400-year-old document and extract meaning from it without projecting your own assumptions is the core skill, and it's harder than it sounds.",
      },
      {
        title: "Historiography",
        explanation:
          "This is the history of history — studying how different generations of historians have interpreted the same events. The French Revolution meant one thing to historians in 1850, something different in 1950, and something else today. The facts didn't change; the questions did. Understanding this teaches you that all knowledge is produced by people with frameworks and blind spots, including you.",
      },
    ],
  },
];
