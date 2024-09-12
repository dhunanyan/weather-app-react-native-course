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
      CircleButton: {
        LinearGradient: {
          whenPressed: {
            "0%": "#bbbfc7",
            "100%": "#ffffff",
          },
          whenNotPressed: {
            "0%": "#f5f5f9",
            "100%": "#dadfe7",
          },
        },
        Shadow: {
          blur: 0.5,
          color: "white",
        },
        Plus: {
          style: "stroke" as "stroke",
          strokeCap: "round" as "round",
          strokeWidth: 4,
          color: "#48319d",
        },
      },
    },
  },
  Sections: {
    WeatherInfo: {
      cityTextColor: "rgba(255, 255, 255, 1)",
      temperatureColor: "rgba(255, 255, 255, 1)",
      conditionColor: "rgba(235, 235, 245, 0.6)",
      minMaxTextColor: "rgba(255, 255, 255, 1)",
    },
  },
  ForecastSheet: {
    BackgroundGradient: {
      "0%": "rgba(46, 51, 90, 0.26)",
      "100%": "rgba(28, 57, 51, 0.26)",
    },
    LinePath: {
      style: "stroke" as "stroke",
      strokeWidth: 2,
      color: "#dddddd",
    },
    LinePathGradient: {
      "0%": "#dddddd",
      "100%": "transparent",
    },
    Separator: {
      Line: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      Shadow: {
        blur: 0,
        color: "rgba(0, 0, 0, 0.2)",
      },
    },
    ForecastControl: {
      Line: {
        strokeWidth: 3,
      },
      LinearGradient: {
        "0%": "rgba(167, 132, 137, 0)",
        "100%": "rgba(167, 132, 137, 1)",
      },
    },
    ForecastCapsule: {
      RoundedRect: {
        color: "rgba(72, 49, 157, 0.2)",
        activeColor: "rgba(72, 49, 157, 1)",
      },
      Shadow1: {
        blur: 0,
        color: "rgba(255, 255, 255, 0.25)",
      },
      Shadow2: {
        blur: 0,
        color: "rgba(0, 0, 0, 0.075)",
      },
    },
  },
};
