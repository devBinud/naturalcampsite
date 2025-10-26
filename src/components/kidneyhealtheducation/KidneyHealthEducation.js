import React, { useState } from "react";

const TABS = [
    "Overview",
    "Symptoms",
    "Stages",
    "Treatments",
    "Diet & Fluids",
    "FAQs",
    "Resources",
];

const KidneyHealthEducation = () => {
    const [active, setActive] = useState("Overview");

    return (
        <section className="khe">
            {/* Hero */}
            <div className="khe__hero">
                <div className="khe__heroContent">
                    <h1>Kidney Health Education</h1>
                    <p>
                        Simple, trustworthy guidance on kidneys, chronic kidney disease (CKD),
                        treatment options, and everyday care.
                    </p>
                </div>
            </div>

            {/* Cards: quick info */}
            <div className="khe__stats">
                <div className="khe__stat">
                    <span className="khe__statLabel">Kidney Basics</span>
                    <p className="khe__statText">Filters blood, balances fluids & minerals.</p>
                </div>
                <div className="khe__stat">
                    <span className="khe__statLabel">Early Signs</span>
                    <p className="khe__statText">Swelling, fatigue, changes in urine.</p>
                </div>
                <div className="khe__stat">
                    <span className="khe__statLabel">Treatments</span>
                    <p className="khe__statText">Dialysis (hemo/PD) & transplant.</p>
                </div>
                <div className="khe__stat">
                    <span className="khe__statLabel">Lifestyle</span>
                    <p className="khe__statText">Right diet, fluids, regular follow-ups.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="khe__tabsWrap">
                <div className="khe__tabs" role="tablist" aria-label="Kidney education sections">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            role="tab"
                            aria-selected={active === tab}
                            className={`khe__tab ${active === tab ? "is-active" : ""}`}
                            onClick={() => setActive(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="khe__content">
                {active === "Overview" && <Overview />}
                {active === "Symptoms" && <Symptoms />}
                {active === "Stages" && <Stages />}
                {active === "Treatments" && <Treatments />}
                {active === "Diet & Fluids" && <DietFluids />}
                {active === "FAQs" && <FAQs />}
                {active === "Resources" && <Resources />}
            </div>

            {/* CTA */}
            <div className="khe__cta">
                <div className="khe__ctaInner">
                    <h3>Need help deciding next steps?</h3>
                    <p>Talk to our care team about tests, treatment options, and preparation.</p>
                    <div className="khe__ctaActions">
                        <a className="khe__btn khe__btnPrimary" href="/appointments">Book Appointment</a>
                        <a className="khe__btn khe__btnGhost" href="/contact">Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{css}</style>
        </section>
    );
};

/* ---- Sections ---- */

const Overview = () => (
    <div className="khe__grid3">
        <Card title="How kidneys work">
            Your kidneys filter waste, balance fluids & electrolytes, control blood pressure,
            and support red blood cell production. Healthy kidneys keep your body in balance.
        </Card>
        <Card title="What is CKD?">
            Chronic Kidney Disease is a gradual loss of kidney function. Early detection and
            management can slow progression and delay the need for dialysis or transplant.
        </Card>
        <Card title="When to see a doctor">
            High blood pressure, diabetes, swelling in legs/face, foamy urine, reduced urine,
            fatigue, or persistent nausea—get evaluated with blood (eGFR, creatinine) and urine tests.
        </Card>
    </div>
);

const Symptoms = () => (
    <>
        <div className="khe__pillRow">
            {[
                "Swelling (edema)",
                "Fatigue / weakness",
                "Foamy or dark urine",
                "Less urine output",
                "Nausea / poor appetite",
                "Itching / dry skin",
                "Leg cramps",
                "Shortness of breath",
                "High blood pressure",
            ].map((s) => (
                <span key={s} className="khe__pill">{s}</span>
            ))}
        </div>
        <Callout type="info" title="Note">
            Symptoms vary and may be subtle in early stages. Regular check-ups are important, especially if you
            have diabetes, hypertension, or a family history of kidney disease.
        </Callout>
    </>
);

const Stages = () => (
    <div className="khe__timeline">
        {[
            { stage: "Stage 1", text: "Normal eGFR (≥90) with kidney damage markers. Focus on control & monitoring." },
            { stage: "Stage 2", text: "Mild loss (60–89). Lifestyle changes & regular labs." },
            { stage: "Stage 3", text: "Moderate loss (30–59). Manage complications, see nephrologist." },
            { stage: "Stage 4", text: "Severe loss (15–29). Prepare for dialysis or transplant." },
            { stage: "Stage 5", text: "Kidney failure (<15). Dialysis or transplant needed." },
        ].map((item) => (
            <div key={item.stage} className="khe__timeItem">
                <div className="khe__timeDot" />
                <div className="khe__titlehoi">
                    <h4>{item.stage}</h4>
                    <p>{item.text}</p>
                </div>
            </div>
        ))}
    </div>
);

const Treatments = () => (
    <div className="khe__grid2">
        <Card title="In-center hemodialysis">
            Blood is filtered using a machine at a dialysis center, usually 3 times per week. Staff monitors treatment and access.
            <ul className="khe__list">
                <li>Regular schedule at center</li>
                <li>Staff-supported care</li>
                <li>Plan around fixed sessions</li>
            </ul>
        </Card>
        <Card title="Home hemodialysis (HHD)">
            Similar filtering at home with training. Can allow shorter, more frequent sessions based on prescription.
            <ul className="khe__list">
                <li>More flexibility</li>
                <li>Training required</li>
                <li>Home setup & supplies</li>
            </ul>
        </Card>
        <Card title="Peritoneal dialysis (PD)">
            Uses the lining of your abdomen to filter blood via dialysis fluid. Can be done at home; often overnight (APD) or manual exchanges (CAPD).
            <ul className="khe__list">
                <li>Needle-free access</li>
                <li>Daily routine</li>
                <li>Infection prevention is key</li>
            </ul>
        </Card>
        <Card title="Kidney transplant">
            Surgical option replacing failed kidneys with a healthy kidney from a donor. Requires evaluation, waitlist or living donor, and lifelong follow-up.
            <ul className="khe__list">
                <li>Best long-term outcomes</li>
                <li>Immunosuppressive meds</li>
                <li>Ongoing monitoring</li>
            </ul>
        </Card>
    </div>
);

const DietFluids = () => (
    <div className="khe__grid2">
        <Card title="Diet focus (varies by stage)">
            <ul className="khe__list">
                <li>Protein: adequate, stage-specific</li>
                <li>Sodium: usually limited</li>
                <li>Potassium & phosphorus: often restricted in later stages</li>
                <li>Balance: fruits/veggies as allowed, whole grains in moderation</li>
            </ul>
            <Callout type="warn" title="Important">
                Always follow your nephrologist/dietitian’s personalized plan and lab-based targets.
            </Callout>
        </Card>
        <Card title="Fluids & tracking">
            <ul className="khe__list">
                <li>Fluid limits are individualized (especially on dialysis)</li>
                <li>Track daily intake; watch for swelling/weight changes</li>
                <li>Read labels; avoid sugary & high-sodium drinks</li>
            </ul>
            <div className="khe__actionsRow">
                <a className="khe__btn khe__btnLight" href="/downloads/kidney-meal-guide.pdf" target="_blank" rel="noreferrer">
                    Download sample meal guide
                </a>
            </div>
        </Card>
    </div>
);

const FAQs = () => (
    <div className="khe__faq">
        {[
            {
                q: "Do all CKD patients need dialysis?",
                a: "No. Many people manage early stages with medicines, blood pressure/sugar control, and lifestyle changes. Dialysis or transplant is considered when kidney function is very low or symptoms are significant."
            },
            {
                q: "How do I choose a dialysis type?",
                a: "Discuss with your nephrologist based on your health, lifestyle, support at home, and preferences. Training and safety are essential."
            },
            {
                q: "Can I travel while on dialysis?",
                a: "Yes—with planning. In-center patients can arrange transient dialysis at other centers; home therapies require supply coordination and medical clearance."
            },
            {
                q: "What lab tests matter?",
                a: "eGFR, creatinine, urine albumin, potassium, phosphorus, hemoglobin, and blood pressure are commonly monitored."
            }
        ].map((item, idx) => (
            <details key={idx} className="khe__faqItem">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
            </details>
        ))}
    </div>
);

const Resources = () => (
    <div className="khe__grid3">
        <Card title="Understanding your labs">
            Learn what eGFR, creatinine, and urine albumin mean, and how they guide treatment decisions.
            <div className="khe__actionsRow">
                <a className="khe__link" href="/labs">View lab guide</a>
            </div>
        </Card>
        <Card title="Vascular access care">
            Tips to protect fistula/graft or catheter, prevent infection, and keep treatments running smoothly.
            <div className="khe__actionsRow">
                <a className="khe__link" href="/access-care">Access care tips</a>
            </div>
        </Card>
        <Card title="Visit preparation">
            Questions to ask, medication list, symptom tracker, and appointment checklist.
            <div className="khe__actionsRow">
                <a className="khe__link" href="/visit-checklist">Get the checklist</a>
            </div>
        </Card>
    </div>
);

/* ---- Reusable UI ---- */

const Card = ({ title, children }) => (
    <div className="khe__card">
        {title && <h3 className="khe__cardTitle">{title}</h3>}
        <div className="khe__cardBody">{children}</div>
    </div>
);

const Callout = ({ type = "info", title, children }) => (
    <div className={`khe__callout khe__callout--${type}`}>
        {title && <strong>{title}:</strong>} {children}
    </div>
);

/* ---- CSS ---- */

const css = `
.khe { --bg:#0b132b; --muted:#1c2541; --card:#ffffff; --text:#0b1220; --brand:#2dd4bf; --brand-strong:#14b8a6; --line:#e6e9f0; }
.khe * { box-sizing: border-box; }
.khe { font-family: "Figtree", system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: var(--text); }

/* Hero */
.khe__hero {
  position: relative;
  background: linear-gradient(140deg, #0ea5e9 0%, #22d3ee 50%, #2dd4bf 100%);
  color: #fff;
  border-radius: 24px;
  margin: 24px auto 16px;
  padding: 36px 20px;
  max-width: 1200px;
  overflow: hidden;
}
.khe__hero::after {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(900px 300px at 90% -10%, rgba(255,255,255,.18), transparent 60%);
  pointer-events:none;
}
.khe__heroContent { position: relative; max-width: 900px; margin: 0 auto; text-align: center; }
.khe__hero h1 { margin: 0 0 8px; font-size:  clamp(28px, 4.5vw, 44px); letter-spacing: -0.02em; }
.khe__hero p { margin: 0; font-size: clamp(15px, 2.4vw, 18px); opacity: .95; }

/* Stats */
.khe__stats {
  max-width: 1200px; margin: 18px auto 22px; padding: 0 8px;
  display: grid; gap: 12px; grid-template-columns: repeat(4, 1fr);
}
.khe__stat {
  background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 16px 14px;
  box-shadow: 0 6px 20px rgba(2,8,23,.06);
}
.khe__statLabel { font-size: 13px; font-weight: 600; color: #334155; text-transform: uppercase; letter-spacing: .08em; }
.khe__statText { margin: 6px 0 0; font-size: 14.5px; color: #0f172a; }

/* Tabs */
.khe__tabsWrap { position: sticky; top: 0; z-index: 10; background: linear-gradient(#fff,#fff) padding-box; padding: 6px 0; }
.khe__tabs {
  max-width: 1200px; margin: 0 auto; padding: 0 8px;
  display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none;
}
.khe__tabs::-webkit-scrollbar { display: none; }
.khe__tab {
  flex: 0 0 auto; border: 1px solid var(--line); background: #fff; color: #0b1220;
  padding: 10px 14px; border-radius: 999px; font-size: 14px; font-weight: 600;
  transition: .2s transform ease, .2s background ease, .2s border-color ease;
  outline: none; cursor: pointer;
}
.khe__tab:hover { transform: translateY(-1px); }
.khe__tab.is-active { background: var(--brand); color: #ffffff; border-color: transparent; }

/* Content wrapper */
.khe__content { max-width: 1200px; margin: 18px auto 40px; padding: 0 8px; }

/* Grids */
.khe__grid3 { display: grid; gap: 16px; grid-template-columns: repeat(3, 1fr); }
.khe__grid2 { display: grid; gap: 16px; grid-template-columns: repeat(2, 1fr); }

.khe__titlehoi{
margin-left:20px;
}

/* Card */
.khe__card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 10px 24px rgba(2,8,23,.06); }
.khe__cardTitle { margin: 0; padding: 16px 16px 0; font-size: 18px; letter-spacing: -.01em; }
.khe__cardBody { padding: 12px 16px 16px; color: #0f172a; font-size: 15.5px; line-height: 1.65; }
.khe__list { margin: 10px 0 0; padding-left: 18px; }
.khe__actionsRow { margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap; }

/* Pills */
.khe__pillRow { display: flex; flex-wrap: wrap; gap: 10px; }
.khe__pill {
  background: #f1f5f9; color: #0b1220; border: 1px solid var(--line);
  padding: 8px 12px; border-radius: 999px; font-size: 14px; font-weight: 600;
}

/* Timeline */
.khe__timeline { position: relative; padding-left: 18px; border-left: 2px dashed #dbe2ef; display: grid; gap: 14px; }
.khe__timeItem h4 { margin: 0 0 4px; font-size: 16px; }
.khe__timeItem p { margin: 0; font-size: 15px; color: #0f172a; }
.khe__timeItem { position: relative; }
.khe__timeDot { position: absolute; left: -5px;
    top: 5px;
 width: 12px; height: 12px; background: var(--brand); border-radius: 50%; box-shadow: 0 0 0 4px rgba(45,212,191,.25); }

/* Callout */
.khe__callout { border-radius: 12px; padding: 12px 14px; border: 1px solid; font-size: 15px; line-height: 1.6; }
.khe__callout--info { background: #f0f9ff; border-color: #bae6fd; color: #0c4a6e; }
.khe__callout--warn { background: #fff7ed; border-color: #fed7aa; color: #7c2d12; }

/* CTA */
.khe__cta { padding: 10px 8px 40px; }
.khe__ctaInner {
  max-width: 1200px; margin: 0 auto; padding: 22px 18px; border-radius: 20px;
  background: linear-gradient(135deg, #0ea5e9 0%, #22d3ee 40%, #2dd4bf 100%);
  color: #052e2b; box-shadow: 0 16px 40px rgba(14,165,233,.25);
}
.khe__ctaInner h3 { margin: 0 0 8px; font-size: clamp(18px, 4vw, 24px); }
.khe__ctaInner p { margin: 0 0 14px; font-size: 15.5px; color: #073a36; }
.khe__ctaActions { display: flex; gap: 10px; flex-wrap: wrap; }
.khe__btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 14px; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none; }
.khe__btnPrimary { background: #393a4b; color: #eafffb; }
.khe__btnGhost { background: rgba(255,255,255,.2); color: #062e2a; }
.khe__btnLight { background: #f1f5f9; color: #0b1220; }
.khe__link { color: #0ea5e9; font-weight: 700; text-decoration: none; }
.khe__link:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 1024px) {
  .khe__grid3 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .khe__stats { grid-template-columns: 1fr 1fr; }
  .khe__grid3 { grid-template-columns: 1fr; }
  .khe__grid2 { grid-template-columns: 1fr; }
  .khe__ctaInner { border-radius: 16px; }
}
@media (max-width: 480px) {
  .khe__hero { padding: 28px 16px; border-radius: 18px;margin:10px; }
  .khe__stats { grid-template-columns: 1fr; }
}
`;

export default KidneyHealthEducation;
