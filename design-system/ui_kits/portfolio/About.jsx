// About.jsx — portrait + bio + quick facts.
function About() {
  const facts = [
    { icon: "briefcase", label: "Role", value: "Java Backend Developer @ Boostech" },
    { icon: "mapPin", label: "Based in", value: "Ho Chi Minh City, Vietnam" },
    { icon: "languages", label: "English", value: "TOEIC R/L 750" },
    { icon: "code", label: "Practice", value: "DSA on LeetCode, regularly" },
  ];
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="portrait-wrap">
          <img className="portrait" src="../../assets/portrait.jpg" alt="Nguyen Hoang Hiep" />
          <span className="portrait-tag"><Icon.mapPin size={13} /> Ho Chi Minh City</span>
        </Reveal>
        <div className="about-body">
          <Reveal><Eyebrow>// 01 — About</Eyebrow></Reveal>
          <Reveal delay={60}>
            <p style={{ marginTop: 14 }}>
              I'm a <strong>Java backend developer</strong> who likes the unglamorous,
              load-bearing parts of software: clean APIs, sensible architecture, and data
              layers that hold up under pressure.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              At <strong>Boostech</strong> I design RESTful services with Spring Boot,
              build <strong>role-based access control</strong>, tune PostgreSQL, and lean
              on multi-threading for bulk work — with structured logging and tests so
              production nights stay calm. I'm drawn to <strong>scalable, distributed
              systems</strong> and comfortable moving fast in a startup.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="facts">
              {facts.map((f) => {
                const Ic = Icon[f.icon];
                return (
                  <div className="fact" key={f.label}>
                    <span className="fi"><Ic size={20} /></span>
                    <div>
                      <div className="fl">{f.label}</div>
                      <div className="fv">{f.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.About = About;
