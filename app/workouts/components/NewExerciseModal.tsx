import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface NewExerciseModalProps {
    onClose: Function,
    addExercise: Function
}

export function NewExerciseModal({ onClose, addExercise }: NewExerciseModalProps) {
    const [name, setName] = useState<string>("")
    const [sets, setSets] = useState<string>('0')
    const [reps, setReps] = useState<string>('0')
    const [difficulty, setDifficulty] = useState<string>("Easy")


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
                        <Text>Weight</Text>
                        <TextInput style={styles.input} value={reps} keyboardType="numeric" onChangeText={text => setReps(text)}></TextInput>
                        <Text>Difficulty</Text>
                        <TextInput style={styles.input} value={difficulty} onChangeText={text => setDifficulty(text)}></TextInput>
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
        borderColor: '#25292e',
        padding: 20,
        marginTop: 24,
        alignItems: 'center'
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
        backgroundColor: '#f0f0f0',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#fafafa',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
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