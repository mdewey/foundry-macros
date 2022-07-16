module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "globals": {
        "game": true,
        "canvas": true,
    },
    "rules": {
        "semi": [1, "always"],
    }
};
