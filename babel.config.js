// module.exports = {
//   // async: true,
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           node: "current",
//         },
//       },
//     ],
//   ],
//   plugins: ["@babel/plugin-transform-modules-commonjs"],
// };

module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
