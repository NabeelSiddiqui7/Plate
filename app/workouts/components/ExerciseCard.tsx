import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

interface ExerciseCardProps {
    exercise: Exercise
}

interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight: number;
    difficulty: string;
}


export function ExerciseCard({ exercise }: ExerciseCardProps) {
    console.log(exercise);
    return (
        <BlurView intensity={50} tint="dark" style={styles.exerciseCard}>
            <Text style={styles.exerciseCardTitle}>{exercise.name}</Text>
            <View style={styles.exerciseCardContent}>
                <Text style={styles.exerciseCardContentText}>{exercise.weight}lbs</Text>
                <Text style={styles.exerciseCardContentText}>{`${exercise.sets} sets / ${exercise.reps} reps`}</Text>
                <Text style={styles.exerciseCardContentText}>{exercise.difficulty}</Text>
            </View>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    exerciseCard: {
        borderRadius: 20,
        padding: 20,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        overflow: 'hidden',
    },
    exerciseCardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    exerciseCardContent: {
        flexDirection: 'row',
        gap: 4
    },
    exerciseCardContentText: {
        color: '#ccc'
    }
})