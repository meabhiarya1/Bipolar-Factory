const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },

    async webpackFinal(config) {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, "..", "src"),
            "node_modules",
        ];
        return config;
    },

    docs: {
        autodocs: true
    }
};