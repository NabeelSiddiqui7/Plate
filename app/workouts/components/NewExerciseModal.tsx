import { Modal, View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

interface NewExerciseModalProps {
    onClose: Function,
    addExercise: Function
}

export function NewExerciseModal({ onClose, addExercise }: NewExerciseModalProps) {
    const [name, setName] = useState<string>("")
    const [sets, setSets] = useState<string>('0')
    const [reps, setReps] = useState<string>('0')
    const [difficulty, setDifficulty] = useState<string>("")


    function onSave() {
        addExercise(name, sets, reps, difficulty);
    }
    return (
        <View>
            <Modal animationType="slide" transparent={true} /*visible={isVisible}*/>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Add Exercise</Text>
                        <Pressable onPress={() => onClose(false)}>
                            <Text>Close</Text>
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <Text>Name</Text>
                        <TextInput style={styles.input} value={name} onChangeText={text => setName(text)}></TextInput>
                        <Text>Sets</Text>
                        <TextInput style={styles.input} value={sets} keyboardType="numeric" onChangeText={text => setSets(text)}></TextInput>
                        <Text>Reps</Text>
                        <TextInput style={styles.input} value={reps} keyboardType="numeric" onChangeText={text => setReps(text)}></TextInput>
                        <Text>Difficulty</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Pressable style={styles.newExerciseButton} onPress={() => onSave()}><Text>Save</Text></Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
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

    modalContent: {
        height: '75%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    modalBody: {
        padding: 12,
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
    }

})