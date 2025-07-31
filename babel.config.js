
import tailwindcss from "@tailwindcss/vite";



module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
          tailwindcss(),
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': '../screens/History',
            '@splash': './src/Splash_Screen',
            '@generate': './src/Generate_Code',
          },
        },
      ],
    ],
  };
};
