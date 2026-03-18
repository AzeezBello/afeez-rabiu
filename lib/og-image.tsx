import { profile, stats } from "@/lib/site-content";

export function SeoImageTemplate() {
  return (
    <div
      style={{
        alignItems: "stretch",
        background:
          "linear-gradient(135deg, #fff7ed 0%, #ffffff 45%, #eff6ff 100%)",
        color: "#09090b",
        display: "flex",
        height: "100%",
        padding: "56px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(24, 24, 27, 0.08)",
          borderRadius: "36px",
          boxShadow: "0 24px 80px rgba(24, 24, 27, 0.08)",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          backgroundColor: "rgba(255, 255, 255, 0.82)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              color: "#b45309",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Digital Marketing Portfolio
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "86%",
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              color: "#3f3f46",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: "82%",
            }}
          >
            Digital Marketing Executive, SEO/SEM strategist, paid media
            operator, and research-oriented copywriter.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "36px",
            flexWrap: "wrap",
          }}
        >
          {stats.slice(0, 3).map((stat) => (
            <div
              key={stat.label}
              style={{
                alignItems: "flex-start",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(24, 24, 27, 0.08)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: 220,
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  fontWeight: 800,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "#71717a",
                  display: "flex",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
