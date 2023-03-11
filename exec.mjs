import * as esbuild from "esbuild"

const ctx = await esbuild.context({
  entryPoints: ["src/app.js"],
  bundle: true,
  outfile: "dist/app.js",
  target: ["chrome110", "firefox110", "safari16", "edge110"], // check browser list
  // dev
  sourcemap: true,
  // prod
  minify: true,
})

await ctx.watch()

const { host, port } = await ctx.serve({
  servedir: "dist"
})


console.log("Running on", host, port)