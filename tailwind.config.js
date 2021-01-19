module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          colors: {
              blurple: {
                  DEFAULT: '#7289DA'
              }
          }
      },
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
    plugins: [],
  };