# Portfolio Guide

A practical walkthrough for using this portfolio template — for anyone shipping a cloud security portfolio.

This guide covers the full journey: get your own copy → personalize → add projects → deploy → share. Take it section by section. The whole thing is designed to be doable in a focused afternoon.

---

## 1. Get your own copy of the template

This repo is a [GitHub Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). You don't fork it — you create a new independent repo from it.

1. Go to **[joshbotz/your-security-portfolio](https://github.com/joshbotz/your-security-portfolio)** on GitHub.
2. Click the green **"Use this template"** button → **"Create a new repository"**.
3. Name it (e.g., `firstname-portfolio`), set to **public** (recruiters need to see it), and create.
4. Clone your new repo locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```
5. Open it in VS Code (or your editor of choice).

Your repo is now yours. Independent of the template, no fork relationship, you control everything.

---

## 2. Update the 5 required fields

This gets you a publish-ready site in under five minutes.

Open `assets/js/config.js`. The first block has 5 fields — update them:

```js
siteFirstName: "Jane",
siteLastName: "Doe",
roleTitle: "Cloud Security Practitioner",
email: "jane@example.com",
resumeUrl: "https://drive.google.com/...",
```

Then replace `assets/img/headshot.png` with your own photo (keep the same filename to avoid touching paths).

Open `setup.html` in your browser to verify everything is wired up. Green checks mean you're ready.

---

## 3. Preview locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. The site is now live on your machine — click around, make sure the headshot loads, the nav works, the FAQ expands.

---

## 4. Personalize the rest of the config

Still in `assets/js/config.js`. Below the 5 required fields, you'll find optional sections:

- **Optional links** — LinkedIn, GitHub, scheduling. Leave blank to hide.
- **Skills & Certifications** — appear as tags on the About page.
- **Currently Building** — short list of what you're working on.
- **FAQ** — defaults are AI-augmented practitioner-flavored; rewrite in your voice.

For deeper About-page content (the three "How I Work" / "How AI Fits In" / "What I'm Building Toward" sections), edit `assets/js/content.js`. Defaults are practitioner-shaped — make them sound like you.

**You can ignore everything else in `config.js` for your first deploy.** It's all pre-filled and works.

---

## 5. Add project pages

This portfolio template ships with **two example pages** in `projects/`:

- `portfolio-platform.html` — the meta page (the portfolio as a project itself)
- `project-template.html` — a generic blank-canvas template for any project you want to add

You add real project pages by either:

### Option A — Add an original project

```bash
cp projects/project-template.html projects/my-aws-hardening-lab.html
```

Open the new file. Search for `[` to find every placeholder. Replace each one with your real content. Pay attention to:

- The `<!-- REWRITE IN YOUR VOICE -->` comments — those mark paragraphs you should rewrite, not just fill in
- The `<title>` tag at the top
- The `<meta name="description">` tag
- Section: **AI-Augmented Workflow** — strongest signal on the page if AI was part of how you worked
- Section: **Limitations & Out of Scope** — naming what you didn't cover is a strength
- Section: **What I Learned** — two prompts ("What changed in how I think" and "What I'd do differently next time")

Then add a card to `projects.html` in the `projects-grid` section. The card HTML is provided in the comments at the top of `project-template.html` — copy it, update the title / description / href, paste.

### Option B — Adapt the public Wazuh AI SOC Lab as a portfolio project

If you run [Wazuh AI SOC Lab](https://github.com/joshbotz/wazuh-ai-soc-lab) (open-source SIEM + AI investigation lab on AWS), the experience generates a real portfolio artifact — six-phase investigation, custom detection rule, SOC 2 evidence package. That's perfect material for a portfolio project page.

To turn it into a project page:

1. Copy `projects/project-template.html` into a new file (e.g., `projects/wazuh-soc-lab.html`).
2. Fill in placeholders with your real numbers from the lab: number of agents, MITRE TTPs exercised, hunt dispositions, the custom rule you wrote, the SOC 2 controls you covered.
3. Rewrite the `<!-- REWRITE IN YOUR VOICE -->` paragraphs.
4. Add a card to `projects.html`.

Your portfolio should only contain work you can defend in an interview. If you didn't actually run the lab end-to-end, don't put it on the site.

### Delete the "Add Yours" guidepost cards

Once you have at least one real project card, delete the two "Add Yours" guidepost cards in `projects.html` (the ones labeled "Your Original Project" and "Course Project Showcase"). They're scaffolding.

---

## 6. Deploy to AWS

The template includes Terraform for S3 + CloudFront + optional custom domain.

### First-time setup

```bash
aws --version          # confirm AWS CLI installed
terraform version      # confirm Terraform installed
aws sts get-caller-identity   # confirm AWS auth works

cd site
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars — set bucket name, region, etc.

terraform init
terraform validate
terraform plan
terraform apply
terraform output

cd ..
bash scripts/deploy-site.sh
```

Your site is now live on CloudFront. Grab the CloudFront URL from the Terraform output.

### Set the site URL for social sharing

After deploy, open `assets/js/config.js` and set:

```js
siteUrl: "https://d1234abcd.cloudfront.net",   // or your custom domain
```

This makes Open Graph / LinkedIn previews work correctly.

Redeploy to push the change:

```bash
bash scripts/deploy-site.sh
```

### Optional — custom domain

Set `domain_name` and `hosted_zone_id` in `terraform.tfvars` and re-apply. The Terraform configures Route 53 + ACM automatically.

### Subsequent updates

For content changes (HTML, config, images):
```bash
bash scripts/deploy-site.sh
```

For infrastructure changes (Terraform):
```bash
cd site && terraform plan && terraform apply && cd ..
bash scripts/deploy-site.sh
```

---

## 7. Share it

Your portfolio is live. Use it.

- **Share on LinkedIn** with a one-paragraph note about the work.
- **Add the URL to your resume header** — directly under your name.
- **Send it to people you'd actually want feedback from** — a senior practitioner in your network, a mentor, an old manager.

The portfolio gets stronger as you ship more projects to it. Add one project per month and in a year you have a body of work most candidates can't match.

---

## Common mistakes to avoid

- **Don't ship default copy.** The AI-augmented practitioner positioning in `config.js` and `content.js` is a starting draft. Rewrite in your own voice — recruiters can tell when copy is templated.
- **Don't leave brackets in published pages.** Search for `[` before deploying. The validator (`bash scripts/validate.sh`) catches most but not all.
- **Don't add projects you can't defend in an interview.** A portfolio with two real projects beats a portfolio with five thin ones, every time.
- **Don't hide the Limitations sections.** They look like weakness; they read like seniority. Recruiters notice.
- **Don't commit secrets.** `terraform.tfvars`, `.env`, `.pem`/`.key` files are all `.gitignore`d. If you accidentally commit one, rotate it — deleting from history doesn't erase it from cloned forks.

---

## Where to find help

- **Issues on this repo** — for bugs in the template itself
- **Existing docs** — `docs/student-notes.md`, `docs/architecture-notes.md`, `docs/troubleshooting.md`

---

Use the template well — the work you put in shows.
