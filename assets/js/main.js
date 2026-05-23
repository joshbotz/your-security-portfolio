/*
  ==========================================================
  PORTFOLIO ENGINE — DO NOT EDIT
  ==========================================================
  This file binds config values to the page. You should
  never need to change anything here.

  Edit config.js for identity, copy, and settings.
  Edit content.js for deeper page content (optional).
  ==========================================================
*/

/* --- Helper Functions --- */

function setText(selector, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach(function (el) {
    el.textContent = value;
  });
}

function setHref(selector, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach(function (el) {
    el.setAttribute("href", value);
  });
}

function setSrc(selector, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach(function (el) {
    el.setAttribute("src", value);
  });
}

function setMailto(selector, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach(function (el) {
    el.setAttribute("href", "mailto:" + value);
  });
}

function hideElements(selector) {
  document.querySelectorAll(selector).forEach(function (el) {
    el.style.display = "none";
  });
}

function bindOptionalHref(selector, value) {
  var trimmed = typeof value === "string" ? value.trim() : "";
  if (!trimmed) {
    hideElements(selector);
    return;
  }
  setHref(selector, trimmed);
}


/* --- Page Binding --- */

document.addEventListener("DOMContentLoaded", function () {

  // Merge optional Tier 3 content into SITE_CONFIG
  if (typeof SITE_CONTENT !== "undefined") {
    Object.assign(SITE_CONFIG, SITE_CONTENT);
  }

  // Auto-derive fields the user doesn't need to set manually
  var first = SITE_CONFIG.siteFirstName || "";
  var last = SITE_CONFIG.siteLastName || "";
  if (!SITE_CONFIG.siteName) {
    SITE_CONFIG.siteName = (first + " " + last).trim() || "My Portfolio";
  }
  SITE_CONFIG.siteFullName = (first + " " + last).trim();
  SITE_CONFIG.footerText = "\u00a9 " + SITE_CONFIG.copyrightYear + " " + SITE_CONFIG.siteName;

  var isNestedProjectPage =
    window.location.pathname.includes("/projects/") ||
    window.location.href.includes("/projects/");

  var headshotPath = isNestedProjectPage
    ? SITE_CONFIG.headshotPathNested
    : SITE_CONFIG.headshotPath;

  var faviconPath = isNestedProjectPage
    ? SITE_CONFIG.faviconPathNested
    : SITE_CONFIG.faviconPath;

  // --- Core identity ---
  setText("[data-site-name]", SITE_CONFIG.siteName);
  setText("[data-site-first-name]", SITE_CONFIG.siteFirstName);
  setText("[data-site-last-name]", SITE_CONFIG.siteLastName);
  setText("[data-site-full-name]", SITE_CONFIG.siteFullName);
  setText("[data-site-tagline]", SITE_CONFIG.siteTagline);
  setText("[data-site-tagline-short]", SITE_CONFIG.siteTaglineShort);
  setText("[data-home-hero-title]", SITE_CONFIG.homeHeroTitle);
  setText("[data-home-hero-subtitle]", SITE_CONFIG.homeHeroSubtitle);
  setText("[data-projects-hero-title]", SITE_CONFIG.projectsHeroTitle);
  setText("[data-projects-hero-subtitle]", SITE_CONFIG.projectsHeroSubtitle);
  setText("[data-about-hero-title]", SITE_CONFIG.aboutHeroTitle);
  setText("[data-about-hero-subtitle]", SITE_CONFIG.aboutHeroSubtitle);
  setText("[data-contact-hero-title]", SITE_CONFIG.contactHeroTitle);
  setText("[data-contact-hero-subtitle]", SITE_CONFIG.contactHeroSubtitle);
  setText("[data-site-role-title]", SITE_CONFIG.roleTitle);
  setText("[data-site-focus-line]", SITE_CONFIG.focusLine);

  // --- CTA labels ---
  setText("[data-cta-view-projects]", SITE_CONFIG.ctaViewProjects);
  setText("[data-cta-browse-projects]", SITE_CONFIG.ctaBrowseProjects);
  setText("[data-cta-open-starter-project]", SITE_CONFIG.ctaOpenStarterProject);
  setText("[data-cta-read-project-details]", SITE_CONFIG.ctaReadProjectDetails);
  setText("[data-cta-go-home]", SITE_CONFIG.ctaGoHome);

  // --- Short copy ---
  setText("[data-tagline-short]", SITE_CONFIG.taglineShort);
  setText("[data-tagline-shorter]", SITE_CONFIG.taglineShorter);
  setText("[data-starter-short]", SITE_CONFIG.starterShort);
  setText("[data-starter-shorter]", SITE_CONFIG.starterShorter);
  setText("[data-proof-of-work-short]", SITE_CONFIG.proofOfWorkShort);
  setText("[data-home-value-one-title]", SITE_CONFIG.homeValueOneTitle);
  setText("[data-home-value-one-body]", SITE_CONFIG.homeValueOneBody);
  setText("[data-home-value-two-title]", SITE_CONFIG.homeValueTwoTitle);
  setText("[data-home-value-two-body]", SITE_CONFIG.homeValueTwoBody);
  setText("[data-home-value-three-title]", SITE_CONFIG.homeValueThreeTitle);
  setText("[data-home-value-three-body]", SITE_CONFIG.homeValueThreeBody);
  setText("[data-about-snapshot-strength]", SITE_CONFIG.aboutSnapshotStrength);

  // --- Featured project ---
  setText("[data-featured-project-title]", SITE_CONFIG.featuredProjectTitle);
  setText("[data-featured-project-short-description]", SITE_CONFIG.featuredProjectShortDescription);
  setText("[data-starter-project-label]", SITE_CONFIG.starterProjectLabel);
  setText("[data-starter-project-eyebrow]", SITE_CONFIG.starterProjectEyebrow);
  setText("[data-starter-project-outcome]", SITE_CONFIG.starterProjectOutcome);
  setText("[data-starter-project-stack-short]", SITE_CONFIG.starterProjectStackShort);

  // --- Focus areas ---
  setText("[data-focus-area-one-title]", SITE_CONFIG.focusAreaOneTitle);
  setText("[data-focus-area-one-description]", SITE_CONFIG.focusAreaOneDescription);
  setText("[data-focus-area-two-title]", SITE_CONFIG.focusAreaTwoTitle);
  setText("[data-focus-area-two-description]", SITE_CONFIG.focusAreaTwoDescription);
  setText("[data-focus-area-three-title]", SITE_CONFIG.focusAreaThreeTitle);
  setText("[data-focus-area-three-description]", SITE_CONFIG.focusAreaThreeDescription);
  setText("[data-focus-areas-section-desc]", SITE_CONFIG.focusAreasSectionDesc);

  // --- Footer ---
  setText("[data-site-year]", SITE_CONFIG.copyrightYear);
  setText("[data-site-footer]", SITE_CONFIG.footerText);

  // --- Required links ---
  setHref("[data-site-template-repo]", SITE_CONFIG.templateRepoUrl);
  setMailto("[data-site-email]", SITE_CONFIG.email);
  setText("[data-site-email-text]", SITE_CONFIG.email);
  setHref("[data-site-resume]", SITE_CONFIG.resumeUrl);

  // --- Optional links ---
  bindOptionalHref("[data-site-linkedin]", SITE_CONFIG.linkedinUrl);
  bindOptionalHref("[data-site-github]", SITE_CONFIG.githubUrl);
  bindOptionalHref("[data-site-youtube]", SITE_CONFIG.youtubeUrl);
  bindOptionalHref("[data-site-website]", SITE_CONFIG.websiteUrl);
  bindOptionalHref("[data-site-scheduling]", SITE_CONFIG.schedulingUrl);

  // --- Link / button labels ---
  setText("[data-site-linkedin-label]", SITE_CONFIG.linkedinLabel);
  setText("[data-site-github-label]", SITE_CONFIG.githubLabel);
  setText("[data-site-email-label]", SITE_CONFIG.emailLabel);
  setText("[data-site-youtube-label]", SITE_CONFIG.youtubeLabel);
  setText("[data-site-website-label]", SITE_CONFIG.websiteLabel);
  setText("[data-site-resume-label]", SITE_CONFIG.resumeLabel);
  setText("[data-site-scheduling-label]", SITE_CONFIG.schedulingLabel);

  // --- Template promo ---
  setText("[data-template-promo-title]", SITE_CONFIG.templatePromoTitle);
  setText("[data-template-promo-text]", SITE_CONFIG.templatePromoText);
  setText("[data-template-promo-github-label]", SITE_CONFIG.templatePromoGithubLabel);

  // --- Shared assets ---
  setSrc("[data-site-headshot]", headshotPath);
  setHref("[data-site-favicon]", faviconPath);

  // --- Manifest labels ---
  setText("[data-manifest-portfolio-label]", SITE_CONFIG.manifestPortfolioLabel);
  setText("[data-manifest-projects-label]", SITE_CONFIG.manifestProjectsLabel);
  setText("[data-manifest-architecture-label]", SITE_CONFIG.manifestArchitectureLabel);

  // --- Meta descriptions ---
  document.querySelectorAll("meta[data-meta-description]").forEach(function (el) {
    var key = el.getAttribute("data-meta-description");
    if (key && SITE_CONFIG[key]) {
      el.setAttribute("content", SITE_CONFIG[key]);
    }
  });

  // --- About page ---
  setText("[data-about-section-one-heading]", SITE_CONFIG.aboutSectionOneHeading);
  setText("[data-about-section-one-body]", SITE_CONFIG.aboutSectionOneBody);
  setText("[data-about-section-two-heading]", SITE_CONFIG.aboutSectionTwoHeading);
  setText("[data-about-section-two-body]", SITE_CONFIG.aboutSectionTwoBody);
  setText("[data-about-section-three-heading]", SITE_CONFIG.aboutSectionThreeHeading);
  setText("[data-about-section-three-body]", SITE_CONFIG.aboutSectionThreeBody);
  setText("[data-about-sidebar-projects-desc]", SITE_CONFIG.aboutSidebarProjectsDesc);
  setText("[data-about-sidebar-architecture-desc]", SITE_CONFIG.aboutSidebarArchitectureDesc);
  setText("[data-about-sidebar-direction-desc]", SITE_CONFIG.aboutSidebarDirectionDesc);
  setText("[data-about-feature-tag-one]", SITE_CONFIG.aboutFeatureTagOne);
  setText("[data-about-feature-tag-two]", SITE_CONFIG.aboutFeatureTagTwo);
  setText("[data-about-feature-tag-three]", SITE_CONFIG.aboutFeatureTagThree);
  setText("[data-about-next-step-text]", SITE_CONFIG.aboutNextStepText);

  // --- Projects page ---
  setText("[data-featured-section-desc]", SITE_CONFIG.featuredSectionDesc);
  setText("[data-projects-category-section-heading]", SITE_CONFIG.projectsCategorySectionHeading);
  setText("[data-projects-category-section-desc]", SITE_CONFIG.projectsCategorySectionDesc);
  setText("[data-projects-udp-joke]", SITE_CONFIG.projectsUdpJoke);
  setText("[data-projects-manifest-yaml]", SITE_CONFIG.projectsManifestYaml);
  setText("[data-projects-manifest-themes]", SITE_CONFIG.projectsManifestThemes);
  setText("[data-projects-manifest-what-shows]", SITE_CONFIG.projectsManifestWhatShows);
  setText("[data-suggested-project-one-title]", SITE_CONFIG.suggestedProjectOneTitle);
  setText("[data-suggested-project-one-description]", SITE_CONFIG.suggestedProjectOneDescription);
  setText("[data-suggested-project-two-title]", SITE_CONFIG.suggestedProjectTwoTitle);
  setText("[data-suggested-project-two-description]", SITE_CONFIG.suggestedProjectTwoDescription);

  // --- Portfolio platform project page ---
  setText("[data-project-portfolio-overview-heading]", SITE_CONFIG.projectPortfolioOverviewHeading);
  setText("[data-project-portfolio-overview-body]", SITE_CONFIG.projectPortfolioOverviewBody);
  setText("[data-project-portfolio-problem-heading]", SITE_CONFIG.projectPortfolioProblemHeading);
  setText("[data-project-portfolio-problem-body]", SITE_CONFIG.projectPortfolioProblemBody);
  setText("[data-project-portfolio-arch-heading]", SITE_CONFIG.projectPortfolioArchHeading);
  setText("[data-project-portfolio-arch-body]", SITE_CONFIG.projectPortfolioArchBody);
  setText("[data-project-portfolio-arch-placeholder]", SITE_CONFIG.projectPortfolioArchPlaceholder);
  setText("[data-project-portfolio-demo-heading]", SITE_CONFIG.projectPortfolioDemoHeading);
  setText("[data-project-portfolio-demo-body]", SITE_CONFIG.projectPortfolioDemoBody);
  setText("[data-project-portfolio-why-heading]", SITE_CONFIG.projectPortfolioWhyHeading);
  setText("[data-project-portfolio-why-body]", SITE_CONFIG.projectPortfolioWhyBody);
  setText("[data-project-portfolio-snapshot-type]", SITE_CONFIG.projectPortfolioSnapshotType);
  setText("[data-project-portfolio-snapshot-best-for]", SITE_CONFIG.projectPortfolioSnapshotBestFor);
  setText("[data-project-portfolio-snapshot-hosting]", SITE_CONFIG.projectPortfolioSnapshotHosting);
  setText("[data-project-portfolio-snapshot-infra]", SITE_CONFIG.projectPortfolioSnapshotInfra);

  // --- Contact page ---
  setText("[data-contact-resume-card-desc]", SITE_CONFIG.contactResumeCardDesc);
  setText("[data-contact-projects-card-desc]", SITE_CONFIG.contactProjectsCardDesc);
  setText("[data-contact-email-card-desc]", SITE_CONFIG.contactEmailCardDesc);
  setText("[data-contact-linkedin-card-desc]", SITE_CONFIG.contactLinkedInCardDesc);
  setText("[data-contact-github-card-desc]", SITE_CONFIG.contactGitHubCardDesc);
  setText("[data-contact-scheduling-card-desc]", SITE_CONFIG.contactSchedulingCardDesc);
  setText("[data-contact-ways-to-connect-desc]", SITE_CONFIG.contactWaysToConnectDesc);


  /* ======================================================
     DYNAMIC CONTACT HERO
     Adjusts subtitle based on what's configured.
     ====================================================== */

  var pageId = document.body.getAttribute("data-page-id");

  if (pageId === "contact") {
    var hasScheduling = SITE_CONFIG.schedulingUrl && SITE_CONFIG.schedulingUrl.trim();
    var heroSubEl = document.querySelector("[data-contact-hero-subtitle]");
    if (heroSubEl && hasScheduling) {
      heroSubEl.textContent = "Book a call, review my projects, or reach out directly — I\u2019m always open to connecting with people working in cloud security.";
    }
  }


  /* ======================================================
     CURRENTLY BUILDING — renders from config.currentlyBuilding
     ====================================================== */

  var buildList = document.getElementById("currently-building-list");
  if (buildList) {
    var items = SITE_CONFIG.currentlyBuilding;
    if (items && items.length) {
      items.forEach(function (text) {
        var li = document.createElement("li");
        li.className = "currently-building-item";
        li.textContent = text;
        buildList.appendChild(li);
      });
    } else {
      var section = buildList.closest(".currently-building-section");
      if (section) section.style.display = "none";
    }
  }


  /* ======================================================
     FAQ — renders accordion from config.faq
     ====================================================== */

  var faqList = document.getElementById("faq-list");
  if (faqList && SITE_CONFIG.faq && SITE_CONFIG.faq.length) {
    SITE_CONFIG.faq.forEach(function (item, i) {
      var details = document.createElement("details");
      details.className = "faq-item";

      var summary = document.createElement("summary");
      summary.className = "faq-question";
      summary.textContent = item.question;
      summary.id = "faq-q-" + i;

      var answer = document.createElement("div");
      answer.className = "faq-answer";
      answer.textContent = item.answer;
      answer.setAttribute("role", "region");
      answer.setAttribute("aria-labelledby", "faq-q-" + i);

      details.appendChild(summary);
      details.appendChild(answer);
      faqList.appendChild(details);
    });
  } else if (faqList) {
    var faqSection = faqList.closest(".faq-section");
    if (faqSection) faqSection.style.display = "none";
  }


  /* ======================================================
     SKILLS & CERTIFICATIONS — renders on About page sidebar
     ====================================================== */

  var skillsContainer = document.getElementById("skills-list");
  if (skillsContainer) {
    var allSkills = (SITE_CONFIG.skills || []).concat(SITE_CONFIG.certifications || []);
    if (allSkills.length) {
      allSkills.forEach(function (skill) {
        var span = document.createElement("span");
        span.textContent = skill;
        skillsContainer.appendChild(span);
      });
    } else {
      var skillsCard = skillsContainer.closest(".about-sidebar-card");
      if (skillsCard) skillsCard.style.display = "none";
    }
  }


  /* ======================================================
     OG / SOCIAL META TAGS
     ====================================================== */

  var pageMetaMap = {
    home: { title: SITE_CONFIG.siteName, desc: SITE_CONFIG.homeMetaDescription },
    projects: { title: "Projects | " + SITE_CONFIG.siteName, desc: SITE_CONFIG.projectsMetaDescription },
    about: { title: "About | " + SITE_CONFIG.siteName, desc: SITE_CONFIG.aboutMetaDescription },
    contact: { title: "Contact | " + SITE_CONFIG.siteName, desc: SITE_CONFIG.contactMetaDescription },
    error: { title: "Not Found | " + SITE_CONFIG.siteName, desc: SITE_CONFIG.errorMetaDescription },
    "project-detail": { title: SITE_CONFIG.featuredProjectTitle + " | " + SITE_CONFIG.siteName, desc: SITE_CONFIG.projectMetaDescription }
  };

  var ogData;
  if (pageId === "project-detail-static") {
    var titleEl = document.querySelector("title");
    var descEl = document.querySelector("meta[name='description']");
    var staticTitle = titleEl
      ? titleEl.textContent.replace("[YOUR_SITE_NAME]", SITE_CONFIG.siteName)
      : "";
    ogData = {
      title: staticTitle,
      desc: descEl ? descEl.getAttribute("content") : ""
    };
  } else {
    ogData = pageMetaMap[pageId] || pageMetaMap.home;
  }
  var ogSiteName = SITE_CONFIG.ogSiteName || SITE_CONFIG.siteName;
  var baseUrl = SITE_CONFIG.siteUrl ? SITE_CONFIG.siteUrl.replace(/\/$/, "") : "";
  var ogImage = SITE_CONFIG.ogImage || "assets/img/og-image.png";
  if (baseUrl && ogImage && !ogImage.startsWith("http")) {
    ogImage = baseUrl + "/" + ogImage;
  }

  document.querySelectorAll("[data-og]").forEach(function (el) {
    var key = el.getAttribute("data-og");
    if (key === "ogTitle") el.setAttribute("content", ogData.title || "");
    else if (key === "ogDescription") el.setAttribute("content", ogData.desc || "");
    else if (key === "ogImage") el.setAttribute("content", ogImage);
    else if (key === "ogSiteName") el.setAttribute("content", ogSiteName);
  });


  /* ======================================================
     FOOTER EXTRAS — last updated
     ====================================================== */

  var footerInner = document.querySelector(".footer-inner");

  if (footerInner && SITE_CONFIG.lastUpdated) {
    var updated = document.createElement("div");
    updated.className = "footer-updated";
    updated.textContent = "Last updated: " + SITE_CONFIG.lastUpdated;
    footerInner.appendChild(updated);
  }


  /* ======================================================
     PAGE TITLE
     ====================================================== */

  if (pageId === "home") {
    document.title = SITE_CONFIG.siteName + " | " + SITE_CONFIG.pageTitleSuffix;
  } else if (pageId === "project-detail") {
    document.title = SITE_CONFIG.featuredProjectTitle + " | " + SITE_CONFIG.siteName;
  } else if (pageId === "project-detail-static") {
    document.title = document.title.replace("[YOUR_SITE_NAME]", SITE_CONFIG.siteName);
  } else if (pageId) {
    var pageTitles = {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      error: "Page Not Found"
    };
    document.title = (pageTitles[pageId] || pageId) + " | " + SITE_CONFIG.siteName;
  }
});
