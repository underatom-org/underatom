export const utilsRegistry = [
  {
    "name": "utils",
    "type": "registry:lib",
    "description": "Various utilities",
    "files": [
      {
        "type": "registry:lib",
        "path": "utils/utils.tsx",
        "content": "import { ReactNode, createContext, useContext } from \"react\";\n\nexport const getGenericContext = <T,>(displayName: string) => {\n  const context = createContext<T | undefined>(undefined);\n\n  const Provider = context.Provider;\n  const useComponentContext = () => {\n    const ctx = useContext(context);\n    if (!ctx) {\n      throw new Error(`This component must be used within a ${displayName} component.`);\n    }\n    return ctx;\n  };\n\n  return { Provider, useComponentContext };\n};\n\nexport type RenderRoot = {\n  (children: ReactNode, className: string): ReactNode;\n};\n",
        "target": "underatom/utils/utils.tsx"
      }
    ]
  },
  {
    "name": "Icons",
    "type": "registry:lib",
    "description": "Icons",
    "dependencies": [
      "@tabler/icons-react"
    ],
    "files": [
      {
        "type": "registry:lib",
        "path": "utils/Icons.tsx",
        "content": "export * from \"@tabler/icons-react\";\nimport {\n  IconChevronDown,\n  IconAtom,\n  IconCircleHalf,\n  IconLoader2,\n  IconX,\n  IconChevronRight,\n  IconChevronLeft,\n  IconCheck,\n  IconMinus,\n  IconRosette,\n} from \"@tabler/icons-react\";\n\nexport const CaretDown = IconChevronDown;\nexport const CaretRight = IconChevronRight;\nexport const CaretLeft = IconChevronLeft;\nexport const Atom = IconAtom;\nexport const Circle = IconCircleHalf;\nexport const Loader = IconLoader2;\nexport const X = IconX;\nexport const Minus = IconMinus;\nexport const Check = IconCheck;\nexport const Rosette = IconRosette;\n\n// Story\nexport {\n  IconMail,\n  IconUser,\n  IconSettings,\n  IconPlug,\n  IconKey,\n  IconDeviceAnalytics,\n  IconMoon,\n  IconCommand,\n  IconSearch,\n  IconPalette,\n  IconMessage,\n  IconVideo,\n  IconPhone,\n  IconLogout,\n  IconEyeOff,\n  IconCopy,\n  IconArrowUp,\n  IconArrowDown,\n  IconTerminal2,\n  IconCirclePlus,\n  IconGrid3x3,\n  IconApple,\n  IconBrandFacebook,\n  IconBrandLinkedin,\n  IconBrandYoutube,\n  IconCarrot,\n  IconCherry,\n  IconLemon,\n  IconMushroom,\n  IconPlus,\n  IconEdit,\n  IconReplace,\n  IconTrash,\n  IconBrandGoogle,\n} from \"@tabler/icons-react\";\n",
        "target": "underatom/utils/Icons.tsx"
      }
    ]
  },
  {
    "name": "extendedTV",
    "type": "registry:lib",
    "description": "Extended Tailwind Variants",
    "dependencies": [
      "tailwind-variants"
    ],
    "files": [
      {
        "type": "registry:lib",
        "path": "utils/extendedTV.ts",
        "content": "import { createTV } from \"tailwind-variants\";\n\nexport const tv = createTV({});\n",
        "target": "underatom/utils/extendedTV.ts"
      }
    ]
  },
  {
    "name": "theme",
    "type": "registry:lib",
    "description": "Theme",
    "tailwind": {
      "config": {
        "theme": {
          "colors": {
            "primary": {
              "50": "#f7f7f8",
              "100": "#eeeef0",
              "200": "#d9d9de",
              "300": "#bebfc6",
              "400": "#9899a5",
              "500": "#737584",
              "600": "#5d5e6c",
              "700": "#4c4d58",
              "800": "#41414b",
              "900": "#303036",
              "950": "#1d1d20"
            },
            "base": {
              "50": "#fafafa",
              "100": "#efeff1",
              "200": "#e4e4e7",
              "300": "#d4d4d8",
              "400": "#a8a9b2",
              "500": "#94939e",
              "600": "#83828e",
              "700": "#6f6e78",
              "800": "#5f5d65",
              "900": "#4c4a4f",
              "950": "#353437"
            },
            "danger": {
              "50": "#fef2f2",
              "100": "#fee2e2",
              "200": "#fecaca",
              "300": "#fca5a5",
              "400": "#f87172",
              "500": "#ef4445",
              "600": "#dc2627",
              "700": "#b91c1d",
              "800": "#991b1c",
              "900": "#7f1d1e",
              "950": "#450a0a"
            },
            "success": {
              "50": "#f9ffe4",
              "100": "#f0ffc5",
              "200": "#dfff93",
              "300": "#c7ff54",
              "400": "#adfa1f",
              "500": "#8ee101",
              "600": "#6db400",
              "700": "#538803",
              "800": "#436b09",
              "900": "#395a0d",
              "950": "#1b3300"
            },
            "warning": {
              "50": "#fefbe8",
              "100": "#fef7c3",
              "200": "#feec8a",
              "300": "#fdda47",
              "400": "#fac71e",
              "500": "#eaac08",
              "600": "#ca8404",
              "700": "#a15d07",
              "800": "#85490e",
              "900": "#713c12",
              "950": "#421e06"
            },
            "background": {
              "50": "#fcfcfc",
              "100": "#fafafa",
              "200": "#f7f7f7"
            },
            "white": "#ffffff",
            "transparent": "#00000000",
            "misc": {
              "blue": "#0b6de0",
              "orange": "#ef952a"
            }
          },
          "boxShadow": {
            "sm": "0px 2px 6px -6px #0000001a",
            "focus-ring": "0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #18181b",
            "md": "0px 2px 4px -2px #0000000f, 0px 4px 6px -1px #0000000f",
            "lg": "0px 10px 16px -3px #0000001a",
            "cut-in-elevated-sm": "0px 6px 8px -1px #0000000f, 0px 0px 0px 2px #fafafa, 0px 0px 6px 2px #0000000f",
            "cut-in-elevated-lg": "0px 4px 6px -2px #0000000f, 0px 6px 8px 1px #0000000f, 0px 0px 0px 4px #fafafa",
            "cut-in-sm": "0px 0px 0px 2px #fafafa",
            "cut-in-lg": "0px 0px 0px 4px #fafafa"
          },
          "spacing": {
            "0": "0px",
            "1": "4px",
            "2": "8px",
            "3": "12px",
            "4": "12px",
            "5": "16px",
            "6": "20px",
            "7": "24px",
            "8": "28px",
            "9": "32px",
            "10": "36px",
            "11": "40px",
            "12": "44px",
            "13": "46px",
            "14": "52px"
          },
          "borderRadius": {
            "xs": "4px",
            "sm": "6px",
            "md": "8px",
            "lg": "12px"
          },
          "borderWidth": {
            "0": "0px",
            "1": "1px",
            "2": "2px"
          },
          "fontSize": {
            "xs": [
              "12px",
              "20px"
            ],
            "sm": [
              "14px",
              "24px"
            ],
            "md": [
              "16px",
              "24px"
            ],
            "lg": [
              "18px",
              "28px"
            ],
            "xl": [
              "20px",
              "32px"
            ],
            "2xl": [
              "24px",
              "32px"
            ],
            "3xl": [
              "30px",
              "36px"
            ],
            "4xl": [
              "48px",
              "56px"
            ]
          },
          "fontFamily": {
            "display": [
              "GeistVariable",
              "ui-sans-serif",
              "system-ui",
              "sans-serif",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji"
            ],
            "text": [
              "GeistVariable",
              "ui-sans-serif",
              "system-ui",
              "sans-serif",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji"
            ]
          }
        }
      }
    }
  }
]