import { StyleSheet, Text, View, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, {useState} from 'react'
import { Link } from "expo-router"

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeMessage}>Hello Nabeel, ready for a workout?</Text>
            <View style={styles.weeklySummaryContainer}>
                <Link href={"/workout"} asChild>
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
            <View style={styles.recentWorkoutContainer}>
                <Link href={"/workout"} asChild>
                    <Pressable>
                        <Text style={styles.summaryHeader}>Recent Workout</Text>
                        <Text>Upper Body</Text>
                        <Text>April 22</Text>
                    </Pressable>
                </Link>
            </View>
            <Link href={"/workout"} asChild>
                <Pressable style={styles.newWorkoutButton}><Text style={styles.welcomeMessage}>Start a workout</Text></Pressable>
            </Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    welcomeMessage: { fontSize: 32, fontWeight: "bold" },
    weeklySummaryContainer: { width: "100%", borderRadius: 16, borderWidth: 1, borderColor: '#e0e0e0', padding: 20 },
    summaryHeader: { fontSize: 16 },
    summaryItems: { flexDirection: "row", justifyContent: "space-between" },
    recentWorkoutContainer: { width: "100%", flexDirection: "column", borderRadius: 16, borderWidth: 1, borderColor: '#e0e0e0', padding: 20 },
    newWorkoutButton: { borderRadius: 16, borderWidth: 1, borderColor: '#e0e0e0', padding: 20, marginTop: "auto" }
})