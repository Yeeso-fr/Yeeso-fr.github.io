import type { Preview } from "@storybook/nextjs-vite";
import { Fira_Code, Playfair_Display, Poppins } from "next/font/google";

import "@/ui-kit/styles/theme.css";
import "@/ui-kit/styles/storybook/_storybook.css";

const primaryFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const secondaryFont = Playfair_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const monospaceFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Clair" },
          { value: "dark", title: "Sombre" },
        ],
      },
    },
  },

  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduction", "*"],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      const html = document.querySelector("html");
      if (html) {
        html.setAttribute("data-theme", theme);
        html.classList.add(
          primaryFont.className,
          secondaryFont.className,
          monospaceFont.variable,
        );
      }

      return (
        <div
          data-theme={theme}
          className={`${primaryFont.className} ${secondaryFont.className} ${monospaceFont.variable}`}
          style={{ minHeight: "100%", padding: "1rem" }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
