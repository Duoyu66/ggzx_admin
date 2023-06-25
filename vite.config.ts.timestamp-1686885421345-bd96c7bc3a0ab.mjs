// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/Users/40370/Desktop/v3_admin/v3_admin/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.9_@types+node@20.2.5_sass@1.61.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Users/40370/Desktop/v3_admin/v3_admin/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.1.0_vite@4.3.9_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///D:/Users/40370/Desktop/v3_admin/v3_admin/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-svg-icons@2.0.1_vite@4.3.9/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///D:/Users/40370/Desktop/v3_admin/v3_admin/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@4.3.9/node_modules/vite-plugin-mock/dist/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd());
  return {
    publicPath: "https://gitee.com/jch1011/guiguzhenxuan",
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        localEnabled: command === "serve"
        //保证开发阶段可以使用mock接口
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    //代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFw0MDM3MFxcXFxEZXNrdG9wXFxcXHYzX2FkbWluXFxcXHYzX2FkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFw0MDM3MFxcXFxEZXNrdG9wXFxcXHYzX2FkbWluXFxcXHYzX2FkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Vc2Vycy80MDM3MC9EZXNrdG9wL3YzX2FkbWluL3YzX2FkbWluL3ZpdGUuY29uZmlnLnRzXCI7Ly8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vL1x1NUYxNVx1NTE2NXN2Z1x1OTcwMFx1ODk4MVx1NzUyOFx1NTIzMFx1NjNEMlx1NEVGNlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG4vL21vY2tcdTYzRDJcdTRFRjZcdTYzRDBcdTRGOUJcdTY1QjlcdTZDRDVcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICAvL1x1ODNCN1x1NTNENlx1NTQwNFx1NzlDRFx1NzNBRlx1NTg4M1x1NEUwQlx1NzY4NFx1NUJGOVx1NUU5NFx1NzY4NFx1NTNEOFx1OTFDRlxuICBsZXQgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcbiAgcmV0dXJuIHtcbiAgICBwdWJsaWNQYXRoOiAnaHR0cHM6Ly9naXRlZS5jb20vamNoMTAxMS9ndWlndXpoZW54dWFuJyxcbiAgICBwbHVnaW5zOiBbdnVlKCksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJywvL1x1NEZERFx1OEJDMVx1NUYwMFx1NTNEMVx1OTYzNlx1NkJCNVx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOG1vY2tcdTYzQTVcdTUzRTNcbiAgICAgIH0pXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKFwiLi9zcmNcIikgLy8gXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHU5MTREXHU3RjZFXHVGRjBDXHU0RjdGXHU3NTI4IEAgXHU0RUUzXHU2NkZGIHNyY1xuICAgICAgfVxuICAgIH0sXG4gICAgLy9zY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU0RTAwXHU0RTJBXHU5MTREXHU3RjZFXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9zdHlsZXMvdmFyaWFibGUuc2Nzc1wiOycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9cdTRFRTNcdTc0MDZcdThERThcdTU3REZcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFtlbnYuVklURV9BUFBfQkFTRV9BUEldOiB7XG4gICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTY1NzBcdTYzNkVcdTc2ODRcdTY3MERcdTUyQTFcdTU2NjhcdTU3MzBcdTU3NDBcdThCQkVcdTdGNkVcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX1NFUlZFLFxuICAgICAgICAgIC8vXHU5NzAwXHU4OTgxXHU0RUUzXHU3NDA2XHU4REU4XHU1N0RGXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIC8vXHU4REVGXHU1Rjg0XHU5MUNEXHU1MTk5XG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRWpCLFNBQVMsNEJBQTRCO0FBRXJDLFNBQVMscUJBQXFCO0FBQzlCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFFakQsTUFBSSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUNyQyxTQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFBQyxJQUFJO0FBQUEsTUFDWixxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsUUFDMUQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ1osY0FBYyxZQUFZO0FBQUE7QUFBQSxNQUM1QixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsT0FBTztBQUFBO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBLFVBQ25CLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsQ0FBQyxJQUFJLGlCQUFpQixHQUFHO0FBQUE7QUFBQSxVQUV2QixRQUFRLElBQUk7QUFBQTtBQUFBLFVBRVosY0FBYztBQUFBO0FBQUEsVUFFZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
