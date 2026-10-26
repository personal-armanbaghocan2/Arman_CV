# Arman Personal CV & Portfolio

A responsive personal curriculum vitae and academic portfolio for **Arman Jr. M. Baghocan**, a BS Information Technology student at Davao del Norte State College. Built with plain HTML, CSS, and JavaScript for IT415 / App Dev & Emerging Tech.

## Student information

- **Complete name:** Arman Jr. M. Baghocan
- **Year level:** 4th Year
- **Set / Section:** Set B
- **Subject:** IT415 / App Dev & Emerging Tech

## Links and publication status

- **Personal GitHub:** [personal-armanbaghocan2](https://github.com/personal-armanbaghocan2)
- **Repository supplied by the owner:** [Arman_CV](https://github.com/personal-armanbaghocan2/Arman_CV)
- **Live Vercel website:** `PENDING — add the verified public URL after deployment.`

This update is local and deployment-ready. It has not been committed, pushed, or deployed. The supplied repository's public availability could not be verified during this session, so the portfolio links to the personal profile instead of presenting an unverified repository as public.

## Technologies

- Semantic HTML5, CSS Grid/Flexbox, media queries, and vanilla JavaScript
- Inline SVG icons and a local SVG favicon
- Git and GitHub for source history
- Vercel-compatible static hosting; no application dependencies, package installation, build step, backend, or environment secrets

## Features

- Professional introduction with the original portrait, career objective, and interests
- Basic information, education timeline, and categorized skills
- Actual CV project with a clearly labeled original CSS illustration and expandable details
- Verified part-time employment as a Virtual Labeler at Ryu Data Centre, displayed separately from coursework
- Clearly identified academic experience and academic development
- Personal GitHub profile, original Facebook account, email, and telephone links
- Responsive navigation with Escape/outside-click dismissal and keyboard support
- Active section links, subtle hover effects, smooth scrolling, and scroll reveals
- Reduced-motion support, skip link, visible focus, and meaningful image text
- Content and navigation remain available without JavaScript
- Print / Save CV uses the browser print dialog; choose **Save as PDF**
- Print styling exposes all sections and project details

## Project structure

```text
personal_cv_page/
├── index.html             # CV content, semantic sections, and SVG icon symbols
├── style.css              # Shared design, responsive rules, and print styling
├── script.js              # Navigation, reveals, active links, and printing
├── assets/
│   ├── arman.png           # Original profile photograph, unchanged
│   └── favicon.svg        # Local AB monogram
├── vercel.json            # Static deployment settings
├── DEVELOPMENT_REPORT.md  # Assessment, validation, and remaining information
├── README.md
└── .gitignore
```

Local QA output is ignored under `output/`; it is not required to serve the website.

## Run locally

Open `index.html` directly in a browser, or use Python for a local HTTP preview:

```powershell
Set-Location 'C:\Users\User\Downloads\Arman_CV\personal_cv_page'
python -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). Stop the server with `Ctrl+C`. No Python application code or server is needed in production.

## Content accuracy

The original name, portrait, location, email, phone, school names, school dates, year level, and section are retained. The senior-high program's spelling is corrected to **Electrical Installation and Maintenance**.

Only this CV project is verified by the existing source. Campus Store POS, the Asuncion capstone, and cybersecurity lab work are not presented as completed experience without confirmation. No municipal records, screenshots, or credentials are included. Skills are grounded in the original CV and this web project; no proficiency percentages are assigned.

The owner confirmed the following actual employment, displayed separately from academic experience:

- **Job title:** Virtual Labeler
- **Company:** Ryu Data Centre
- **Employment type:** Part-Time
- **Employment period:** August 2026 – Present
- **Responsibilities:** Label images according to assigned tasks. Identify objects within images.

The introduction, About Me, and career objective reflect this part-time experience. No AI model training, dataset management, supervision, annotation software, quality assurance, metrics, or additional employment credentials are claimed.

Academic development substitutes for unverified awards or certifications. LinkedIn is omitted until an actual profile URL is supplied. Facebook is retained from the original CV; its account availability could not be independently checked.

## Deploy to Vercel — owner action required

1. Review the local website and `DEVELOPMENT_REPORT.md`.
2. Review `git diff` and `git status`. Confirm that the repository is available under the intended personal GitHub account.
3. Create a meaningful commit for these changes and push `main` only when you choose to publish. Existing Git history and remotes must be preserved.
4. In Vercel, import `personal-armanbaghocan2/Arman_CV`.
5. Set **Root Directory** to the directory containing `index.html`. This checkout has it at the repository root, so use `./` unless the remote structure differs.
6. Set **Framework Preset** to **Other**, leave **Build Command** empty, and use `.` as **Output Directory**. `vercel.json` already declares these static settings.
7. Deploy, open the actual deployment URL, and confirm that it is publicly accessible without signing in.
8. Verify the portrait, navigation, project details, email/phone/social destinations, mobile layouts, reduced motion, keyboard access, and print/PDF output on the live website.
9. Replace the pending live-link placeholder above with the verified Vercel URL.

These settings follow [Vercel's static build documentation](https://vercel.com/docs/builds/configure-a-build) and [configuration reference](https://vercel.com/docs/project-configuration/vercel-json). Deployment success is not claimed until the real public website is checked.

## Validation

See `DEVELOPMENT_REPORT.md` for the checks actually performed, results, limitations, and content requirements that need owner information. Local QA screenshots and browser output are excluded from Git.
