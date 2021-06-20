module.exports = {
  docs: [
    {
      type: "category",
      label: "Docs",
      items: [
        "commands",
        "vi",
        "git",
        "docker",
        "setup",
        "shell-scripting",
        {
          type: "category",
          label: "Misc",
          collapsed: true,
          items: [
            "pgp",
            "filesystem",
            "network-setup",
            "firewall",
            "network-security",
            "apache",
            "nextcloud",
            "selinux",
            "hpc",
          ],
        },
        "license",
      ],
    },
  ],
};
