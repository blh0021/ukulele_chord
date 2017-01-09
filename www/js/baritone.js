var baritone = {
    "Major": {
        "A": "2 2 2 0",
        "Bb": "0 3 3 1",
        "B": "1 4 0 2",
        "C": "2 0 1 0",
        "C#": "3 1 2 1",
        "D": "0 2 3 2",
        "Eb": "4 2 3 2 3",
        "E": "2 1 0 0",
        "F": "3 2 1 1",
        "F#": "4 3 2 2",
        "G": "0 0 0 3",
        "G#": "1 1 1 4"
    },
    "Minor": {
        "A": "2 2 1 0",
        "Bb": "3 3 2 1",
        "B": "0 4 3 2",
        "C": "1 0 1 3",
        "C#": "2 1 2 0",
        "D": "0 2 3 1",
        "Eb": "4 3 4 2",
        "E": "2 0 0 0",
        "F": "3 1 1 1",
        "F#": "4 2 2 2",
        "G": "0 3 3 3",
        "G#": "1 4 4 4"
    },
    "Aug": {
        "A": "3 2 2 1",
        "Bb": "0 3 3 2",
        "B": "1 0 0 3",
        "C": "2 1 1 0",
        "C#": "3 2 2 1",
        "D": "0 3 3 2",
        "Eb": "2 0 0 3",
        "E": "2 1 1 4",
        "F": "3 2 2 1",
        "F#": "0 3 3 2",
        "G": "1 0 0 3",
        "G#": "2 1 1 0"
    },
    "Dim": {
        "A": "1 2 1 2",
        "Bb": "2 3 2 3",
        "B": "0 4 0 1",
        "C": "1 2 1 2",
        "C#": "2 3 2 3",
        "D": "0 1 0 1",
        "Eb": "1 2 1 2",
        "E": "2 3 2 3",
        "F": "0 1 0 1",
        "F#": "1 2 1 2",
        "G": "2 3 2 3",
        "G#": "0 1 0 1"
    },
    "7th": {
        "A": "2 2 2 3",
        "Bb": "3 3 3 4",
        "B": "1 2 0 2",
        "C": "2 3 1 3",
        "C#": "3 4 2 4",
        "D": "0 2 1 2",
        "Eb": "1 3 2 3",
        "E": "0 1 0 0",
        "F": "1 2 1 1",
        "F#": "2 3 2 2",
        "G": "0 0 0 1",
        "G#": "1 1 1 2"
    },
    "Minor 7": {
        "A": "2 2 1 3",
        "Bb": "3 3 2 4",
        "B": "0 2 0 2",
        "C": "1 3 1 3",
        "C#": "2 4 2 4",
        "D": "0 2 1 1",
        "Eb": "1 3 2 2",
        "E": "0 0 0 0",
        "F": "1 1 1 1",
        "F#": "2 2 2 2",
        "G": "3 3 3 3",
        "G#": "1 1 0 2"
    },
    "Major 7": {
        "A": "2 2 2 4",
        "Bb": "2 2 2 4 3",
        "B": "1 3 0 2",
        "C": "2 4 1 3",
        "C#": "2 4 1 3 3",
        "D": "0 2 2 2",
        "Eb": "1 3 3 3",
        "E": "1 1 0 0",
        "F": "3 2 1 0",
        "F#": "3 3 2 2",
        "G": "0 0 0 2",
        "G#": "1 1 1 3"
    },
    "6th": {
        "A": "2 2 2 2",
        "Bb": "3 3 3 3",
        "B": "4 4 4 4",
        "C": "2 2 1 3",
        "C#": "3 3 2 4",
        "D": "0 2 0 2",
        "Eb": "1 3 1 3",
        "E": "2 4 2 4",
        "F": "0 2 1 1",
        "F#": "1 3 2 2",
        "G": "0 0 0 0",
        "G#": "1 1 1 1"
    },
    "Minor 6": {
        "A": "2 2 1 2",
        "Bb": "3 0 2 1",
        "B": "0 1 0 2",
        "C": "1 2 1 3",
        "C#": "2 1 2 3",
        "D": "0 2 0 1",
        "Eb": "2 3 2 4 3",
        "E": "2 0 2 0",
        "F": "3 1 3 1",
        "F#": "1 2 2 2",
        "G": "0 3 3 0",
        "G#": "1 4 4 1"
    },
    "9th": {
        "A": "2 4 2 3",
        "Bb": "0 1 1 1",
        "B": "1 2 2 2",
        "C": "2 3 3 3",
        "C#": "1 1 0 1",
        "D": "2 2 1 2",
        "Eb": "2 2 1 2",
        "E": "0 1 0 2",
        "F": "1 2 1 3",
        "F#": "2 3 2 4",
        "G": "0 2 0 1",
        "G#": "1 3 1 2"
    },
    "Add 9": {
        "A": "1 3 1 4 3",
        "Bb": "0 3 1 1",
        "B": "1 4 2 2",
        "C": "0 0 1 0",
        "C#": "1 1 2 1",
        "D": "0 1 4 1 3",
        "Eb": "3 3 4 3",
        "E": "2 1 0 2",
        "F": "3 2 1 3",
        "F#": "4 3 2 4",
        "G": "0 2 0 3",
        "G#": "1 3 1 4"
    },
    "Minor 9": {
        "A": "1 4 0 4 3",
        "Bb": "1 3 -1 4 3",
        "B": "0 3 0 2 5",
        "C": "0 4 3 2 3",
        "C#": "1 2 2 0",
        "D": "2 2 3 1",
        "Eb": "2 2 3 1 3",
        "E": "2 0 0 2",
        "F": "3 1 1 3",
        "F#": "2 1 0 2",
        "G": "4 2 2 4 3",
        "G#": "1 3 0 4"
    },
    "Sus 2": {
        "A": "2 2 0 0",
        "Bb": "3 3 1 1",
        "B": "4 4 2 2",
        "C": "0 0 1 3",
        "C#": "1 1 2 4",
        "D": "0 2 3 0",
        "Eb": "1 3 4 1",
        "E": "1 3 4 1 3",
        "F": "3 0 1 1",
        "F#": "4 1 2 2",
        "G": "0 2 3 3",
        "G#": "1 3 4 4"
    },
    "Sus 4": {
        "A": "0 2 3 0",
        "Bb": "1 3 4 1",
        "B": "1 3 4 1 3",
        "C": "3 0 1 1",
        "C#": "4 1 2 2",
        "D": "0 2 3 3",
        "Eb": "1 3 4 4",
        "E": "2 2 0 0",
        "F": "3 3 1 1",
        "F#": "4 4 2 2",
        "G": "0 0 1 3",
        "G#": "1 1 2 4"
    },
    "7 Sus 4": {
        "A": "2 2 3 3",
        "Bb": "2 2 3 3 3",
        "B": "3 3 4 4 3",
        "C": "2 2 3 3 5",
        "C#": "1 1 2 2 7",
        "D": "0 2 1 3",
        "Eb": "1 3 2 4",
        "E": "0 2 0 0",
        "F": "1 3 1 1",
        "F#": "2 4 2 2",
        "G": "0 0 1 1",
        "G#": "1 1 2 2"
    }
}
