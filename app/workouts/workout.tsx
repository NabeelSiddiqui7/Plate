import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseCard } from "./components/ExerciseCard";
import { NewExerciseModal } from "./components/NewExerciseModal";

import { useSelector } from "react-redux";
import { RootState } from '../redux/store';


interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight: number;
    difficulty: string;
}

export default function Workout() {
    const [newExerciseModalOpen, setNewExerciseModalOpen] = useState<boolean>(false);
    const [exercises, setExercises] = useState<Array<Exercise>>([])
    const profile = useSelector((state: RootState) => state.auth.profile);
    const supabase = useSelector((state: RootState) => state.client.client)

    // handle opening or closing of modal
    function newExerciseButtonClick(open: boolean) {
        setNewExerciseModalOpen(open);
    }

    async function onSaveWorkoutButtonClick() {
        console.log(profile)
        if (!profile?.id) {
            console.warn("User not logged in!");
            return;
        }

        const { data: workout, error } = await supabase
            .from("workouts")
            .insert({ user_id: profile.id! }) // assuming you got `user` from auth
            .select()
            .single();
        if (error) {
            console.log("Workout could not be created");
        } else {
            console.log(workout)
        }
        const savedExercises = exercises.map(exercise => {return {...exercise, workout_id: workout.id}})
        console.log(savedExercises);

        await supabase.from("exercises").insert(exercises);
    }

    function addExercise(name: string, sets: number, reps: number, weight: number, difficulty: string) {
        const exercise = {
            name,
            sets,
            reps,
            weight,
            difficulty
        }
        setExercises([...exercises, exercise])
    }

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
                    <ExerciseCard exercise={exercise} />
                )
            })}
            <Pressable style={styles.newExerciseButton} onPress={() => newExerciseButtonClick(true)}>
                <Text style={styles.buttonText}>add exercise</Text>
            </Pressable>
            <View style={styles.saveButtonsContainer}>
                <Pressable style={styles.newExerciseButton}><Text>Save as template</Text></Pressable>
                <Pressable style={styles.newExerciseButton} onPress={() => onSaveWorkoutButtonClick()}><Text>Save workout</Text></Pressable>
            </View>
            {newExerciseModalOpen &&
                <NewExerciseModal
                    addExercise={addExercise}
                    onClose={newExerciseButtonClick}
                ></NewExerciseModal>}
            {newExerciseModalOpen && <View style={styles.opacity} />}
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
    },
    opacity: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: 'black',
        opacity: 0.5
    }
})