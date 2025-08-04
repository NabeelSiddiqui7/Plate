import { StyleSheet, Text, View, Pressable, Modal, TextInput } from "react-native"

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


export function ExerciseCard({exercise}:ExerciseCardProps) {
    return (
        <View style={styles.exerciseCard}>
            <Text style={styles.exerciseCardTitle}>{exercise.name}</Text>
            <View style={styles.exerciseCardContent}>
                <Text>{exercise.weight}</Text>
                <Text>{`${exercise.sets} sets / ${exercise.reps} reps`}</Text>
                <Text>Challenging</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})