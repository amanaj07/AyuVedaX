// Test script to check Supabase Auth directly
// Run this in your browser console to test the signup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

const testSignup = async () => {
  const { createClient } = await import(
    "https://cdn.skypack.dev/@supabase/supabase-js@2"
  );

  const supabase = createClient(
    supabaseUrl,
    supabaseKey
  );

  try {
    // Test 1: Simple signup without metadata
    console.log("Testing simple signup...");
    const { data, error } = await supabase.auth.signUp({
      email: "test@example.com",
      password: "password123",
    });

    if (error) {
      console.error("Simple signup error:", error);
    } else {
      console.log("Simple signup success:", data);
    }
  } catch (err) {
    console.error("Signup failed:", err);
  }
};

testSignup();
