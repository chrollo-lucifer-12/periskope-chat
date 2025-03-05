import { supabase } from "../utils/supabaseClient";

// Sign up a new user
export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    return { data, error };
};

// Log in an existing user
export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { data, error };
};

// Log out user
export const signOut = async () => {
    await supabase.auth.signOut();
};

// Get the current authenticated user
export const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data?.user;
};
