module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/Screens',
            '@splash': './src/Splash_Screen',
            '@generate': './src/Generate_Code', // 🔥 добавлен алиас
          },
        },
      ],
    ],
  };
};
