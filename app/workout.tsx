import { StyleSheet, Text, View, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Workout() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>New Workout</Text>
            <View style={styles.exerciseCard}>
                <Text>Incline Bench Press</Text>
                <View style={styles.exerciseCardContent}>
                    <Text>3 sets / 10 reps</Text>
                    <Text>Challenging</Text>
                </View>
            </View>
            <View style={styles.exerciseCard}>
                <Text>Incline Bench Press</Text>
                <View style={styles.exerciseCardContent}>
                    <Text>3 sets / 10 reps</Text>
                    <Text>Challenging</Text>
                </View>
            </View>
            <Pressable style={styles.newExerciseButton}><Text>Add a new exercise</Text></Pressable>
            <View style={styles.saveButtonsContainer}>
                <Pressable style={styles.newExerciseButton}><Text>Save as template</Text></Pressable>
                <Pressable style={styles.newExerciseButton}><Text>Save workout</Text></Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center', padding: 20 },
    exerciseCard: { width: '80%', padding: 16, flexDirection: 'column', gap: 4, borderRadius: 16, borderWidth: 1, borderColor: '#e0e0e0' },
    exerciseCardContent: { flexDirection: 'row', gap: 4 },
    newExerciseButton: { borderRadius: 16, borderWidth: 1, borderColor: '#e0e0e0', padding: 20 },
    saveButtonsContainer: { flexDirection: 'row' }

})