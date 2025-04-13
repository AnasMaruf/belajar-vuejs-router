import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          users: [
            "./components/User.vue",
            "./components/UserProfile.vue",
            "./components/UserHeader.vue",
            "./components/UserOrder.vue",
            "./components/UserOrderFooter.vue",
            "./components/UserWishlist.vue",
            "./components/UserWishlistFooter.vue",
          ],
        },
      },
    },
  },
});
