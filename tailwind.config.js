tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#ffffff",
                "outline": "#787589",
                "error": "#ba1a1a",
                "primary-fixed-dim": "#c8bfff",
                "primary-fixed": "#e5deff",
                "surface-container-high": "#e2e9ed",
                "on-secondary": "#ffffff",
                "on-primary-fixed-variant": "#4000db",
                "on-tertiary-fixed-variant": "#504700",
                "on-primary-container": "#c5bcff",
                "surface-container-lowest": "#ffffff",
                "background": "#f3fafe",
                "inverse-surface": "#2a3135",
                "on-background": "#161d20",
                "on-primary-fixed": "#180064",
                "surface-container-low": "#eef5f9",
                "primary": "#3500b9",
                "surface-bright": "#f3fafe",
                "secondary-container": "#bfcefd",
                "on-surface-variant": "#474557",
                "on-tertiary": "#ffffff",
                "on-surface": "#161d20",
                "on-error-container": "#93000a",
                "surface-dim": "#d4dbdf",
                "on-tertiary-container": "#484000",
                "secondary-fixed": "#dae2ff",
                "on-tertiary-fixed": "#201c00",
                "surface-container": "#e8eff3",
                "tertiary-fixed-dim": "#dec800",
                "on-secondary-container": "#48577f",
                "error-container": "#ffdad6",
                "inverse-primary": "#c8bfff",
                "tertiary-container": "#c0ac00",
                "secondary": "#4e5d86",
                "outline-variant": "#c9c3da",
                "tertiary": "#6a5f00",
                "tertiary-fixed": "#fde41a",
                "surface-tint": "#582eff",
                "primary-container": "#4a00f8",
                "surface": "#f3fafe",
                "on-secondary-fixed": "#081a3f",
                "inverse-on-surface": "#ebf2f6",
                "on-primary": "#ffffff",
                "surface-container-highest": "#dce4e7",
                "surface-variant": "#dce4e7",
                "secondary-fixed-dim": "#b6c5f4",
                "on-secondary-fixed-variant": "#37466d"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "margin-desktop": "64px",
                "container-max": "1440px",
                "gutter": "24px",
                "margin-mobile": "24px",
                "base": "8px"
            },
            "fontFamily": {
                "headline-md": ["Space Grotesk", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"],
                "title-lg": ["Space Grotesk", "sans-serif"],
                "display-lg": ["Space Grotesk", "sans-serif"],
                "label-md": ["Inter", "sans-serif"],
                "headline-lg": ["Space Grotesk", "sans-serif"]
            },
            "fontSize": {
                "headline-md": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "title-lg": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }]
            }
        }
    }
};
