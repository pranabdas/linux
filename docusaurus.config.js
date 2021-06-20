/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Linux tutorial",
  tagline: "Get jobs done using Linux/UNIX",
  url: "https://pranabdas.github.io",
  baseUrl: "/linux/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "Linux tutorial", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
      additionalLanguages: ["vim", "docker"],
    },
    hideableSidebar: true,
    colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    //   respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Linux tutorial",
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Other Docs",
          position: "left",
          items: [
            {
              label: "ARPES Python Tools",
              to: "https://pranabdas.github.io/arpespythontools/",
              target: "_self",
            },
            {
              label: "Machine Learning Notes",
              to: "https://pranabdas.github.io/machine-learning/",
              target: "_self",
            },
            {
              label: "Python Tutorial",
              to: "https://pranabdas.github.io/python-tutorial/",
              target: "_self",
            },
            {
              label: "Quantum Espresso Tutorial",
              to: "https://pranabdas.github.io/espresso/",
              target: "_self",
            },
            {
              label: "SUV Python Tools",
              to: "https://pranabdas.github.io/suvtools/",
              target: "_self",
            },
            {
              label: "Condensed Matter Notes",
              href: "https://pranabdas.github.io/docs/condmat-notes/",
            },
            {
              label: "Fortran Programming",
              href: "https://pranabdas.github.io/docs/fortran/",
            },
            {
              label: "FullProf Tutorial",
              href: "https://pranabdas.github.io/docs/fullprof/",
            },
            {
              label: "Javascript Tutorial",
              href: "https://pranabdas.github.io/docs/js-learning/",
            },
            {
              label: "SUV ARPES Manual",
              href: "https://pranabdas.github.io/docs/arpes-suv-man/",
            },
          ],
        },
        {
          to: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
          target: "_self",
          prependBaseUrlToHref: false,
        },
        {
          href: "https://github.com/pranabdas/linux",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/linux/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
