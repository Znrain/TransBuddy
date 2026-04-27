// ===== TransBuddy Knowledge Base =====
// Each chunk has: id, category, keywords (for matching), content (the answer material)
// Categories: intro, project, bq, product_design, framework, general

const KNOWLEDGE_BASE = [

// ===== SELF INTRODUCTIONS =====
{
  id: 'intro-general',
  category: 'intro',
  keywords: ['introduce yourself', 'tell me about yourself', 'walk me through your background', 'who are you', 'your background', 'about yourself', 'self introduction'],
  content: `Hi, I'm Xinyu, I go by Sherry. I'm finishing a dual master's between the University of Washington and Tsinghua University, graduating in 2026.

My experience sits at the intersection of AI, product, and user experience. What I care most about is turning complex AI capabilities into practical product experiences.

Most recently I've been working at a US AI startup called Vicino as a PM on a canvas-based generative AI creation platform. I led decisions around B2B vs B2C positioning, designed the end-to-end creation workflow, and drove a key technical differentiation around multi-view 3D consistency for video generation. We piloted with five Hollywood studios.

Before that at Xiaomi, I redesigned an AI customer support system for their developer platform — reduced human handoff from 59% to 38% through a three-layer funnel design and RAG optimization.

I've also worked at Microsoft Research Asia on an AI research platform, at Siemens on B2B enterprise UX, and at Meituan on gamified growth.

What excites me most is using AI to lower barriers — whether that's for content creation, developer support, or user expression.`
},

{
  id: 'intro-ai-pm',
  category: 'intro',
  keywords: ['ai product manager', 'why ai', 'why pm', 'ai pm background'],
  content: `I position myself as an AI PM who can bridge model capabilities and user experience. Across my experiences — Vicino (AIGC workflow), Xiaomi (RAG-based developer support), Microsoft Research (AI platform), and a wildlife AI project with AWS — I've consistently worked on the same core challenge: how to make AI outputs actually usable in real workflows, not just impressive demos.

What differentiates me is I don't just write PRDs. I can prototype with Cursor and Claude Code, I read ML papers to understand capability boundaries, and I make product tradeoffs grounded in both user needs and technical constraints. For example, at Vicino I proposed using multi-view 3D as an intermediate layer for consistency — that came from reviewing 10 papers and understanding what our pipeline could actually support.`
},

// ===== PROJECT: VICINO =====
{
  id: 'vicino-overview',
  category: 'project',
  keywords: ['vicino', 'startup', 'canvas', 'aigc', 'ai creation', 'creative tool', 'generative ai', 'current role', 'most recent'],
  content: `At Vicino, I'm the PM on a canvas-based generative AI workflow platform. Users connect nodes (prompt, image, 3D, video) to build end-to-end creative pipelines, not just single-shot generation.

Key decisions I drove:
1. B2B vs B2C: Interviewed ~10 creators and 3 studio teams. Studios needed production-ready outputs with controllability. Creators wanted one-shot speed. We chose B2B first — faster monetization, clearer PMF validation.
2. Product direction: AI-native production workflow, not demo tool. Users complete full pipeline (script→storyboard→video) without jumping to AE/Premiere.
3. Consistency: Proposed multi-view 3D intermediate layer instead of single-image reference. Reviewed ~10 papers. Became core differentiator.

Results: User activation 32%→57%, content publish rate +41%, time to first post from 2+ days to <1 day. Piloted with 5 mid-sized Hollywood studios.

Roadmap: expanding to full script→storyboard→multi-scene video with timeline.`
},

{
  id: 'vicino-b2b-decision',
  category: 'project',
  keywords: ['b2b', 'b2c', 'market positioning', 'target user', 'vicino decision', 'why b2b', 'market focus'],
  content: `The B2B vs B2C decision at Vicino: We debated between individual creators and professional studios. I interviewed both groups.

Creators wanted fast one-shot generation — "text to video in one click." Studios cared about controllability, consistency, and whether outputs could fit into real production workflows.

Given we were early-stage and needed to validate value quickly, I pushed for B2B. Reasoning:
- Studios provide stronger validation signals (can this actually go into production?)
- Faster path to monetization (studios will pay if outputs are production-ready)
- Workflow lock-in creates retention

Tradeoff accepted: Slower broad user acquisition. But clearer PMF path for early-stage survival.

This wasn't permanent — B2C SEO-led growth was on the roadmap as next phase.`
},

{
  id: 'vicino-consistency',
  category: 'project',
  keywords: ['consistency', '3d', 'multi-view', 'image to video', 'technical decision', 'research paper', 'vicino technical'],
  content: `The consistency problem at Vicino: In image→video generation, characters would change across frames — a critical pain point for production use.

I reviewed ~10 research papers. Most approaches repeatedly reference a single image, which breaks when camera angles change.

My proposal: Use multi-view 3D as an intermediate representation layer. Instead of referencing one flat image, the model gets consistent geometry from multiple angles. This provides a structural anchor rather than just a visual reference.

Why this was a PM decision, not just engineering: I didn't pick the model — the ML team did. My role was translating user pain (studios rejecting outputs because characters looked different) into a product requirement (structural consistency across perspectives), then working with ML to find a feasible approach.

Result: Became core product differentiator. Significantly improved stability for production use.`
},

// ===== PROJECT: XIAOMI =====
{
  id: 'xiaomi-overview',
  category: 'project',
  keywords: ['xiaomi', 'developer platform', 'ai customer service', 'chatbot', 'support', 'customer support', 'rag'],
  content: `At Xiaomi's Developer Platform, I redesigned an AI customer support system serving 3,000+ active developers.

Problem: Existing NLP FAQ bot had 59% human handoff rate. Only 5 support staff. Unsustainable.

My approach had two layers:
Layer 1 — Product design: Three-layer funnel.
- Top 10 FAQ on entry page (self-serve)
- AI chat for mid-level questions
- Human support with guardrails: auto-handoff when confidence <50%, visible "talk to human" button

Layer 2 — AI system optimization:
- Knowledge base restructuring: finer chunking, metadata tagging (developer type, product module, issue category, usage stage)
- Improved retrieval accuracy so AI returned correct knowledge more often

Key decision: Build vs Buy. Internal development ~2 months. Business was urgent. Chose external vendor because time to impact > long-term in-house ownership at that stage.

Evaluation: Tested with 300 real human support tickets, not just vendor demos.

Results: 10% gray rollout → -18% handoff → further optimization → 59%→38% handoff → scaled to 100%.`
},

{
  id: 'xiaomi-rag',
  category: 'project',
  keywords: ['rag', 'retrieval', 'knowledge base', 'metadata', 'chunking', 'search quality', 'xiaomi optimization'],
  content: `RAG optimization at Xiaomi: After the first rollout, I diagnosed that remaining errors weren't just model issues — they were retrieval and knowledge organization issues.

My approach:
1. Knowledge base chunking: Split docs into smaller, focused units
2. Metadata tagging: Added developer type, product module, issue category, usage stage
3. Contextual signals: Incorporated developer identity into retrieval

My 3-layer RAG validation framework:
- Retrieval layer: Are we finding the right knowledge? (top-k hit rate, relevance)
- Generation layer: Is the model using retrieved info correctly? (faithfulness, hallucination, completeness)
- Business layer: Is it creating real value? (handoff rate, resolution rate, satisfaction)

Key insight: AI PM work isn't just about the model. It's about diagnosing whether the bottleneck is model capability, retrieval quality, information architecture, guardrails, or workflow design. Often the highest-ROI fix isn't a bigger model — it's fixing the system end to end.

If I continued: I'd add reranking, query rewriting, and hybrid search (developer queries have error codes and version numbers that need lexical matching, not just semantic).`
},

{
  id: 'xiaomi-build-buy',
  category: 'project',
  keywords: ['build vs buy', 'make or buy', 'vendor', 'buy decision', 'build decision', 'xiaomi decision'],
  content: `Build vs Buy decision at Xiaomi: I evaluated both paths with the algorithm team.

Building internally: ~2 months to production. We'd have full control but delayed impact.
Buying external: Faster launch, mature workflow, but vendor dependency and cost.

Decision: Buy. Because the business pain was already urgent — 59% handoff rate with 5 staff serving 3,000+ developers.

My reasoning wasn't that external was inherently better. It was that time to impact mattered more than long-term in-house ownership at that specific stage. As PM, my first job was making sure the business problem got addressed quickly.

I validated the vendor not through their demos but through 300 real human support tickets — covering different developer types, problem categories, and risk levels. The goal was to see if the model would fail on important real-world cases, not just average performance.`
},

// ===== PROJECT: MICROSOFT RESEARCH ASIA =====
{
  id: 'msra-overview',
  category: 'project',
  keywords: ['microsoft', 'msra', 'research', 'kosmos', 'website', 'information architecture', 'platform'],
  content: `At Microsoft Research Asia, I redesigned the Kosmos AI research platform website.

Problem: Research partners were landing, scrolling, but not clicking into deeper content or demos. The issue wasn't lack of interest — it was cognitive overload.

My approach:
1. Mapped the funnel: Landing→Overview→Research detail→Demo interaction. Drop-off was at overview→detail.
2. Diagnosed the root cause: Navigation was organized by internal research taxonomy, but external partners think in use cases, not our categories.
3. Restructured IA from research taxonomy to user-intent pathways
4. Applied progressive disclosure: summaries first, expandable technical depth
5. Designed 25-second capability framing animation for homepage — answers "what is this and why does it matter" before users explore

Tradeoff: Depth vs clarity. We didn't remove technical depth — we staged it. First layer accessible, expandable for advanced readers.

Results: +18% feature engagement, +15% CTA conversion. Used SQL/Python for behavior analysis.`
},

// ===== PROJECT: SIEMENS =====
{
  id: 'siemens-overview',
  category: 'project',
  keywords: ['siemens', 'b2b', 'enterprise', 'xcelerator', 'mini program', 'login', 'verification'],
  content: `At Siemens, I worked on the Xcelerator B2B digital solutions platform.

Problem: The mini-program required enterprise verification (5 steps, including credential upload) before users could even browse products. Major friction for mobile context.

Key insight: The web platform and mini-program serve fundamentally different contexts.
- Web: Office environment, deep research — verification makes sense
- Mini-program: Quick browsing, sharing with colleagues, showing during meetings — verification kills the use case

Solution: Separated exploration from qualification. Users can browse freely; enterprise verification only triggers at lead submission.

Results: Login flow 5→3 steps. Browsing completion +22%. Solution detail visits +17%. Lead quality on web platform remained stable — proving we improved usability without hurting conversion.

The tradeoff was balancing enterprise lead qualification with user experience, and the answer was aligning friction with user intent in the funnel.`
},

// ===== PROJECT: MEITUAN =====
{
  id: 'meituan-overview',
  category: 'project',
  keywords: ['meituan', 'growth', 'gamification', 'retention', 'consumer', 'game', 'engagement', 'dau'],
  content: `At Meituan, I worked on a gamified growth module ("Real-Person PK to Win Cash") inside the Meituan app. DAU 500K+.

Problem 1: Low next-day retention. Reward distribution was too even across the 7-day sign-in — no urgency to return tomorrow.
Solution: Moved visible cash incentive to Day 2, added prominent "Next Day Cash Reward" icon. Applied same logic to Day 7 milestone.

Problem 2: Tutorial drop-off. Users received reward only after completing entire tutorial — no motivation during onboarding.
Solution: Small rewards after each completed step, with visual pop-up + phone vibration for immediate feedback. Even though rewards were tiny, real-time feedback created strong sense of progress.

Results: Tutorial completion 26%→74%. 7-day retention +28%. Churn -12%.

Key tradeoff: Short-term excitement vs sustainable economy. Strong real rewards in early rounds, then shift to in-game balance later. Front-load activation while protecting long-term cost.`
},

// ===== PROJECT: BIOVISION =====
{
  id: 'biovision-overview',
  category: 'project',
  keywords: ['biovision', 'wildlife', 'beaver', 'aws', 'classification', 'image recognition', 'capstone', 'school project'],
  content: `BioVision: AI wildlife recognition system built with Washington DFW and AWS.

Problem: Researchers manually review thousands of camera trap images monthly. ~60% are empty (wind/vegetation triggers). Extremely time-consuming.

My PM approach — not "build the best model" but "what outcome do researchers need":
1. Reduce manual review time
2. Don't miss beavers (recall > precision)
3. Output structured data for downstream analysis

Key tradeoff: Recall vs precision. Missing a beaver is more costly than reviewing a false positive. So I optimized for high recall and added human-in-the-loop for uncertain cases.

Technical pivot: Transfer learning plateaued at ~70% accuracy. I pushed to pivot to foundation model API — higher cost but dramatically better reliability. Recall reached 95%+.

Product workflow: Batch upload → classify (beaver/other/empty) → flag uncertain for human review → export structured CSV for analysis (monthly counts, before/after intervention comparison).

Result: Saved ~80% manual review time. This wasn't an AI demo — it was a full screening-to-analysis workflow.`
},

// ===== BEHAVIORAL QUESTIONS (Real stories from Sherry's experience) =====
{
  id: 'bq-ownership-beyond-scope',
  category: 'bq',
  keywords: ['ownership', 'took ownership', 'outside responsibility', 'beyond scope', 'initiative', 'proactive', 'not your job'],
  content: `Ownership beyond scope — Vicino market research:

Situation: At Vicino, before launch, we needed to define target customers to guide product direction but had no marketing resources for structured market research.
Task: Although I was the PM, I realized without clear customer segmentation we risked building features without product-market fit. So I took ownership of market research myself, even though it wasn't part of my formal responsibilities.
Action: I conducted direct outreach — connected with ~5 small-to-mid-sized film studios on LinkedIn in the US, and 15+ active AI creators on Xiaohongshu in China. Used conversations to understand workflows, pain points, and willingness to pay. Compared B2B vs B2C on acquisition cost, scalability, and monetization speed.
Result: Recommended prioritizing B2B studios. This aligned product, engineering, and GTM strategy early on and gave us a much clearer path to launch.
Lesson: Early-stage product decisions are often constrained by resources, not just vision. Taking ownership beyond my role helped us avoid building in the wrong direction.`
},

{
  id: 'bq-ownership-nobody-owned',
  category: 'bq',
  keywords: ['nobody responsible', 'no owner', 'gap', 'stepped in', 'noticed problem', 'ownership xiaomi'],
  content: `Nobody owned the problem — Xiaomi AI customer support:

Situation: At Xiaomi, I noticed our developer support chatbot was not performing well, but no team was actively driving improvements. The NLP FAQ system had a 59% manual escalation rate. We had 3,000+ daily active developers and only a small support team — creating heavy operational burden.
Task: Even though this wasn't explicitly assigned to me, I decided to take ownership because it directly affected developer experience and internal efficiency.
Action: Analyzed support logs to identify where chatbot failed most often. Proposed upgrading to AI-powered solution. Led vendor evaluation using 300 real support tickets (not just demos). Worked with engineering on test set, selected vendor, launched with small-scale rollout. Continued improving by restructuring knowledge base and adding metadata tags (developer type, issue category).
Result: Manual escalation rate dropped from 59% to 38%, significantly reducing support workload and improving developer experience.
Follow-up — Why did no one else take ownership? Support team was focused on daily tickets, engineering on other priorities. The issue was visible but not clearly owned, so I stepped in to define both the problem and the solution.`
},

{
  id: 'bq-accountability-team',
  category: 'bq',
  keywords: ['accountability', 'team management', 'team ownership', 'visibility', 'tracking', 'project management'],
  content: `Ensuring team accountability — Vicino ClickUp:

Situation: At Vicino, working with multiple designers and engineers in a fast-paced startup, I noticed tasks lacked clear ownership and visibility across teams.
Task: Design and engineering were working in parallel but limited transparency on who was responsible for what caused delays and misalignment.
Action: Introduced structured task management using ClickUp. Ensured every task was assigned to a specific individual. Gave engineers visibility into UI/UX task tracking so they could proactively follow progress and dependencies. Set up regular check-ins to surface blockers early. Kept myself accountable by consistently updating progress and following up.
Result: Significantly improved cross-team visibility and reduced delays. Team became more proactive in identifying blockers. Collaboration became much smoother.
Follow-up — How did you avoid micromanagement? Focused on visibility rather than control. The goal was transparent ownership, not tracking every action. This helped the team stay autonomous while still aligned.`
},

{
  id: 'bq-mistake',
  category: 'bq',
  keywords: ['mistake', 'failure', 'failed', 'wrong', 'error', 'learned from', 'what went wrong', 'regret', 'bug'],
  content: `Mistake story — Xiaomi midnight launch bug:

Situation: At Xiaomi, I was responsible for launching a new compliance feature that required developers to upload additional materials for AI-generated content apps.
Task: The mistake was I did not catch a critical validation issue before launch. My acceptance testing focused on the happy path. I didn't test the boundary condition for file size.
Action: Right after the feature rolled out at midnight, I discovered the frontend file size limit was set to 1MB instead of 10MB. The page said 10MB but frontend blocked anything larger. I immediately took responsibility. Assessed impact — if developers started submitting next morning, they'd be blocked. Escalated to my manager, pulled in engineering leads during off-hours. Proactively informed the support team lead about potential impact.
Result: Identified root cause and deployed fix within 1.5 hours, before developers started using the feature next morning.
Lesson: PM acceptance testing cannot only check the happy path. Updated my release checklist to include boundary conditions, frontend-backend consistency, error messages, and compliance-critical constraints. Now I treat launch validation as a risk-control mechanism, not just a final walkthrough.`
},

{
  id: 'bq-challenge-constraints',
  category: 'bq',
  keywords: ['challenge', 'difficult', 'hardest', 'toughest', 'obstacle', 'overcome', 'constraint', 'deadline', 'tight timeline', 'most challenging'],
  content: `Delivering under conflicting constraints — Xiaomi compliance feature:

Situation: At Xiaomi, a new regulation required app platforms to collect AI service information from developers before a specific deadline. I received the requirement only ~4 days before the deadline.
Task: The challenge was a major national political event restricted internet companies from pushing new code changes during that period. Two constraints that seemed to conflict: comply with regulation, but can't make risky code changes during restricted period.
Action: I proposed separating deployment from activation. We accelerated development and released the code earlier, but kept the feature at 0% rollout. The code was reviewed and deployed before the restricted window, but wouldn't affect users yet. When regulation took effect, we only needed to turn on the feature instead of pushing new code.
Result: Met the compliance deadline without violating the release restriction. Reduced launch risk because code was already reviewed and prepared.
Key decision: Separating technical release from user-facing activation gave us a way to satisfy both constraints simultaneously.`
},

{
  id: 'bq-innovation',
  category: 'bq',
  keywords: ['innovation', 'innovative', 'creative', 'new idea', 'invent', 'simplify', 'buy-in', 'gain support'],
  content: `Innovation with stakeholder buy-in — Xiaomi AI customer support upgrade:

Situation: At Xiaomi, the original developer support system relied on keyword matching and predefined answers — low accuracy and 59% manual escalation rate. Created pressure for support team and slowed developers down.
Task: My idea was to introduce AI-based support, but instead of proposing a full internal system, I focused on a more practical and faster approach — evaluating external AI vendors so we could launch quickly and validate impact.
Action: Made the decision process data-driven. Built a test set using 300 real support tickets. Evaluated vendors on answer accuracy, response speed, and coverage of real developer scenarios. Used internal evaluation tool to measure answer quality and set clear targets. This reduced concerns from both engineering and support team. After selecting vendor, launched with small-scale rollout then improved through knowledge base restructuring and better tagging.
Result: Manual escalation rate dropped from 59% to 38%.
Follow-up — What resistance did you face? Engineering was concerned about integration effort, support team worried about answer quality. Addressed both by using real data for evaluation instead of vendor demos — made the decision more objective.`
},

{
  id: 'bq-speed-vs-innovation',
  category: 'bq',
  keywords: ['speed', 'balance', 'innovation vs speed', 'short term', 'long term', 'iterate', 'quick win'],
  content: `Balancing innovation and speed — Meituan growth game:

Situation: At Meituan, working on a mini-game growth feature where we needed to rapidly increase DAU while building long-term engagement.
Task: Initially we focused on quick-win strategies like coupons and cash incentives — boosted DAU short term but didn't improve long-term retention.
Action: After running several iterations, I analyzed user behavior data and identified a major drop-off in onboarding flow — completion rate was only ~27%. Instead of continuing short-term tactics, I shifted focus to improving core user experience. Simplified onboarding from six steps to three. Introduced immediate, tangible rewards after each step including real-time cash incentives and haptic (vibration) feedback.
Result: Significantly improved onboarding completion and engagement, leading to stronger retention and more sustainable DAU growth. Tutorial completion 26%→74%. 7-day retention +28%.
Framework: I prioritize based on customer impact and time horizon. If short-term strategies plateau or create diminishing returns, that's a signal to invest in deeper product changes.`
},

{
  id: 'bq-challenge-process',
  category: 'bq',
  keywords: ['challenge existing', 'process improvement', 'system improvement', 'automate', 'manual to auto', 'self service'],
  content: `Challenging an existing process — Xiaomi campaign configuration:

Situation: At Xiaomi, the existing process for configuring promotional campaign pages required business teams to manually coordinate with developers, collect assets, then internal teams configured each campaign page. Time-consuming, resource-heavy, didn't scale.
Task: Instead of optimizing individual steps, I proposed replacing the entire process with a self-service configuration platform for developers.
Action: First mapped the existing workflow and identified redundant steps. Worked with business and operations teams to understand what information was truly needed. Initiated developer interviews to capture real needs. Simplified configuration into a structured, guided system. Reduced required fields and introduced templates.
Result: Eliminated manual configuration entirely. Developers could configure campaigns independently. Internal teams shifted to higher-impact tasks. Significantly improved efficiency and scalability.
Follow-up — Did you face resistance? Yes, from business teams who were used to full control. Addressed by ensuring the system still supported their key use cases while improving efficiency.`
},

{
  id: 'bq-ambiguity',
  category: 'bq',
  keywords: ['ambiguity', 'unclear', 'undefined', 'uncertain', 'no clear direction', 'figure out', 'zero to one', '0 to 1', 'incomplete information', 'without information'],
  content: `Decision under ambiguity — Vicino B2B vs B2C:

Situation: At Vicino, before launch, we had to decide whether to focus on B2B or B2C users, but had no complete market data or existing user base.
Task: This was important because it would shape product roadmap, positioning, and go-to-market strategy.
Action: Since there was no reliable top-down data, I created my own data sources. Conducted direct outreach — ~5 film studios in US, 15+ AI creators in China. Used conversations to understand workflows, willingness to pay, adoption barriers. Compared B2B vs B2C across acquisition cost, time to revenue, operational complexity, scalability. B2C had bigger potential but required significant community and distribution resources we didn't have. B2B had smaller user base but clearer pain points and shorter monetization path.
Result: Recommended focusing on B2B studios first. It was a controlled-risk decision based on the data we could gather quickly. Helped shape the first launch version around professional workflows.
Follow-up — How did you handle pushback? Made the uncertainty explicit. Framed it as the direction with best risk-reward balance at that stage. Explained what signals we'd continue monitoring so the team knew we could adjust.`
},

{
  id: 'bq-ambiguity-changing-env',
  category: 'bq',
  keywords: ['rapidly changing', 'changing environment', 'pivot', 'adapt', 'flexibility', 'evolving', 'unclear goals'],
  content: `Delivering in unclear/changing environment — Vicino pre-launch:

Situation: At Vicino, before launch, the product direction was still evolving quickly. We hadn't fully confirmed target customer segment but still needed to deliver a usable first version.
Task: Can't wait for perfect market clarity before building. But building without user feedback could easily miss real workflow needs.
Action: After leaning toward B2B studios, direct access was still limited. So I used a proxy user group — tested the MVP with film students and early creative users who had similar production workflows, even though they weren't exactly our final paying customers. Used their feedback to validate core workflow (script→storyboard→scene, canvas-based creation, controlling intermediate outputs). Meanwhile continued outreach to real B2B studios.
Result: This parallel approach let us keep building while learning. By the time we showed the product to potential B2B customers, the MVP already felt professional and workflow-oriented rather than a generic AI demo.
Prioritization approach: Prioritized features valuable across multiple user types — workflow control, asset organization, generation iteration were important for both students and professional studios. Avoided overbuilding niche features until we had stronger customer signals.`
},

{
  id: 'bq-requirements-changed',
  category: 'bq',
  keywords: ['requirements changed', 'scope change', 'midway change', 'goals changed', 'pivot midway', 'scope creep'],
  content: `Requirements changed midway — Xiaomi campaign system:

Situation: At Xiaomi, the self-service campaign configuration system was initially designed for video apps (Tencent Video, iQIYI, Youku, Mango TV). Their campaign formats were relatively standardized.
Task: Midway through the project, business team told me other app categories (games, navigation, utility apps) also had similar needs. This changed scope significantly — different app categories needed different campaign materials and configuration fields.
Action: Instead of building separate workflows for each category, I stepped back and looked for common patterns. Worked with stakeholders to identify which fields were universal vs category-specific. Redesigned system into a more flexible configuration framework — one shared workflow for all developers, only added a small number of extra fields to support different app categories.
Result: Expanded the system beyond video apps while only adding ~5 additional fields. Kept developer experience simple and avoided making the system too complex.
Lesson: If I had collected broader requirements earlier, I could have designed with scalability in mind from the first version. Would involve more cross-category stakeholders earlier next time.`
},

{
  id: 'bq-conflicting-priorities',
  category: 'bq',
  keywords: ['conflicting priorities', 'unclear expectations', 'competing priorities', 'stakeholder conflict', 'prioritize', 'align stakeholders'],
  content: `Conflicting priorities — BioVision/DFW wildlife project:

Situation: In the capstone project with Washington DFW and AWS, our sponsor was a beaver scientist with many needs: beaver detection, all-animal classification, site-level tracking, timestamp analysis, CSV export, downstream data analysis. Sometimes priority sounded like beaver-only detection, other times they wanted to preserve all animal information.
Task: Unclear expectations and competing priorities. As PM, I focused on identifying the core problem behind all these requests.
Action: Through stakeholder conversations, found the biggest pain point was time — spending too much time manually reviewing thousands of camera images. Reframed project goal around efficiency: reduce manual review time while preserving useful data for analysis. Structured requirements into phases: P0 = automated classification (beaver detection + filter empty images). P1 = structured CSV export with site/species/timestamp. P2 = AI assistant for downstream queries.
Result: Final system reduced manual review workload by 70%+. Gave sponsor a clearer workflow for both classification and analysis.
Key approach: Didn't reject stakeholder requests. Captured all of them and mapped into different phases. Stakeholders could see their needs were heard, even if not everything was P0.`
},

{
  id: 'bq-define-own-scope',
  category: 'bq',
  keywords: ['define scope', 'define deliverables', 'self-directed', 'own scope', 'define your own', 'initiative scope'],
  content: `Defining my own scope — Xiaomi AI customer support:

Situation: The AI customer support upgrade at Xiaomi had no formal project or clear owner. I discovered the issue by reviewing support logs — the chatbot wasn't solving developer problems effectively, escalation rate was high, but no defined solution existed.
Task: Define scope, solution paths, and execution plan from scratch.
Action: First clarified the core problem: developers can't get accurate answers efficiently, support team overloaded with repetitive questions. Defined possible solution paths — build internal AI system vs integrate external AI solution. Evaluated both on speed, cost, integration complexity, long-term flexibility. Since internal development would take too long and team needed immediate improvement, recommended external procurement. Led vendor evaluation using real support data, selected vendor, defined rollout and optimization plan. After launch, defined next phase: knowledge base restructuring, tagging, performance monitoring.
Result: Successful system upgrade, escalation rate 59%→38%, improved efficiency and developer experience.
Follow-up — Would you still consider building internally later? Yes. External procurement helped us move fast and validate impact. If we needed deeper customization or long-term control, building internally would be a later phase.`
},

{
  id: 'bq-leadership',
  category: 'bq',
  keywords: ['leadership', 'lead', 'influence', 'without authority', 'drive', 'take charge', 'intern leading'],
  content: `Leadership as an intern — Xiaomi AI customer support:

At Xiaomi, I was an intern but effectively owned the AI customer support upgrade end-to-end. Nobody asked me to do the build-vs-buy analysis — I initiated it because I saw the business urgency (59% handoff rate, 5 staff, 3,000+ developers).

I proactively: scoped the problem with data (pulled support logs, categorized failure modes), proposed the 3-layer funnel architecture, designed evaluation framework (300 real tickets, not vendor demos), coordinated across algorithm team, operations, and vendor, ran the gray rollout, iterated on knowledge base optimization.

I led by doing the work that needed doing and making it easy for decision-makers to say yes — bringing data, clear tradeoffs, and a concrete plan rather than abstract proposals. Result: 59%→38% handoff rate, scaled to 100%.`
},

{
  id: 'bq-conflict',
  category: 'bq',
  keywords: ['conflict', 'disagree', 'disagreement', 'push back', 'convince', 'persuade', 'different opinion'],
  content: `Disagreement story — Vicino product direction:

Situation: At Vicino, the engineering team preferred building a lightweight one-shot generator — faster to ship, technically simpler. I believed we should build a structured workflow platform.
Action: I didn't argue from opinion. Brought studio interview evidence showing they needed controllable pipelines, not faster prompts. Framed it as tradeoff discussion: "One-shot is faster to ship but harder to differentiate. Workflow is harder to build but creates real production value and lock-in." Proposed compromise: workflow architecture but starting with simplified version — fewer node types, basic connections — so engineering effort was scoped.
Result: Team aligned on workflow direction. First version shipped in ~2 months with core nodes (prompt, image, 3D, video). Studios validated the approach in pilot.
Principle: Bring evidence, frame tradeoffs, find a path that addresses the other side's concerns.`
},

{
  id: 'bq-data-driven',
  category: 'bq',
  keywords: ['data driven', 'metrics', 'data', 'analytics', 'decision with data', 'quantitative', 'measure success'],
  content: `Data-driven decision — Xiaomi vendor evaluation:

At Xiaomi, when choosing between AI vendors, I didn't rely on demos or marketing claims. Built an evaluation using 300 real human support tickets — sampled across different developer identities, problem categories, and risk levels.

Why 300? Realistic within internship timeline while covering major high-frequency issue types.

The goal wasn't comparing average scores — it was seeing whether models would fail on important cases. One vendor scored well on general questions but consistently missed nuances in account-related queries — exactly the high-risk scenarios where wrong answers could damage developer accounts.

This approach — evaluating on real-world edge cases, not average performance — is something I apply broadly. At Vicino, I validated consistency improvements not through benchmarks but through studio pilot feedback on whether outputs could actually enter production.`
},

{
  id: 'bq-customer-obsession',
  category: 'bq',
  keywords: ['customer', 'user first', 'customer obsession', 'user research', 'user needs', 'empathy', 'user feedback', 'above and beyond'],
  content: `Customer obsession — BioVision wildlife project:

Scientists initially asked us to build "the most accurate beaver detection model." But when I understood their actual workflow, accuracy wasn't their real need.

They needed to: reduce hours reviewing thousands of images monthly, never miss a beaver (recall > precision), export structured data for downstream analysis.

So instead of optimizing a model metric, I defined product goals around their workflow: batch upload → AI classification → human review for uncertain cases → structured CSV export.

Key insight: They didn't need a perfect model — they needed an 80% time-saving workflow with safety nets for remaining uncertainty.

This is how I approach user problems generally: don't take stated requests at face value. Understand the underlying workflow and success metric, then design the solution around that.`
},

{
  id: 'bq-teamwork',
  category: 'bq',
  keywords: ['teamwork', 'team', 'collaborate', 'cross functional', 'work with engineers', 'work with design', 'communication', 'collaboration'],
  content: `Cross-functional collaboration — Vicino:

At Vicino, I was the sole PM working with ~5-6 designers, engineering (led by cofounder), and ML/CTO.

With ML: I don't tell them how to model. My role is translating user pain into measurable product requirements. For the 3D consistency proposal, I framed it as "a reference strategy for consistency" rather than a modeling prescription. I read papers not to pick models but to understand the problem space so I can have productive conversations with ML.

With designers: Fast cycles with frequent alignment rather than heavy PRDs. Progressive disclosure in design: simple mode for new users, advanced controls for experts.

Key principle: Effective cross-functional work isn't about having all the answers. It's about bringing the right context (user needs, business constraints, competitive landscape) so each function can do their best work.`
},

{
  id: 'bq-why-company',
  category: 'bq',
  keywords: ['why this company', 'why us', 'why here', 'why interested', 'why apply', 'why this role', 'what excites you'],
  content: `[ADAPT TO SPECIFIC COMPANY FROM JD]

General framework:
1. Connect to my experience: "This role combines the things I've been building toward — [AI/content/platform/growth]"
2. Specific product excitement: "I'm particularly interested in [specific product/feature] because it relates to [my relevant experience]"
3. Unique value I bring: "My combination of [AI product experience + UX depth + technical prototyping] means I can [specific contribution]"
4. Growth alignment: "This is where I want to build my career because [authentic reason]"

Example: "I'm excited because this role sits at the intersection of AI capability, content creation, and user experience — exactly where I've been working across Vicino (AI creative workflows), Xiaomi (AI developer support), and my school projects. I want to use AI to lower the barrier to expression and creation for more users."`
},

// ===== PRODUCT DESIGN / SENSE =====
{
  id: 'pd-framework',
  category: 'product_design',
  keywords: ['product design', 'product sense', 'design question', 'how would you', 'framework', 'approach'],
  content: `My product design framework:
1. WHO is the user? Define segment clearly.
2. WHERE are they stuck? Map the journey, find the friction point.
3. WHY are they stuck? Is it motivation, friction, or matching problem?
4. WHAT should we build? Define the solution with clear scope.
5. WHY is AI necessary here? AI should reduce cost of expression/creation at a critical point, not just automate.
6. HOW do we validate? Behavioral metrics that prove it's actually working.

Key principle: "I'd first define where the user is getting stuck. Then determine if it's a motivation problem, friction problem, or matching problem. If AI is worth using, I want it to reduce the cost of expression or creation at a critical point. Finally, validate through behavioral metrics."`
},

{
  id: 'pd-creator-decline',
  category: 'product_design',
  keywords: ['creator', 'content decline', 'posting less', 'create less', 'creator retention', 'creator churn'],
  content: `If creators are posting less content, I'd first validate: is it fewer creators posting, lower frequency per creator, or specific segments declining?

Four cause buckets:
1. Motivation: Reach/growth/monetization expectations declining? Check distribution, follower growth, engagement trends.
2. Friction: Creation getting harder? Check draft completion rate, tool usage time, abandonment points.
3. Competition: Time shifting to Reels/Shorts/Xiaohongshu/livestream? Requires market context + creator interviews.
4. Platform atmosphere: Moderation, algorithm changes, weaker social feedback making creators cautious?

Validation: Quantitative (segment by creator tier, content vertical, geography; find funnel drop-off) + Qualitative (interview creators who reduced activity or churned).

Priority distinction: Is it "can't post" (tooling/friction) or "don't want to post" (incentive/ecosystem)? Solutions are completely different.

Experiments: Reduce creation friction for a segment, or give stronger post-publish positive feedback, to isolate whether problem is friction vs distribution vs incentives.`
},

{
  id: 'pd-make-people-talk',
  category: 'product_design',
  keywords: ['social', 'talk', 'conversation', 'messaging', 'interaction', 'engage', 'comment', 'share', 'social interaction', 'make people talk'],
  content: `How to make people talk on TikTok: The key isn't forcing users into chat. It's reducing friction between seeing content and having something easy to say.

Three layers:
1. Make content a natural conversation starter: AI identifies interesting/debatable moments, generates lightweight prompts ("which would you choose?", "send to the friend who gets this"). Not replacing user voice — giving easier starting points.

2. Reduce friction after sharing: Lots of videos get shared but don't lead to conversation. Generate optional openers at share moment — light reactions, emoji-based summaries, relationship-aware opening lines. Must be handled carefully re: privacy.

3. Strengthen lightweight social around content: Not all interaction needs deep conversation. Voting together, reaction chains, remix, co-creation. Once users move from passive watching to jointly doing something with content, social has started.

Core view: Start with expression scaffolding, not messaging features. AI's value is helping users express reactions more easily, not replacing social interaction.`
},

{
  id: 'pd-tiktok-ai-ideas',
  category: 'product_design',
  keywords: ['tiktok', 'ai idea', 'feature idea', 'social creation', 'ai feature', 'tiktok feature'],
  content: `TikTok Social+AI ideas (each answers: why worth building, why AI necessary, why it drives interaction):

1. AI Share Openers: When sharing video to friend, AI generates lightweight conversation starters based on content. Metrics: share-to-reply conversion, thread length.

2. AI Co-create Remix: After watching, AI suggests creation extensions ("turn this into campus version", "recreate with your pet") + generates editable first draft. Turns consumption into creation. Metrics: creator conversion, remix rate.

3. Friend-aware Sharing: AI understands which content fits which friend relationship. Light suggestion, not aggressive automation. Must be extremely careful on privacy.

4. Comment Scaffolding: AI generates comment starters in different tones (funny, relatable, informative). For users who react but can't articulate. Test in high-expression-barrier content first.

5. Creator Social Insights: Show creators which posts get shared to friends, trigger conversations, get saved. Actionable: "your reaction content has high share rate, try making next post easier to tag friends." Drives both creator growth and platform interaction.`
},

{
  id: 'pd-favorite-ai-feature',
  category: 'product_design',
  keywords: ['favorite ai feature', 'ai feature you like', 'ai product you admire', 'best ai feature'],
  content: `Favorite AI feature: ChatGPT's conversation organization and navigation — folders, history management, locating information in long threads.

Why I like it: As AI becomes daily workflow, conversation history becomes a growing personal knowledge space. When too many topics mix in one thread, valuable past information becomes hard to retrieve.

What it really solves: Not "cleaner interface" but reducing cost of re-accessing information you already generated. Turns conversation history from pile of text into reusable knowledge asset.

Product insight: When AI shifts from one-time tool to daily workflow, history management becomes core experience. Relationship changes from "ask question, get answer" to accumulation, reference, iteration.

How I'd improve: (1) Granular bookmarks/tags — save specific insights, useful prompts, reusable content, not just entire conversations. (2) System understands "what can user do next with this history" — auto-organize past discussions into creative material, reflection notes, or action suggestions. Move from remembering information to converting it into expression and action.`
},

{
  id: 'pd-compare-ai-products',
  category: 'product_design',
  keywords: ['compare', 'comparison', 'chatgpt vs', 'gemini vs', 'claude vs', 'ai product comparison', 'which is better'],
  content: `AI product comparison framework — 7 dimensions:
1. Target user (mass/professional/developer/enterprise)
2. Core job (search/creation/reasoning/companionship/coding)
3. Entry point and mental model (search replacement/creative partner/assistant/workflow)
4. Capability boundaries (strong/weak areas)
5. Interaction design (single/multi-turn, chat/canvas, controllable editing)
6. System tradeoffs (quality vs speed vs cost vs ecosystem)
7. Business logic (subscription/ecosystem/hardware/B2B) — shapes product design

Example: ChatGPT vs Gemini vs Claude:
- ChatGPT: "General AI workbench" — most complete product, strongest user education and ecosystem. Wins on product completeness.
- Gemini: Google ecosystem integration — natural position in search, Workspace. Wins on entry points.
- Claude: Deep thinking and long-form collaboration — more stable, like a serious thinking partner. Wins on specific high-value workflow preference.

Key insight: AI competition isn't just model competition. It's capability × use case × entry point × user mental model.`
},

// ===== FRAMEWORKS =====
{
  id: 'fw-rag-evaluation',
  category: 'framework',
  keywords: ['rag evaluation', 'evaluate rag', 'rag metrics', 'retrieval evaluation', 'how to evaluate ai'],
  content: `My 3-layer RAG evaluation framework:

Layer 1 — Retrieval: Is the system finding the right knowledge?
- Top-k hit rate, relevance of results, performance across query types
- If problems here: revisit chunking, metadata, embeddings, query rewriting, reranking

Layer 2 — Generation: Is the model using retrieved info correctly?
- Faithfulness to source, hallucination, missing key steps, tone/structure appropriateness
- Sometimes retrieval is correct but synthesis is poor — users still perceive low quality

Layer 3 — Business: Is it creating real value?
- Users solving issues faster? Fewer repeated questions? Less handoff? Higher satisfaction?
- AI products can't be judged only by offline evaluation — must show meaningful behavior change

This framework is how I diagnosed issues at Xiaomi: first rollout showed the problem wasn't the model itself but retrieval and knowledge organization. Fixing information architecture had higher ROI than switching to a bigger model.`
},

{
  id: 'fw-tradeoff-thinking',
  category: 'framework',
  keywords: ['tradeoff', 'trade off', 'decision making', 'how do you decide', 'prioritize', 'prioritization'],
  content: `My tradeoff approach as PM:

Principle: Every product decision is a tradeoff. I make the tradeoff explicit, not hidden.

Examples from my experience:
1. Vicino B2B vs B2C: "Slower user growth BUT faster monetization and clearer validation"
2. Vicino workflow vs one-shot: "Higher learning curve BUT stronger differentiation and production value"
3. Xiaomi build vs buy: "Vendor dependency BUT faster time to impact"
4. BioVision recall vs precision: "More false positives BUT never miss scientifically important images"
5. Siemens verification timing: "Less upfront lead data BUT dramatically better mobile browsing experience"
6. Meituan reward structure: "Less surprise/novelty BUT stronger return motivation and clearer value expectation"

Framework: (1) Name both sides clearly, (2) Identify which matters more given current stage/context, (3) Design for reversibility when possible, (4) Validate with data, not just logic.`
},

// ===== GENERAL =====
{
  id: 'gen-why-pm',
  category: 'general',
  keywords: ['why pm', 'why product management', 'why not engineering', 'why not design', 'career choice'],
  content: `Why PM: I sit at the intersection of three things — product thinking, design depth, and technical fluency. I've done UX design (MSRA, Tsinghua), engineering prototyping (Cursor, Claude Code, full-stack), and strategic product work (Vicino, Xiaomi).

What draws me to PM specifically is making decisions under ambiguity. At Vicino, choosing B2B vs B2C. At Xiaomi, build vs buy. At BioVision, recall vs precision. These aren't design or engineering decisions — they're product decisions that require understanding users, business, and technical constraints simultaneously.

I'm not the PM who only writes PRDs and waits. I prototype, read papers, talk to users, and push for decisions. My value is that I can go deep enough technically to have productive conversations with engineers and ML teams, while staying focused on what actually matters for users and business.`
},

{
  id: 'gen-strengths',
  category: 'general',
  keywords: ['strength', 'superpower', 'what makes you unique', 'differentiate', 'stand out', 'special'],
  content: `My strengths as a PM:

1. Rare combination: PM thinking + UX depth + technical prototyping. I can go from user interview to Figma wireframe to working prototype in Cursor. This means faster validation and better communication with every function.

2. AI product judgment: I don't just "add AI features." I diagnose whether the bottleneck is model capability, retrieval, information architecture, or workflow design. At Xiaomi, the highest-ROI fix wasn't a better model — it was restructuring the knowledge base.

3. Decision-making under ambiguity: At Vicino (B2B vs B2C, no users yet), Xiaomi (build vs buy under time pressure), BioVision (recall vs precision with real research stakes). I make tradeoffs explicit and validate fast.

4. Cross-context adaptability: B2B enterprise (Siemens), B2B AI tools (Vicino), developer platform (Xiaomi), consumer growth (Meituan), research platform (MSRA). I can pattern-match across contexts.`
},

{
  id: 'gen-weakness',
  category: 'general',
  keywords: ['weakness', 'area for improvement', 'development area', 'what are you working on', 'biggest weakness'],
  content: `My area for growth: I sometimes move too fast from problem identification to solution design. At Vicino, I spent two weeks building B2C personas before validating with users — when I should have done interviews first.

I've learned to front-load user conversations before committing to direction. Now my default is: talk to 5 users before writing any spec. But I'm still working on being patient enough to let ambiguity sit before converging, especially when business pressure feels urgent.

The upside of this tendency is speed and bias toward action, which is valuable in startups. But I'm learning to balance it — knowing when to slow down for 48 hours of research can save weeks of wrong-direction building.`
}
];

// ===== SEARCH FUNCTION =====
function searchKnowledge(question, topK = 3) {
  const q = question.toLowerCase();
  const scored = KNOWLEDGE_BASE.map(chunk => {
    let score = 0;
    // Keyword matching
    for (const kw of chunk.keywords) {
      if (q.includes(kw)) score += 10;
      // Partial word matching
      const words = kw.split(' ');
      for (const w of words) {
        if (w.length > 3 && q.includes(w)) score += 3;
      }
    }
    // Category boosting for question patterns
    if (chunk.category === 'bq' && /tell me a time|example of|describe a situation|experience when|have you ever/i.test(q)) score += 5;
    if (chunk.category === 'intro' && /introduce|yourself|background|about you/i.test(q)) score += 8;
    if (chunk.category === 'product_design' && /design|build|improve|create|feature|product|how would you/i.test(q)) score += 5;
    if (chunk.category === 'project' && /project|tell me about|walk me through|describe your work/i.test(q)) score += 3;
    // Boost for specific company/project mentions
    if (/vicino|startup|canvas|creative/i.test(q) && /vicino/i.test(chunk.id)) score += 15;
    if (/xiaomi|developer|support|chatbot|customer service/i.test(q) && /xiaomi/i.test(chunk.id)) score += 15;
    if (/microsoft|msra|research|kosmos/i.test(q) && /msra/i.test(chunk.id)) score += 15;
    if (/siemens|b2b|enterprise|xcelerator/i.test(q) && /siemens/i.test(chunk.id)) score += 15;
    if (/meituan|growth|game|retention|gamif/i.test(q) && /meituan/i.test(chunk.id)) score += 15;
    if (/biovision|wildlife|beaver|aws|animal/i.test(q) && /biovision/i.test(chunk.id)) score += 15;
    if (/rag|retrieval|knowledge base/i.test(q) && /rag/i.test(chunk.id)) score += 12;
    if (/tiktok|social|creation|creator/i.test(q) && /tiktok|creator|talk/i.test(chunk.id)) score += 10;
    return { chunk, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.chunk);
}
