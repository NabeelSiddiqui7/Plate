import { StyleSheet, Text, View, Pressable, Modal, TextInput } from "react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { NewExerciseModal } from "./components/NewExerciseModal";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  difficulty: string;
}

export default function Workout() {
    const [newExerciseModalOpen, setNewExerciseModalOpen] = useState<Boolean>(false);
    const [exercises, setExercises] = useState<Array<Exercise>>([])

    // handle opening or closing of modal
    function newExerciseButtonClick(open: Boolean) {
        setNewExerciseModalOpen(open);
    }

    function addExercise(name: string, sets: string, reps: string, difficulty: string) {
        const exercise = {
            name,
            sets,
            reps,
            difficulty
        }
        setExercises([...exercises, exercise])
    }

    console.log(exercises)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.newWorkoutTitle}>new workout</Text>
            <View style={styles.exerciseCard}>
                <Text style={styles.exerciseCardTitle}>Incline Bench Press</Text>
                <View style={styles.exerciseCardContent}>
                    <Text>3 sets / 10 reps</Text>
                    <Text>Challenging</Text>
                </View>
            </View>
            <View style={styles.exerciseCard}>
                <Text style={styles.exerciseCardTitle}>Incline Bench Press</Text>
                <View style={styles.exerciseCardContent}>
                    <Text>3 sets / 10 reps</Text>
                    <Text>Challenging</Text>
                </View>
            </View>
            {exercises.map(exercise => {
                return (
                    <View style={styles.exerciseCard}>
                        <Text style={styles.exerciseCardTitle}>{exercise.name}</Text>
                        <View style={styles.exerciseCardContent}>
                            <Text>{`${exercise.sets} sets / ${exercise.reps} reps`}</Text>
                            <Text>Challenging</Text>
                        </View>
                    </View>
                )
            })}
            <Pressable style={styles.newExerciseButton} onPress={() => newExerciseButtonClick(true)}>
                <Text style={styles.buttonText}>add exercise</Text>
            </Pressable>
            <View style={styles.saveButtonsContainer}>
                <Pressable style={styles.newExerciseButton}><Text>Save as template</Text></Pressable>
                <Pressable style={styles.newExerciseButton}><Text>Save workout</Text></Pressable>
            </View>

            {newExerciseModalOpen &&
                <NewExerciseModal
                    addExercise={addExercise}
                    onClose={newExerciseButtonClick}
                ></NewExerciseModal>}
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
    newWorkoutTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    exerciseCard: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 16,
        marginBottom: 16,
        marginHorizontal: 4,
        backgroundColor: '#fafafa',
    },
    exerciseCardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    exerciseCardContent: {
        flexDirection: 'row',
        gap: 4
    },
    newExerciseButton: {
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
    },
    saveButtonsContainer: {
        flexDirection: 'row'
    }
})