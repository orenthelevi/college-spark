# Spark

Spark is a college major discovery app designed to help students choose what to study based on genuine intellectual curiosity, not just career outcomes. It offers honest, zero-hype previews of what it actually feels like to think inside 28 different fields.

## Local Setup

1. **Clone the repository and install dependencies:**
   ```bash
   git clone <repository-url>
   cd spark
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env.local` file in the root directory and add your Anthropic API key to enable the AI-generated "Go Deeper" feature:
   ```env
   ANTHROPIC_API_KEY=sk-ant-api03-...
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding a New Major

All major data lives in `/data/majors.ts`. To add a new one, append an object matching the `Major` interface to the `majors` array:

- `id`: Unique string identifier
- `slug`: URL-friendly string (e.g., `"computer-science"`)
- `name`: Display name (e.g., `"Computer Science"`)
- `tagline`: One short line capturing what's exciting about the field
- `cluster`: Must be one of `Sciences`, `Social Sciences`, `Humanities`, `Applied`, or `Interdisciplinary`
- `bigQuestion`: A provocative question central to the field
- `dayInLife`: 2–3 honest sentences about what the coursework actually entails
- `twoAmTest`: Specific, granular examples of what obsession in this field looks like
- `careerPaths`: Array of 3–4 real-world paths students ended up taking
- `relatedMajors`: Array of slugs connecting to other majors in the database
- `concepts`: Array of two `{ title, explanation }` objects covering fundamental ideas

## Deployment

Deploying to Vercel is seamless:

1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New → Project**.
3. Import your GitHub repository.
4. Expand the **Environment Variables** section and add `ANTHROPIC_API_KEY` with your secret key.
5. Click **Deploy**. Vercel will automatically detect the Next.js framework and build the app.
