import { StyleSheet, Text, View, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Constants from "expo-constants";
import React, { useState, useEffect } from 'react'
import { Link } from "expo-router"
import { createClient } from "@supabase/supabase-js"

export default function Home() {
    const [email, setEmail] = useState("nabeel.sddq@gmail.com");
    const [password, setPassword] = useState("password");

    const extra = Constants.expoConfig?.extra as {
        EXPO_PUBLIC_SUPABASE_URL?: string;
        EXPO_PUBLIC_SUPABASE_ANON_KEY?: string;
    } | undefined;

    const supabaseUrl = extra?.EXPO_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Missing Supabase environment variables.");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    useEffect(() => {
        const login = async () => {
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                console.log("Login failed:", signInError.message);
                return;
            }

            const user = signInData.user;
            if (!user) {
                console.log("No user returned");
                return;
            }

            const { data: profile, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (profileError) {
                console.log("Failed to fetch profile:", profileError.message);
            } else {
                console.log("User profile:", profile);
            }
        };

        login();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeMessage}>hey nabeel,</Text>
            <Text style={styles.welcomeMessage}>ready for a workout?</Text>

            <View style={styles.cardGrid}>
                <View style={styles.column}>
                    <View style={styles.homePageCard}>
                        <Link href={"/workouts/workout"} asChild>
                            <Pressable>
                                <Text style={styles.summaryHeader}>This week's summary</Text>
                                <View style={styles.summaryItems}>
                                    <Text>3 workouts</Text>
                                    <Text>2hr 15 mins</Text>
                                    <Text>1240 calories</Text>
                                </View>
                            </Pressable>
                        </Link>
                    </View>

                    <View style={styles.homePageCard}>
                        <Link href={"/workouts/workout"} asChild>
                            <Pressable>
                                <Text style={styles.summaryHeader}>Longer Card</Text>
                                <Text>This one takes up a bit more space to test uneven heights.</Text>
                                <Text>Additional Line</Text>
                                <Text>Another one</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>

                <View style={styles.column}>
                    <View style={styles.homePageCard}>
                        <Link href={"/workouts/workout"} asChild>
                            <Pressable>
                                <Text style={styles.summaryHeader}>Recent Workout</Text>
                                <Text>Upper Body</Text>
                                <Text>April 22</Text>
                            </Pressable>
                        </Link>
                    </View>

                    <View style={styles.homePageCard}>
                        <Link href={"/workouts/workout"} asChild>
                            <Pressable>
                                <Text style={styles.summaryHeader}>Another Quick One</Text>
                                <Text>Shorter content</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>

            <Link href={"/workouts/workout"} asChild>
                <Pressable style={styles.newWorkoutButton}>
                    <Text style={styles.buttonText}>Start a workout</Text>
                </Pressable>
            </Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fff'
    },
    welcomeMessage: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    cardGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        gap: 16,
    },
    homePageCard: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 16,
        marginBottom: 16,
        marginHorizontal: 4,
        backgroundColor: '#fafafa',
    },
    summaryHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    summaryItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    newWorkoutButton: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 20,
        marginTop: 24,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
