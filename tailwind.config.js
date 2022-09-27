/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "poppins-b": ["poppins-b", "sans-serif"],
            "poppins-m": ["poppins-m", "sans-serif"],
            "poppins-r": ["poppins-r", "sans-serif"],
            "poppins-l": ["poppins-l", "sans-serif"],
            "nm-b": ["nm-b", "sans-serif"],
            "nm-m": ["nm-m", "sans-serif"],
            "nm-r": ["nm-r", "sans-serif"],
            "nm-l": ["nm-l", "sans-serif"],
        },
        backgroundColor: {
            red1: "#8F384D",
            red2: "#8F384D",
            red3: "rgba(255, 255, 255, 0.3)",
            red4: "#FFEBF0",
            red5: "#ECE2E4",
            themeRed: "#912028",
            background: "#E3E3E3",
            white: "#fff",
            gray: "#757575",
            mainContent: "#f8f9fd",
            "#dfc3ca": "#dfc3ca",
            lightGray: "#a8a8a8",
            transparent: "transparent",
            transparentGray: "rgba(45, 45, 45, 0.323)",
        },
        screens: {
            "2xl": { max: "1366px" },
            xl: { max: "1024px" },
            l: { max: "810px" },
            m: { max: "640px" },
            s: { max: "480px" },
            xs: { max: "375px" },
        },
        fontSize: {
            "20px": "20px",
            "24px": "24px",
            "16px": "16px",
            "12px": "12px",
            "40px": "40px",
            "14px": "14px",
        },
        maxWidth: {
            "1440px": "1440px",
            "580px": "580px",
        },
        minHeight: {
            mainContainer: "calc(100vh - 10rem)",
            dashboardContainer: "calc(100vh - 5rem)",
            "80vh": "80vh",
        },
        extend: {
            colors: {
                red1: "#8F384D",
                gray1: "#757575",
                themeRed: "#912028",
            },
            borderColor: {
                themeRed: "#912028",
            },
            width: {
                "48%": "48%",
                "66%": "66%",
                "28%": "28%",
                "32%": "32%",
                "33%": "33%",
            },
        },
    },
    plugins: [],
};
