import { TrapezoidBackground } from "../components/tabbar/elements";

export const COLORS = {
  Home: {
    BackgroundGradient: {
      "0%": "#2e335a",
      "100%": "#1c1b33",
    },
    SmokeGradient: {
      "0%": "rgba(58, 63, 84, 0)",
      "100%": "rgba(58, 63, 84, 1)",
    },
  },
  TabBar: {
    ArcComponent: {
      ArcPathGradient: {
        "0%": "rgba(58, 58, 106, 0.26)",
        "100%": "rgba(37, 36, 76, 0.26)",
      },
      ArcBorder: {
        style: "stroke" as "stroke",
        strokeWidth: 0.5,
        color: "rgba(117, 130, 244, 0.5)",
      },
    },
    TabBarItems: {
      MapIcon: {
        style: "fill" as "fill",
        color: "white",
      },
      ListIcon: {
        style: "fill" as "fill",
        color: "white",
      },
      TrapezoidBackground: {
        Path1: {
          LinearGradient: {
            "0%": "#252c51",
            "100%": "#3e3f74",
          },
        },
        Path2: {
          style: "stroke" as "stroke",
          strokeWidth: 0.5,
          color: "rgba(117, 130, 244, 0.5)",
        },
      },
    },
  },
};
