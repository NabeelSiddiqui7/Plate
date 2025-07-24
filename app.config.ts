import 'dotenv/config';

export default {
  expo: {
    name: "your-app-name",
    slug: "your-app-slug",
    // ... other config ...

    extra: {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
};
