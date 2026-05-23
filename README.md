# Security Portfolio Template

A practical portfolio starter for cloud security professionals who want to publish a clean, professional site quickly. Designed around an AI-augmented practitioner positioning so the default copy reads like a real cloud security engineer, not a course-completion artifact.

**[→ Use this template](https://github.com/joshbotz/your-security-portfolio/generate)** to create your own copy on GitHub.

**[→ PORTFOLIO-GUIDE.md](PORTFOLIO-GUIDE.md)** — full walkthrough: get your copy → personalize → add projects → deploy → share.

---

This template helps you:
- present your background and technical approach clearly
- showcase projects, labs, and technical writeups
- make it easier for employers, peers, and recruiters to understand your work
- launch an MVP portfolio fast, then improve it over time

## Who This Is For

Cloud security professionals who want to showcase:
- AWS and cloud security projects
- detection and security tooling work
- architecture notes and technical writeups
- implementation-focused labs
- practical security documentation

## See It In 60 Seconds

No setup required — just open `index.html` in your browser to preview the template immediately.

Or use a local server:
```bash
npx serve .
# or: python3 -m http.server
```

## Start Here

5 fields to a publish-ready portfolio:

1. Clone this template to your own GitHub account.
2. Open `assets/js/config.js`.
3. Update the **5 required fields** at the top: first name, last name, role title, email, resume URL.
4. Replace `assets/img/headshot.png` with your own photo.
5. Open `setup.html` in your browser to verify everything is set.
6. Deploy when ready.

That's it. Everything else is pre-filled and works out of the box.

## File Structure

```text
YOUR-SECURITY-PORTFOLIO/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── favicon.svg
│   │   ├── headshot.png
│   │   └── og-image.png
│   └── js/
│       ├── config.js        ← Edit this (5 required fields + optional settings)
│       ├── content.js       ← Optional deeper page content
│       └── main.js          ← Binding engine (don't edit)
├── docs/
│   ├── architecture-notes.md
│   ├── student-notes.md
│   └── troubleshooting.md
├── projects/
│   ├── portfolio-platform.html
│   └── project-template.html
├── scripts/
│   ├── deploy-site.sh
│   └── validate.sh
├── site/
│   ├── main.tf
│   ├── headers.tf
│   ├── domain.tf
│   ├── outputs.tf
│   ├── variables.tf
│   └── terraform.tfvars.example
├── .github/
│   └── workflows/
│       └── deploy.yml
├── setup.html               ← Setup checklist (open locally to verify config)
├── 404.html
├── about.html
├── contact.html
├── index.html
├── projects.html
└── README.md
```

## How Config Works

The template uses three JavaScript files loaded in order:

### config.js — Edit this first
The **5 required fields** are at the very top. Below that: optional links (LinkedIn, GitHub, scheduling), skills/certifications, FAQ, "Currently Building" items, and all the pre-filled starter copy. You can ignore everything below the required fields for your first deploy.

### content.js — Optional, pre-filled
Deeper content for About, Projects, Contact, and project detail pages. Works out of the box. Delete this file and the site still works.

### main.js — Don't edit
Binding engine that connects config to the page. Renders FAQ, skills, "Currently Building", and handles social meta tags automatically.

## Current Pages

- `index.html` — Homepage with featured project, focus areas, "What I'm Working On", and FAQ
- `projects.html` — Project portfolio hub
- `about.html` — Background, approach, direction, skills & certifications
- `contact.html` — Ways to connect (email, scheduling, LinkedIn, GitHub) + FAQ
- `404.html` — Custom not found page
- `projects/portfolio-platform.html` — Featured project detail
- `projects/project-template.html` — Starter template for new projects

## Key Features

### Scheduling Link
Set `schedulingUrl` in config.js to your Calendly, Cal.com, or booking link. A "Book a Call" card appears on the contact page automatically. Leave it blank to hide it. Great for removing friction during job searches — recruiters can book time directly.

### Skills & Certifications
Add your skills and certs to the `skills` and `certifications` arrays in config.js. They render as tags on the About page sidebar. Set either to `[]` to hide.

### FAQ Section
Config-driven accordion on homepage and contact page. Update questions and answers in config.js.

### "What I'm Working On"
A simple list on the homepage showing what you're currently building. Update `currentlyBuilding` in config.js. Set to `[]` to hide.

### Social Sharing (OG Tags)
Open Graph and Twitter Card meta tags on every page. Set `siteUrl` in config.js after deploy for proper LinkedIn previews. Replace `assets/img/og-image.png` with a custom image (1200x630px recommended).

### Last Updated
Set `lastUpdated` in config.js (e.g., `"March 2026"`) to show a timestamp in the footer. Signals to visitors that the portfolio is actively maintained.

### Print Stylesheet
The site includes a print-friendly stylesheet. Recruiters can print or save-as-PDF with clean formatting — dark backgrounds are removed, navigation is hidden, and content is optimized for paper.

### Setup Checklist
Open `setup.html` in your browser to see a live dashboard of your config status — green checks for fields that are set, red X's for placeholders still remaining.

### Setup Validator
Run `bash scripts/validate.sh` before deploying to catch missing fields. The deploy script runs this automatically.

### Security Headers
CloudFront response headers policy adds HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and CSP.

### Custom Domain (Optional)
Set `domain_name` and `hosted_zone_id` in your `terraform.tfvars` to add a custom domain with ACM certificate and Route 53 DNS.

### CI/CD Deploy
GitHub Actions workflow at `.github/workflows/deploy.yml` deploys on push to main. Requires GitHub secrets for AWS OIDC role, region, bucket, and CloudFront ID.

## How To Add A New Project

1. Copy the template:
   ```bash
   cp projects/project-template.html projects/your-project-name.html
   ```

2. Replace all `[BRACKETED]` placeholder text. Search for `[` to find them.

3. Add a project card to `projects.html` — the template includes the exact HTML to copy in its comments.

4. Preview locally, then deploy.

## Images and Branding

Replace these files with your own:
- `assets/img/headshot.png` — your photo
- `assets/img/favicon.svg` — your favicon (optional)
- `assets/img/og-image.png` — social sharing preview image (1200x630px, optional)

## Deployment

### First-time setup

```bash
aws --version
terraform version
aws configure
aws sts get-caller-identity

cd site
cp terraform.tfvars.example terraform.tfvars   # Create your local config
# Edit terraform.tfvars with your bucket name, region, etc.
terraform init
terraform validate
terraform plan
terraform apply
terraform output
cd ..

bash scripts/deploy-site.sh
```

### Normal content updates

```bash
bash scripts/deploy-site.sh
```

### Infrastructure updates

```bash
cd site
terraform plan
terraform apply
cd ..
bash scripts/deploy-site.sh
```

## Teardown

```bash
cd site
aws s3 rm s3://YOUR_BUCKET_NAME --recursive
terraform destroy
```

## Security Notes

- Private S3 origin with CloudFront-only access
- HTTPS delivery enforced
- Encryption at rest (AES256)
- Versioning enabled
- Security response headers (HSTS, CSP, X-Frame-Options)
- Infrastructure as code with Terraform
- Low attack surface through static site architecture

### Important: Keep Secrets Out of Your Public Repo

If you fork this template to a **public** GitHub repository, never commit:

- **API keys or tokens** of any kind — do not put them in JavaScript files, HTML, or config
- **`terraform.tfvars`** — this file is `.gitignore`d by default; use `terraform.tfvars.example` as your reference and create a local copy
- **`.env` files** — environment variables stay local
- **Private keys** (`.pem`, `.key`) — never commit these

The `.gitignore` in this template is pre-configured to block these files, but always double-check before pushing. If you accidentally commit a secret, rotating the credential is the only safe fix — removing the file from future commits does not erase it from git history.
